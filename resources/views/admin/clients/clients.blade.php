@extends('base')

@section('title', 'Klanten')

@section('content')
    <h3>Klanten</h3>
    <a class="waves-effect waves-light btn right" href="/admin/clients/create"><i class="material-icons left">add</i> Nieuwe klant</a>

    {{-- Search function --}}
    <div class="row">
        <form action="{{ route('clients.index') }}" method='GET'>
            <div class="input-field col s2">
                <input type="text" name="search" id="search" placeholder="Zoeken...">
            </div>
            <div class="col s1">
                <button class="btn-flat"><i class="material-icons">search</i></button>
            </div>
        </form>
    </div>

    <table>
        <thead>
            <tr>
                <th>Naam</th>
                <th>Contactpersoon</th>
                <th>E-mailadres</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @if (count($clients) > 0)
                @foreach ($clients as $client)
                <tr>
                    <td>{{ $client->name }}</td>
                    <td>{{ $client->first_name }} {{ $client->last_name }}</td>
                    <td>{{ $client->email }}</td>
                    <td>
                        <a class="dropdown-trigger btn-flat" href="#" data-target="dropdown{{ $client->id }}">
                            <i class='material-icons'>more_vert</a>
                        </a>
                    </td>
                </tr>
                @endforeach
            @else
                <td>Er zijn nog geen klanten.</td>
            @endif
        </tbody>   
    </table>

    {{ $clients->links('vendor.pagination.default') }}

    {{-- Display options menus outside table--}}
    @foreach ($clients as $client)
        <ul id='dropdown{{ $client->id }}' class='dropdown-content'>
            <li>
                <a href="clients/{{ $client->id }}/edit">
                    <i class='material-icons'>edit</i> Bewerken
                </a>
            </li>
            <li>
                <a class='modal-trigger' href='#deletemodal{{ $client->id }}'>
                    <i class='material-icons'>delete</i> Verwijderen
                </a>
            </li>
        </ul>

        <div id='deletemodal{{ $client->id }}' class='modal'>
            <div class='modal-content'>
                <h4>Weet je het zeker?</h4>
                <p>Weet je zeker dat je deze klant wilt verwijderen?</p>
            </div>
            <div class='modal-footer'>
                {{-- DELETE form for deleting a resource --}}
                <form action="clients/{{ $client->id }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type='submit' class='btn-flat modal-close'>Verwijderen</button>
                </form>
            </div>
        </div>
    @endforeach
@endsection
