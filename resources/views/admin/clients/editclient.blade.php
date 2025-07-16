@extends('base')

@section('title', 'Klant bewerken')

@section('content')
    <h3>Klant bewerken</h3>

    <div class="row">
    <form class="col s12" method="POST" action="/admin/clients/{{ $client->id }}">
        @csrf
        @method('PUT')
        <div class="input-field col s12">
          <input id="naam" class="validate" name="name" type="text" value='{{ $client->name }}'>
          <label for="naam">Naam</label>
        </div>
        <div class="input-field col s6">
          <input id="first_name" class="validate" name="first_name" type="text" value='{{ $client->first_name }}'>
          <label for="first_name">Voornaam</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" class="validate" name="last_name" type="text" value='{{ $client->last_name }}'>
          <label for="last_name">Achternaam</label>
        </div>
        <div class="input-field col s12">
          <input id="address" class="validate" name="address" type="text" value='{{ $client->address }}'>
          <label for="address">Adres</label>
        </div>
        <div class="input-field col s6">
          <input id="postal_code" class="validate" name="postal_code" type="text" value='{{ $client->postal_code }}'>
          <label for="postal_code">Postcode</label>
        </div>
        <div class="input-field col s6">
          <input id="location" class="validate" name="location" type="text" value='{{ $client->location }}'>
          <label for="location">Woonplaats</label>
        </div>
        <div class="input-field col s6">
          <input id="phone" class="validate" name="phone" type="text" value='{{ $client->phone }}'>
          <label for="phone">Telefoonnummer</label>
        </div>
        <div class="input-field col s6">
          <input id="email" class="validate" name="email" type="email" value='{{ $client->email }}'>
          <label for="email">E-mailadres</label>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Opslaan
          <i class="material-icons right">send</i>
        </button>
    </form>
  </div>
@endsection