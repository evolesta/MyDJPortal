<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        return Client::all();
    }

    public function show($id)
    {
        return Client::find($id)->first();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email'
        ]);

        $client = new Client;
        $client->firstName = $request->input('firstName');
        $client->lastName = $request->input('lastName');
        $client->address = $request->input('address');
        $client->zipcode = $request->input('zipcode');
        $client->location = $request->input('location');
        $client->email = $request->input('email');
        $client->phone = $request->input('phone');
        $client->deleted = FALSE;
        $client->save();

        return response()->json($client);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email'
        ]);

        $client = Client::find($id);
        $client->firstName = $request->input('firstName');
        $client->lastName = $request->input('lastName');
        $client->address = $request->input('address');
        $client->zipcode = $request->input('zipcode');
        $client->location = $request->input('location');
        $client->email = $request->input('email');
        $client->phone = $request->input('phone');
        $client->deleted = FALSE;
        $client->save();

        return response()->json($client);
    }

    public function destroy($id)
    {
        Client::destroy($id);
    }
}

?>