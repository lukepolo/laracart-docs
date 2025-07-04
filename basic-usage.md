# Basic Usage

## Adding

```php
LaraCart::add(
    $itemID,
    $name = null,
    $qty = 1,
    $price = '0.00',
    $options = [],
    $taxable = true,
    $lineItem = false
)

// Adding an item to the cart
LaraCart::add(2, 'Shirt', 200, 15.99, [
    'size' => 'XL'
]);

// If you need line items rather than just updating the qty you can do
LaraCart::addLine(2, 'Shirt', 200, 15.99, [
    'size' => 'XL'
]);

// Also you can have your item not taxed
$item = LaraCart::addLine(2, 'Shirt', 200, 15.99, [
    'size' => 'XL'
    ],
    $taxable = false
);
```

::: danger Important
You will need to use this often to modify your items!
:::

```php
$itemHash = $item->getHash();
```

## Updating

```php
LaraCart::updateItem($itemHash, 'name', 'CheeseBurger w/Bacon');
LaraCart::updateItem($itemHash, 'qty', 5);
LaraCart::updateItem($itemHash, 'price', 2.50);
LaraCart::updateItem($itemHash, 'tax', .045);

// or if you have the item object already
$item = LaraCart::add(2, 'Shirt', 200, 15.99, [
    'size' => 'XL'
]);

// no need to call save or anything, we do that for you!
$item->size = 'L';

// we can also enable and disable the item
$item->disable();
$item->enable();
```

## Removing

To remove an item from the cart, you need to get its item hash.

```php
$item = LaraCart::add(2, 'Shirt', 200, 15.99, [
     'size' => 'XL'
]);

LaraCart::removeItem($item->getHash());
```

## Accessing

```php
foreach($items = LaraCart::getItems() as $item) {
    $item->id;
}
```

## Searching

```php
$matches = LaraCart::find(['size' => 'XL']);
```

## Prices

```php
$item->price($formatted = true, $taxedItemsOnly = false, $withTax = false); // $4.50 | USD 4.50
```
