<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    /**
     * @param  $request
     * @return mixed
     */
    public function toResponse($request)
    {
        $home = '';

        switch (auth()->user()->user_type) {
            case 'admin':
                $home = '/admin/dashboard';
                break;
            case 'restaurant':
                $home = '/restaurant/dashboard';
                break;
            case 'delivery':
                $home = '/delivery/dashboard';
                break;
            default:
                $home = '/';
                break;
        }

        return redirect()->intended($home);
    }
}
