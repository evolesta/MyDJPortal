@extends('base')

@section('title', 'Feest toevoegen')

@section('content')
    <h3>Feest toevoegen</h3>

    <div class="row">
    <form class="col s12" method="POST" action="/admin/gigs">
        @csrf
        <div class="input-field col s12">
          <input id="naam" class="validate" name="name" type="text">
          <label for="naam">Soort feest</label>
        </div>
        {{--  show the client and location relational fields --}}
        <div class="input-field col s6">
            <select id="client" name="client_id">
                <option value="" disabled selected>Klant</option>
                @foreach ($clients as $client)
                    <option value="{{ $client->id }}">{{ $client->name }}</option>
                @endforeach
            </select>
            <label for="client">Kies klant</label>
        </div>
        <div class="input-field col s6">
            <select id="location" name="location_id">
                <option value="" disabled selected>Locatie</option>
                @foreach ($locations as $location)
                    <option value="{{ $location->id }}">{{ $location->name }}</option>
                @endforeach
            </select>
            <label for="client">Kies locatie</label>
        </div>

        <div class="input-field col s12">
            <input type="text" name="date" id="date" class="datepicker">
            <label for="date">Datum</label>
        </div>

        <div class="input-field col s6">
            <input type="text" name="start" id="start" class="timepicker">
            <label for="start">Starttijd</label>
        </div>
        <div class="input-field col s6">
            <input type="text" name="end" id="end" class="timepicker">
            <label for="end">Eindtijd</label>
        </div>

        <p>
            <label>
                <input type="checkbox" name="djset"/>
                <span>DJ Set</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" name="sound"/>
                <span>Geluidsset</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" name="light"/>
                <span>Lichtset</span>
            </label>
        </p>

        <div class="input-field col s12">
            <textarea name="notes" id="notes" class="materialize-textarea"></textarea>
            <label for="notes">Notities</label>
        </div>

        <button class="btn waves-effect waves-light" type="submit" name="action">Opslaan
          <i class="material-icons right">send</i>
        </button>
    </form>
  </div>
@endsection