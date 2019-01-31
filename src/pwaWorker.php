<?php


namespace mdshamoon\pwaform;


use Illuminate\Support\ServiceProvider;
class pwaWorker extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

         $this->loadRoutesFrom(__DIR__.'/web.php');
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/views','pwaform');
        $this->publishes([
            __DIR__.'/views' => base_path('resources/views/pwaform'),
        ]);
    }
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
       var_dump("expression");

    }
}