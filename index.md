# Getting Started

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

## Installation

```bash
composer require lukepolo/laracart
```

Publish vendor config and migration:

```bash
php artisan vendor:publish --provider="LukePOLO\LaraCart\LaraCartServiceProvider
```

Look through the configuration options and change as needed.
