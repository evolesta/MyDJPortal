@extends('base')

@section('title', 'Locatie toevoegen')

@section('content')
    <h3>Locatie toevoegen</h3>

    <div class="row">
    <form class="col s12" method="POST" action="/admin/locations">
        @csrf
        <div class="input-field col s12">
          <input id="naam" class="validate" name="name" type="text">
          <label for="naam">Naam</label>
        </div>
        <div class="input-field col s6">
          <input id="address" class="validate" name="address" type="text">
          <label for="address">Adres</label>
        </div>
        <div class="input-field col s6">
          <input id="location" class="validate" name="location" type="text">
          <label for="location">Woonplaats</label>
        </div>
        <div class="input-field col s12">
          <input id="phone" class="validate" name="phone" type="text">
          <label for="phone">Telefoonnummer</label>
        </div>
        <div class="input-field col s12">
            <textarea id="notes" class="materialize-textarea" name="notes"></textarea>
            <label for="notes">Notities</label>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Opslaan
          <i class="material-icons right">send</i>
        </button>
    </form>
  </div>
@endsection