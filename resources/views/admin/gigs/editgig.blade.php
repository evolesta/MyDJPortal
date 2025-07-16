@extends('base')

@section('title', 'Feest toevoegen')

@section('content')
    <h3>Feest toevoegen</h3>

    <div class="row">
    <form class="col s12" method="POST" action="/admin/gigs/{{ $gig->id }}">
        @method('PUT')
        @csrf
        <div class="input-field col s12">
          <input id="naam" class="validate" name="name" type="text" value="{{ $gig->name }}">
          <label for="naam">Soort feest</label>
        </div>
        {{--  show the client and location relational fields --}}
        <div class="input-field col s6">
            <select id="client" name="client_id">
                <option value="" disabled>Klant</option>
                @foreach ($clients as $client)
                    <option value="{{ $client->id }}" @if($gig->client_id == $client->id) selected @endif>{{ $client->name }}</option>
                @endforeach
            </select>
            <label for="client">Kies klant</label>
        </div>
        <div class="input-field col s6">
            <select id="location" name="location_id">
                <option value="" disabled selected>Locatie</option>
                @foreach ($locations as $location)
                    <option value="{{ $location->id }}" @if($gig->location_id == $location->id) selected @endif>{{ $location->name }}</option>
                @endforeach
            </select>
            <label for="client">Kies locatie</label>
        </div>

        <div class="input-field col s12">
            <input type="text" name="date" id="date" class="datepicker" value="{{ \Carbon\Carbon::parse($gig->date)->format('d-m-Y') }}">
            <label for="date">Datum</label>
        </div>

        <div class="input-field col s6">
            <input type="text" name="start" id="start" class="timepicker" value="{{ $gig->start }}">
            <label for="start">Starttijd</label>
        </div>
        <div class="input-field col s6">
            <input type="text" name="end" id="end" class="timepicker" value="{{ $gig->end }}">
            <label for="end">Eindtijd</label>
        </div>

        <p>
            <label>
                <input type="checkbox" name="djset" @if($gig->djset) checked @endif/>
                <span>DJ Set</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" name="sound" @if($gig->sound) checked @endif/>
                <span>Geluidsset</span>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" name="light" @if($gig->light) checked @endif/>
                <span>Lichtset</span>
            </label>
        </p>

        <div class="input-field col s12">
            <textarea name="notes" id="notes" class="materialize-textarea">{{ $gig->notes }}</textarea>
            <label for="notes">Notities</label>
        </div>

        <button class="btn waves-effect waves-light" type="submit" name="action">Opslaan
          <i class="material-icons right">send</i>
        </button>
    </form>
  </div>
@endsection