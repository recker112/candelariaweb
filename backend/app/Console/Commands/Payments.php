<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\WalletSystem\PendingPayment;
use App\Models\WalletSystem\BankTransaction;

class Payments extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'pending:payments';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Procesar pagos pendientes';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return int
	 */
	public function handle()
	{
		$pending_to_delete = PendingPayment::where('status', '!=', 'pendiente')
			->get();
		
		foreach($pending_to_delete as $pending) {
			$pending->delete();
		}
		
		$pending_payments = PendingPayment::where('status', 'pendiente')
			->get();
		
		$success = 0;
		$notFound = 0;
		foreach($pending_payments as $pending) {
			// NOTA(RECKER): Buscar transaccion bancaria
			$bank_transaction = BankTransaction::where(function ($query) use ($pending) {
					$query->where('concepto', $pending->reference)
						->orWhere('reference', $pending->reference);
				})
				->where('amount', $pending->amount)
				->where('code', $pending->code)
				->where('date', $pending->date)
				->first();
			
			if (!$bank_transaction) {
				$pending->status = 'no encontrado';
				$pending->save();
				
				$notFound++;
			}else {
				// NOTA(RECKER): Obtener usuario
				$user = $pending->user;
				
				// NOTA(RECKER): Asignar transaccion bancaria
				$bank_transaction->user_id = $user->id;
				$bank_transaction->save();
				
				// NOTA(RECKER): Crear transaccion
				$bank_account = $bank_transaction->bank_account;
				$payload = [
					'actions' => [
						[
							'reason' => 'Verificación de transferencia bancaria',
							'amount' => $bank_transaction->amount,
						]
					],
					'extra_data' => [
						'name' => $bank_account->name,
						'rif' => $bank_account->rif,
						'n_account' => $bank_account->n_account,
						'code' => $bank_account->code,
						'type' => $bank_account->type
					]
				];
				$transaction = $user->transactions()->create([
					'type' => 'pago verificado',
					'payload' => $payload,
					'amount' => $bank_transaction->amount,
					'previous_balance' => $user->wallet->balance,
					'payment_method' => 'transferencia o depósito bancario',
				]);
				
				// NOTA(RECKER): Guardar relacion polimorfica
				$bank_transaction->transaction()->save($transaction);
				
				// NOTA(RECKER): Agregar saldo
				$user->wallet->balance += $bank_transaction->amount;
				$user->wallet->save();
				
				$pending->status = 'verificado';
				$pending->save();
				
				$success++;
			}
		}
		
		$this->info('Pagos pendientes procesados correctamente: '.$success);
		$this->info('Pagos pendientes no encontrados: '.$notFound);
		$this->info('Pagos pendientes eliminados: '.$pending_to_delete->count());
	}
}
