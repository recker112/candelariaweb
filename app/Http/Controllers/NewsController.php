<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// Validación en try
use Illuminate\Validation\ValidationException;
//Storage
use Illuminate\Support\Facades\Storage;
//Carbon
use Carbon\Carbon;
//Models
use App\News;
use App\User;
use App\Log;

class NewsController extends Controller
{
	private $path = "Noticias";
	
	public function store()
	{
		$offset = request()->offset;
		$limit = request()->limit;
		
		$allNoticias = News::with('user')
			->orderBy('id', 'Desc')
			->offset($offset)
			->limit($limit)
			->where('onlyUsers', '!=', 1)
			->get();
		
		//Total de logs
		$lastNoticia = News::first()->toArray();
		
		$finish = false;
		foreach($allNoticias as $noticia) {
			if ($noticia->id === $lastNoticia['id']) {
				$finish = true;
			}
			
			//Set Fecha
			$parse1 = Carbon::parse($noticia->created_at);
			$parse1 = Carbon::parse($noticia->updated_at);
			$noticia->fechaHumano = $parse1->diffForHumans();
			$noticia->fechaHumanoModify = $parse1->diffForHumans();
		}
		
		$jsonMessage = [
			'data' => $allNoticias,
			'finish' => $finish,
		];
		
		return response()->json($jsonMessage, 200);
	}
	
	public function storeUser()
	{
		$offset = request()->offset;
		$limit = request()->limit;
		
		$allNoticias = News::with('user')
			->orderBy('id', 'Desc')
			->offset($offset)
			->limit($limit)
			->get();
		
		//Total de logs
		$lastNoticia = News::first()->toArray();
		
		$finish = false;
		foreach($allNoticias as $noticia) {
			if ($noticia->id === $lastNoticia['id']) {
				$finish = true;
			}
			
			//Set Fecha
			$parse1 = Carbon::parse($noticia->created_at);
			$parse1 = Carbon::parse($noticia->updated_at);
			$noticia->fechaHumano = $parse1->diffForHumans();
			$noticia->fechaHumanoModify = $parse1->diffForHumans();
		}
		
		$jsonMessage = [
			'data' => $allNoticias,
			'finish' => $finish,
		];
		
		return response()->json($jsonMessage, 200);
	}
	
	public function storeAdmin()
	{
		$user = request()->user();
		
		if ($user->privilegio !== 'A-' || !$user->permissionsAdmin->noticia_modify) {
			$jsonMessage = [
				'code' => 403,
				'msg'=>'not_permissions',
				'description' => 'No tienes permisos'
			];
			return response()->json($jsonMessage, 403);
		}
		
		$search = request()->search;

		$perPage = request()->per_page;
		$page = request()->page * $perPage;
		
		if ($user->permissionsAdmin->noticia_modify_otros) {
			$allNoticias = News::with('user')
				->offset($page)
				->limit($perPage)
				->whereHas('user', function ($query) {
					$search = request()->search;
					$query->where('cedula', 'LIKE', "%$search%");})
				->orWhere('created_at', 'LIKE', "%$search%")
				->get()
				->toArray();
		}else {
			$allNoticias = News::with('user')->where('user_id_owner', $user->id)
				->offset($page)
				->limit($perPage)
				->whereHas('user', function ($query) {
					$search = request()->search;
					$query->where('cedula', 'LIKE', "%$search%");})
				->orWhere('created_at', 'LIKE', "%$search%")
				->get()
				->toArray();
		}
		
		//Total de logs
		$noticiasCount = News::count();
		
		$jsonMessage = [
			'data' => $allNoticias,
			'page' => request()->page * 1, 
			'totalLogs' => $noticiasCount
		];
		
		return response()->json($jsonMessage, 200);
	}
	
