<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gig;
use App\Models\Client;
use App\Models\Location;
use DateTime;

class GigController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gigs = Gig::with(['location', 'client'])
        ->orderBy('date')
        ->paginate(10);
        return view('admin.gigs.gigs', ['gigs' => $gigs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clients = Client::where('deleted', false)->get();
        $locations = Location::where('deleted', false)->get();
        return view('admin.gigs.addgig', ['clients' => $clients, 'locations' => $locations]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'date' => 'required'
        ]);

        $gig = new Gig();
        $gig->name = $request->name;
        $gig->client_id = $request->client_id; // Foreign key fields
        $gig->location_id = $request->location_id;

        // Convert date to database accepted format
        $date = DateTime::createFromFormat('d-m-Y', $request->date);
        $gig->date = $date->format('Y-m-d');
        $gig->start = $request->start;
        $gig->end = $request->end;

        // Parse checkboxes to booleans
        $gig->djset = isset($request->djset) ? true : false;
        $gig->sound = isset($request->sound) ? true : false;
        $gig->light = isset($request->light) ? true : false;

        $gig->notes = $request->notes;
        $gig->save();

        return redirect('admin/gigs')
            ->with('status', 'Feest succesvol aangemaakt.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Get gig
        $gig = Gig::find($id);

        // Get all clients and locations for modifying a relational field
        $clients = Client::where('deleted', false)->get();
        $locations = Location::where('deleted', false)->get();

        return view('admin.gigs.editgig', ['gig' => $gig, 'clients' => $clients, 'locations' => $locations]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
            'date' => 'required'
        ]);

        $gig = Gig::find($id);
        $gig->name = $request->name;
        $gig->client_id = $request->client_id; // Foreign key fields
        $gig->location_id = $request->location_id;

        // Convert date to database accepted format
        $date = DateTime::createFromFormat('d-m-Y', $request->date);
        $gig->date = $date->format('Y-m-d');
        $gig->start = $request->start;
        $gig->end = $request->end;

        // Parse checkboxes to booleans
        $gig->djset = isset($request->djset) ? true : false;
        $gig->sound = isset($request->sound) ? true : false;
        $gig->light = isset($request->light) ? true : false;

        $gig->notes = $request->notes;
        $gig->save();

        return redirect('admin/gigs')
            ->with('status', 'Feest succesvol gewijzigd.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $gig = Gig::destroy($id); // Gigs are always deleted

        return redirect('admin/gigs')
            ->with('status', 'Feest succesvol verwijderd.');
    }
}
