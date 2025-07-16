<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->has('search')) {
            $clients = Client::where('name', 'like', '%' . $request->search . '%')
            ->where('deleted', false)
            ->paginate(10);
        }
        else {
            $clients = Client::where('deleted', false)->paginate(10);
        }

        return view('admin.clients.clients', ['clients' => $clients]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.clients.addclient');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation body payload
        $payload = $request->validate([
            'name' => 'required',
            'email' => 'required|email'
        ]);

        // adding to database
        $client = new Client();
        $client->name = $request->name;
        $client->last_name = $request->last_name;
        $client->first_name = $request->first_name;
        $client->address = $request->address;
        $client->postal_code = $request->postal_code;
        $client->location = $request->location;
        $client->phone = $request->phone;
        $client->email = $request->email;
        $client->save();

        return redirect('admin/clients')
            ->with('status', 'Klant aangemaakt.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $client = Client::find($id);
        return view('admin.clients.editclient', ['client' => $client]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validate body
        $payload = $request->validate([
            'name' => 'required',
            'email' => 'required|email'
        ]);

        // modify object and save into DB
        $client = Client::find($id);
        $client->name = $request->name;
        $client->first_name = $request->first_name;
        $client->last_name = $request->last_name;
        $client->address = $request->address;
        $client->postal_code = $request->postal_code;
        $client->location = $request->location;
        $client->phone = $request->phone;
        $client->email = $request->email;
        $client->save();

        return redirect('admin/clients')
            ->with('status', 'Klant succesvol gewijzigd.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Get client and set it to deleted
        $client = Client::find($id);
        $client->deleted = true;
        $client->save();

        return redirect('admin/clients')
            ->with('status', 'Klant succesvol verwijderd.');
    }
}
