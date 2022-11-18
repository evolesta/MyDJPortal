<?php

namespace App\Http\Controllers;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\LocationsController;

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

    // Gigs CRUD actions
    $router->get('gigs', 'GigsController@index');
    $router->get('gigs/{id}', 'GigsController@show');
    $router->post('gigs', 'GigsController@store');
    $router->put('gigs/{id}', 'GigsController@update');
    $router->delete('gigs/{id}', 'GigsController@destroy');

    $router->get('locations', 'LocationsController@index');
    $router->get('locations/{id}', 'LocationsController@show');
    $router->post('locations', 'LocationsController@store');
    $router->put('locations/{id}', 'LocationsController@update');
    $router->delete('locations/{id}', 'LocationsController@destroy');
});