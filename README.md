# Progressive Web App form

A laravel package to create a form which can save data offline. Offline data is synchronized back to the original database
on an active internet connection

**Note-** Progressive web apps use [service workers](https://developers.google.com/web/fundamentals/primers/service-workers/) which only work on a **HTTPS** connection or on **localhost** for development purposes.
 It will not work with a virtual host.

## Installation

You can install the package using composer

    composer require mdshamoon/pwaform

Publish the configurations

    php artisan vendor:publish --provider="mdshamoon\pwaform\PwaServiceProvider"

Import the table using ```php artisan migrate``` command

**Note-** Authentication should be enabled by running ```php artisan make:auth``` command.

## Seting up views

To view Form page make a route using ``` return view('pwaform.welcome');``` in the web.php routes file or inside a controller function.
