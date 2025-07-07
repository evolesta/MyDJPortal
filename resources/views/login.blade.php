  <!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="{{ asset('materialize/css/materialize.min.css') }}"  media="screen,projection"/>
      <title>MyDJPortal</title>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
        <div class="row">
            <div class="col s6 offset-s3" style="margin-top: 100px;">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Inloggen</span>
                        @if (session('error'))
                        <p style="color: red">Er is een fout opgetreden: {{ session('error') }}</p>
                        @endif  
                        <form method="POST">
                            @csrf
                            <div class="input-field">
                                    <input class="validate" id="email" name="email">
                                    <label for="email">E-mailadres</label>
                            </div>
                            <div class="input-field">
                                    <input class="validate" id="password" type="password" name="password">
                                    <label for="password">Wachtwoord</label>
                            </div>
                             <button class="btn waves-effect waves-light" type="submit" name="action">Login
                                <i class="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

      <!--JavaScript at end of body for optimized loading-->
      <script type="text/javascript" src="{{ asset('materialize/js/materialize.min.js') }}"></script>
    </body>
  </html>