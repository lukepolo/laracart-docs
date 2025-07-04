# Cart API

## Instances

Instances is a way that we can use multiple carts within the same session. Each following request reuse the last instance of the cart set

```php
LaraCart::setInstance('yourInstanceName');

// Also you can get all the instances in the session
LaraCart::getInstances();
```

## Attributes

```php
// Set or update an attribute's value
LaraCart::setAttribute('label', 'Luke's Cart');

// Get a specific attribute's value
LaraCart::getAttribute('label');

// Get all the attributes
LaraCart::getAttributes();

// Remove an attribute
LaraCart::removeAttribute('label');
```

## Totals

```php
LaraCart::subTotal($format = true, $withDiscount = true);
LaraCart::discountTotal($formatted = false);
LaraCart::taxTotal($formatted = false);
LaraCart::total($formatted = false, $withDiscount = true);
```

## Currency & Locale

LaraCart comes built in with a currency / locale display. To configure just checkout the config.php. You can set to show the locale (USD) or the currency ($)

```php
$item->price($formatted = true); // $4.50 | USD 4.50

LaraCart::total() // $24.23 | USD 24.23
```

## Emptying & Destroying the Cart

```php
// Empty will only empty the contents
LaraCart::emptyCart()

// Destroy will remove the entire instance of the cart including coupons / fees etc.
LaraCart::destroyCart()
```
