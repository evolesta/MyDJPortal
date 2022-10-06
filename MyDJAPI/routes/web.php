<?php

namespace App\Http\Controllers;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

// public routes
$router->post('token', 'AuthController@authenticate');

// protected routes
$router->group(['middleware' => 'auth'], function () use ($router) {

    // Client CRUD actions
    $router->get('client', 'ClientController@index');
    $router->get('client/{id}', 'ClientController@show');
    $router->post('client', 'ClientController@store');
    $router->put('client/{id}', 'ClientController@update');
    $router->delete('client/{id}', 'ClientController@destroy');
});