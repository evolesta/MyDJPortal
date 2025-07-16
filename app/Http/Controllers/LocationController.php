<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $locations = Location::where('deleted', false)->get();
        return view('admin.locations.locations', ['locations' => $locations]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.locations.addlocation');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validate request and store into db
        $request->validate([
            'name' => 'required'
        ]);

        $location = new Location();
        $location->name = $request->name;
        $location->address = $request->address;
        $location->phone = $request->phone;
        $location->location = $request->location;
        $location->notes = $request->notes;
        $location->save();

        return redirect('admin/locations')
            ->with('status', 'Locatie aangemaakt.');
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
        $location = Location::find($id);
        return view('admin.locations.editlocation', ['location' => $location]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $location = Location::find($id);
        $location->name = $request->name;
        $location->location = $request->location;
        $location->address = $request->address;
        $location->phone = $request->phone;
        $location->notes = $request->notes;
        $location->save();

        return redirect('admin/locations')
            ->with('status', 'Locatie succesvol gewijzigd.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $location = Location::find($id);
        $location->deleted = true;
        $location->save();

        return redirect('admin/locations')
            ->with('status', 'Locatie verwijderd.');
    }
}
