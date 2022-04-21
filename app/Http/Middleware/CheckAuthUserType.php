<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckAuthUserType
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

        $route = $request->path(); // /admin/*, /restaurant/*, /delivery/*
        $user_type = $request->user()->user_type; // user,restaurant,delivery,admin

        if (!str_starts_with($route, $user_type) && $user_type != 'admin') {
            abort(403);
        }

        return $next($request);
    }
}
