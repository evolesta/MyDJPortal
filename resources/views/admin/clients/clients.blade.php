@extends('base')

@section('title', 'Klanten')

@section('content')
    <h3>Klanten</h3>
    <a class="waves-effect waves-light btn right" href="/admin/clients/create"><i class="material-icons left">add</i> Nieuwe klant</a>

    <table>
        <thead>
            <tr>
                <th>Naam</th>
                <th>Contactpersoon</th>
            </tr>
        </thead>
        <tbody>
            @if (count($clients) > 0)
                @foreach ($clients as $client)
                <tr>
                    <td>{{ $client->name }}</td>
                    <td>{{ $client->first_name }}</td>
                </tr>
                @endforeach
            @else
                <td>Er zijn nog geen klanten.</td>
            @endif
        </tbody>   
    </table>
@endsection

@section('jscript')
    <script type="text/javascript">M.toast({html: {{ $status }}})</script>
@endsection