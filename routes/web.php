<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\GigController;
use App\Http\Controllers\LocationController;

Route::get('/', function () {
    return view('base');
});

// Public routes
Route::get("/admin/login", [LoginController::class, 'render'])->name('login');
Route::post("/admin/login", [LoginController::class, 'login']);
Route::get('/admin/logout', [LoginController::class, 'logout']);

// Secured routes
Route::middleware(['auth'])->group(function () {
    // Main dashboard route
    Route::get('/admin/dashboard', function () {
        return view('base');
    });

    // Resource routes
    Route::resource('/admin/clients', ClientController::class);
    Route::resource('/admin/gigs', GigController::class);
    Route::resource('/admin/locations', LocationController::class);
});