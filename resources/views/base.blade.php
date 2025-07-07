  <!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="{{ asset('materialize/css/materialize.min.css') }}"  media="screen,projection"/>
      <title>MyDJPortal - @yield('title')</title>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
          <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">My DJ Portal</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/admin/clients">Klanten</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
        </nav>

        <!-- insert component view here trough router -->
        <div class="container">
          @yield('content')
        </div>

      <!--JavaScript at end of body for optimized loading-->
      <script type="text/javascript" src="{{ asset('materialize/js/materialize.min.js') }}"></script>
      
      <!-- insert Materialize CSS javascript component scripts from here -->
      @yield('jscript')

    </body>
  </html>