<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $dbUsers = User::firstWhere('email', $request->input("email"));

        if ($dbUsers == null) {
            // user is not found in the database
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        if (Hash::check($request->input('password'), $dbUsers->password)) {
            
            // user exists and has a valid password - generate a fresh jwt token
            $key = env('APP_KEY');
            $payload = [
                'iss' => env('APP_URL'),
                'iat' => time(),
                'exp' => time() + env('JWT_EXP')
            ];
            $token = JWT::encode($payload, $key, 'HS256');

            User::where('email', $request->input('email'))
                ->update(['token' => $token]);

            return response()->json(['token' => $token]);
            
        }
        else {
            // user exists but not a valid password
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}

?>