@extends('base')

@section('title', 'Feesten')

@section('content')
    <h3>Feesten</h3>
    <a class="waves-effect waves-light btn right" href="/admin/gigs/create"><i class="material-icons left">add</i> Nieuw feest</a>

    {{-- Search function --}}
    <div class="row">
        <form action="{{ route('gigs.index') }}" method='GET'>
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
                <th>Datum</th>
                <th>Soort feest</th>
                <th>Locatie</th>
                <th>Details</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @if (count($gigs) > 0)
                @foreach ($gigs as $gig)
                <tr>
                    <td>{{ \Carbon\Carbon::parse($gig->date)->format('d M Y') }}</td>
                    <td>{{ $gig->name }}</td>
                    <td>{{ $gig->location->location }}</td>
                    <td>
                        <a class='modal-trigger btn-flat' href='#detailmodal{{ $gig->id }}'>
                            <i class='material-icons'>celebration</i>
                        </a>
                    </td>
                    <td>
                        <a class="dropdown-trigger btn-flat" href="#" data-target="dropdown{{ $gig->id }}">
                            <i class='material-icons'>more_vert</a>
                        </a>
                    </td>
                </tr>
                @endforeach
            @else
                <td>Er zijn nog geen feesten.</td>
            @endif
        </tbody>   
    </table>

    {{ $gigs->links('vendor.pagination.default') }}

    {{-- Display options menus outside table--}}
    @foreach ($gigs as $gig)
        <ul id='dropdown{{ $gig->id }}' class='dropdown-content'>
            <li>
                <a href="gigs/{{ $gig->id }}/edit">
                    <i class='material-icons'>edit</i> Bewerken
                </a>
            </li>
            <li>
                <a class='modal-trigger' href='#deletemodal{{ $gig->id }}'>
                    <i class='material-icons'>delete</i> Verwijderen
                </a>
            </li>
        </ul>

        <div id='deletemodal{{ $gig->id }}' class='modal'>
            <div class='modal-content'>
                <h4>Weet je het zeker?</h4>
                <p>Weet je zeker dat je dit feest wilt verwijderen?</p>
            </div>
            <div class='modal-footer'>
                {{-- DELETE form for deleting a resource --}}
                <form action="gigs/{{ $gig->id }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type='submit' class='btn-flat modal-close'>Verwijderen</button>
                </form>
            </div>
        </div>

        <div id='detailmodal{{ $gig->id }}' class="modal">
            <div class='modal-content'>
                <h4>Feest details</h4>
                <table>
                    <tr>
                        <td>Soort feest</td>
                        <td>{{ $gig->name }}</td>
                    </tr>
                    <tr>
                        <td>Klant</td>
                        <td>{{ $gig->client->name }}</td>
                    </tr>
                    <tr>
                        <td>Locatie</td>
                        <td>{{ $gig->location->name }}</td>
                    </tr>
                    <tr>
                        <td>Datum</td>
                        <td>{{ $gig->date }}</td>
                    </tr>
                    <tr>
                        <td>Start</td>
                        <td>{{ $gig->start }}</td>
                    </tr>
                    <tr>
                        <td>Einde</td>
                        <td>{{ $gig->end }}</td>
                    </tr>
                    <tr>
                        <td>DJ Set?</td>
                        <td>@if (isset($gig->djset)) Ja @else Nee @endif</td>
                    </tr>
                    <tr>
                        <td>Geluidsset?</td>
                        <td>@if (isset($gig->sound)) Ja @else Nee @endif</td>
                    </tr>
                    <tr>
                        <td>Lichtset?</td>
                        <td>@if (isset($gig->light)) Ja @else Nee @endif</td>
                    </tr>
                    <tr>
                        <td>Notities</td>
                        <td>{{ $gig->notes }}</td>
                    </tr>
                </table>
            </div>
        </div>
    @endforeach
@endsection
