<?php

namespace App\Http\Controllers;

use App\Models\Gig;
use Illuminate\Http\Request;

class GigsController extends Controller
{
    // GET /gigs
    public function index()
    {
        return Gig::all();
    }

    // GET /gigs/{id}
    public function show(Request $request, $id)
    {
        return Gig::find($id);
    }

    // POST /gigs
    public function store(Request $request)
    {
        $this->validate($request, [
            'client_id' => 'required',
            'gigType' => 'required'
        ]);

        $gig = new Gig;
        $gig->client_id = $request->input('client_id');
        $gig->gigType = $request->input('gigType');
        $gig->location_id = $request->input('location_id');
        $gig->gigDate = $request->input('gigDate');
        $gig->gigStart = $request->input('gigStart');
        $gig->gigEnd = $request->input('gigEnd');
        $gig->amountGuests = $request->input('amountGuests');
        $gig->sound = $request->input('sound');
        $gig->light = $request->input('light');
        $gig->save();

        return response($gig, 200);
    }

    // PUT /gigs/{id}
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'client_id' => 'required',
            'gigType' => 'required'
        ]);

        $gig = Gig::find($id);
        $gig->client_id = $request->input('client_id');
        $gig->gigType = $request->input('gigType');
        $gig->location_id = $request->input('location_id');
        $gig->gigDate = $request->input('gigDate');
        $gig->gigStart = $request->input('gigStart');
        $gig->gigEnd = $request->input('gigEnd');
        $gig->amountGuests = $request->input('amountGuests');
        $gig->sound = $request->input('sound');
        $gig->light = $request->input('light');
        $gig->save();     

        return response($gig, 200);
    }

    // DELETE /gigs/{id}
    public function destroy($id)
    {
        Gig::destroy($id);
        return response('OK', 200);
    }
}

?>