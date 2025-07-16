@extends('base')

@section('title', 'Locaties')

@section('content')
    <h3>Locaties</h3>
    <a class="waves-effect waves-light btn right" href="/admin/locations/create"><i class="material-icons left">add</i> Nieuwe locatie</a>

    <table>
        <thead>
            <tr>
                <th>Naam</th>
                <th>Plaats</th>
                <th>Telefoon</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @if (count($locations) > 0)
                @foreach ($locations as $location)
                <tr>
                    <td>{{ $location->name }}</td>
                    <td>{{ $location->location }}</td>
                    <td>{{ $location->phone }}</td>
                    <td>
                        <a class="dropdown-trigger btn-flat" href="#" data-target="dropdown{{ $location->id }}">
                            <i class='material-icons'>more_vert</a>
                        </a>
                    </td>
                </tr>
                @endforeach
            @else
                <td>Er zijn nog geen locaties.</td>
            @endif
        </tbody>   
    </table>

    {{-- Display options menus outside table--}}
    @foreach ($locations as $location)
        <ul id='dropdown{{ $location->id }}' class='dropdown-content'>
            <li>
                <a href="locations/{{ $location->id }}/edit">
                    <i class='material-icons'>edit</i> Bewerken
                </a>
            </li>
            <li>
                <a class='modal-trigger' href='#deletemodal{{ $location->id }}'>
                    <i class='material-icons'>delete</i> Verwijderen
                </a>
            </li>
        </ul>

        <div id='deletemodal{{ $location->id }}' class='modal'>
            <div class='modal-content'>
                <h4>Weet je het zeker?</h4>
                <p>Weet je zeker dat je deze locatie wilt verwijderen?</p>
            </div>
            <div class='modal-footer'>
                {{-- DELETE form for deleting a resource --}}
                <form action="locations/{{ $location->id }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type='submit' class='btn-flat modal-close'>Verwijderen</button>
                </form>
            </div>
        </div>
    @endforeach
@endsection
