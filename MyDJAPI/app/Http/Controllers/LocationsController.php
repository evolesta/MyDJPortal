<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationsController extends Controller
{
    // GET /locations
    public function index()
    {
        return Location::all();
    }

    // GET /locations/{id}
    public function show(Request $request, $id)
    {
        return Location::find($id);
    }

    // POST /locations
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'type' => 'required'
        ]);

        $location = new Location;
        $location->name = $request->input('name');
        $location->type = $request->input('type');
        $location->address = $request->input('address');
        $location->postalCode = $request->input('postalCode');
        $location->city = $request->input('city');
        $location->description = $request->input('description');
        $location->save();

        return response($location, 200);
    }

    // PUT /locations/{id}
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'type' => 'required'
        ]);

        $location = Location::find($id);
        $location->name = $request->input('name');
        $location->type = $request->input('type');
        $location->address = $request->input('address');
        $location->postalCode = $request->input('postalCode');
        $location->city = $request->input('city');
        $location->description = $request->input('description');
        $location->save();

        return response($location, 200);
    }

    // DELETE /locations/{id}
    public function destroy($id)
    {
        Location::destroy($id);
        return response('OK', 200);
    }
}

?>