<?php
namespace App\CustomExtensions;
use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Contracts\Auth\Authenticatable as UserContract;
//Model
use App\Users;

class MyEloquentUserProvider extends EloquentUserProvider
{
    /**
     * Validate a user against the given credentials.
     *
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
     * @param  array  $credentials
     * @return bool
     */
    public function validateCredentials(UserContract $user, array $credentials)
    {
        //contraseña recibida del formulario.
        $passForm = $credentials['user_password'];
        //Encriptar
        $passEncForm = Users::encript_password($passForm, false);

        //Recibir contraseña del servidor
        $passServer = $user->getAuthPassword();
        return Users::verify_password($passEncForm, $passServer);;
    }
}