	public function create()
	{
		$user = request()->user();
		$imgs = request()->file('imgs');
		
		if ($user->privilegio !== 'A-' || !$user->permissionsAdmin->noticia_modify) {
			$jsonMessage = [
				'code' => 403,
				'msg'=>'not_permissions',
				'description' => 'No tienes permisos'
			];
			return response()->json($jsonMessage, 403);
		}
			
		//ValidateData
		try {
			$dataValidate = request()->validate([
				'title' => 'required|string|min:6|max:100',
				'content' => 'required|string|min:20|max:50000',
			], [
				/*
				Custom message
				GLOBAL [propiedad] = required
				ESPECIFICO [value].[propiedad] = user.required
				*/
				'required' => 'Campo obigatorio',
				'string' => 'No válido',
				'min' => 'No válido',

			]);
		} catch (ValidationException $exception) {
			return response()->json([
				'code' => 422,
				'msg'    => 'validation_error',
				'errors' => $exception->errors(),
				'description' => 'El servidor rechazó su solicitud'
			], 422);
		}
		
		$noticia = new News();
		
		$noticia->title = request()->title;
		$noticia->content = request()->content;
		$noticia->user_id_owner = $user->id;
		$noticia->onlyUsers = json_decode(request()->onlyUsers);
		$noticia->save();
		
		//Cargar imágenes
		$errorLogs = [];
		$imgsUploaded = null;
		$e = 0;
		
		if (!empty($imgs)){
			//Guardar cada archivo
			$i = 0;
			foreach($imgs as $file) {
				//Datos
				$error = [];
				$mimeType = $file->getMimeType();
				$size = $file->getSize();
				//Nombre del archivo completo
				$filenameOriginal = $file->getClientOriginalName();
				//Extension
				$extension = $file->extension();
				//Nombre solo
				$filename = explode('.', $filenameOriginal);
				$filename = $filename[0];
				
				//Verificar MIME
				$verifyMIME = $this->verifyMime($mimeType, [
					'image/png',
					'image/jpeg'
				]);
				
				if (!$verifyMIME) {
					$error = [
						'type_error' => 'mime',
						'msg' => 'Solo se aceptan imagenes .png/.jpg/.jpeg'
					];
				}else if ($size / 1024 > 5120){
					//Verificar SIZE
					$error = [
						'type_error' => 'size',
						'msg' => 'El archivo supera el tamaño máximo'
					];
				}
				
				//Upload
				if (!$error) {
					//Mover archivo
					Storage::disk('public')->putFileAs(
						"$this->path/$noticia->id", $file, $filenameOriginal
					);
					
					//URL
					$url = Storage::disk('public')
						->url("$this->path/$noticia->id/$filenameOriginal");
					
					$imgsUploaded[$i] = $url;
					$i++;
				}else {
					$errorLogs[$e] = $error;
					$e++;
				}
			}
		}
		
		$noticia->imgs = json_encode($imgsUploaded);
		$noticia->save();
		
		//Log
		$Log = new Log;
		$Log->user_id = $user->id;
		$Log->action = 'Noticia #'.$noticia->id.' creada.' ;
		$Log->type = 'user';
		$Log->save();
		
		//Verificar Errores
		if ($imgs && count($errorLogs) === count($imgs)) {
			return response()->json([
				'msg' => 'new_publicate_without_img',
				'description' => 'No se pudo cargar ninguna imagen',
				'errors' => $errorLogs,
			], 400);
		}else if (count($errorLogs) > 0) {
			return response()->json([
				'msg' => 'new_publicate_without_some_img',
				'description' => 'Algunas imagenes fueron cargadas',
				'errors' => $errorLogs
			], 200);
		}
		
		return response()->json([
			'msg' => 'new_publicate',
			'description' => 'Noticia publicada correctamente'
		], 200);
	}
	
	public function remove($id)
	{
		$user = request()->user();
		
		if ($user->privilegio !== 'A-' || !$user->permissionsAdmin->noticia_modify) {
			$jsonMessage = [
				'code' => 403,
				'msg'=>'not_permissions',
				'description' => 'No tienes permisos'
			];
			
			return response()->json($jsonMessage, 403);
		}
		
		$noticia = News::find($id);
		
		if (!$noticia) {
			$jsonMessage = [
				'code' => 404,
				'msg'=>'not_found',
				'description' => 'Noticia no encontrada'
			];
			
			return response()->json($jsonMessage, 404);
		}
		
		if ($user->permissionsAdmin->noticia_modify_otros) {
			Storage::disk('public')->deleteDirectory("$this->path/$id");
			$noticia->delete();
			
			$jsonMessage = [
				'code' => 200,
				'msg'=>'notice_deleted',
				'description' => 'Noticia borrada correctamente'
			];
		}else {
			if ($noticia->user_id_owner === $user->id) {
				Storage::disk('public')->deleteDirectory("$this->path/$id");
				$noticia->delete();
				
				$jsonMessage = [
					'code' => 200,
					'msg'=>'notice_deleted',
					'description' => 'Noticia permiso OC'
				];
			}else {
				$jsonMessage = [
					'code' => 403,
					'msg'=>'not_permissions',
					'description' => 'No tienes permiso para borrar esta noticia'
				];
				
				return response()->json($jsonMessage, 403);
			}
		}
		
		return response()->json($jsonMessage, 200);;
	}
	
	//funciones reutilizables
	public function verifyMime($mime, $list)
	{
		$found = 0;
		for ($i=0; $i < count($list); $i++){
			if ($mime === $list[$i]){
				$found = 1;
			}
		}
		
		return $found;
	}
}
