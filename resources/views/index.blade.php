<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000" />
    <meta
    name="description"
    content="Página web oficial de La Candelaria Tumero"
    />
    <title>La Candelaria</title>

    <!-- Fonts -->
    <link rel="icon" href="{{ secure_asset("resources/favicon.png") }}" />
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </head>
  <body>
    <noscript>Necesitas activar JavaScript para poder ver esta aplicaciรณn.</noscript>
    <div id="root"></div>
  </body>
  <script src="{{ mix('js/app.js') }}"></script>
</html>
