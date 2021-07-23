# Getting Started
 
<a name="overview"></a>
## Overview
LaraCart was built to be an easy, fast, and simple solution for cart based systems.

What makes LaraCart unique is what it includes out of the box:

- Coupons
- Session Based System
- Cross Device Support
- Multiple cart instances
- Fees such as a delivery fee
- Taxation on the item level
- Endless item chaining for complex systems
- Totals of all items within the item chains
- Item Model Relation at a global and item level
- Quickly insert items with your own item models

## Laravel compatibility

| Laravel           | laracart   |
| :---------------- | :--------- |
| 5.1 \| 5.2 \| 5.3 | 1.1 \| 1.2 |
| 5.4+              | 1.3+       |

<a name="installation"></a>
## Installation
Edit your project's composer.json file by adding:

    {
        "require": {
            ...
            "lukepolo/laracart": "1.4.*"
        }
    }

If using Laravel 5.4 please include the service providers / facade in app/config/app.php:

    LukePOLO\LaraCart\LaraCartServiceProvider::class

Include the Facade:

    'LaraCart' => LukePOLO\LaraCart\Facades\LaraCart::class

Publish vendor config and migration:

    php artisan vendor:publish --provider="LukePOLO\LaraCart\LaraCartServiceProvider"
    
Look through the configuration options and change as needed.

<a name="configuration"></a>
##Configuration
LaraCart has a lot of configuration options, please make sure you run:

    php artisan vendor:publish --provider="LukePOLO\LaraCart\LaraCartServiceProvider"
    
After please make sure you go through and customize for your needs
