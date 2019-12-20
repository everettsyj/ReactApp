<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body>
        <link rel="stylesheet" href="{{asset('css/app.css')}}" type="text/css">

        <a href="{{route('login')}}"><button>Login</button></a>
        {{-- <div class="container">
            <div class="row">
                <div id="app" class="col-lg-12"></div>
            </div>
        </div> --}}
        <div class="container">
            <div id="root"></div>
        </div>


        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>
