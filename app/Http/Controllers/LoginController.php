<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function render()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        // validate body payload
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        // Validate the user credentials
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect('/admin/dashboard');
        }

        // Invalid credentials
        return back()->with('error', 'E-mailadres of wachtwoord onjuist.');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin/login');
    }
}
