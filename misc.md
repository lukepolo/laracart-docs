# Miscellaneous

## Cross Browser Support

You must have the LaraCart database migration and migrate. To enable just change it in your config!

    'cross_devices' => true

> {danger} You must be using the Auth Manager, and may have to update the migration to fit your needs.

## Events

| Event                 | Functions that fire the event                        |
| --------------------- | ---------------------------------------------------- |
| `laracart.new`        | `LaraCart::setInstance()`                            |
| `laracart.update`     | `LaraCart::update()`                                 |
| `laracart.addItem`    | `LaraCart::add()`, `LaraCart::addLine()`             |
| `laracart.updateItem` | `LaraCart::updateItem()`, `LaraCart::generateHash()` |
| `laracart.removeItem` | `LaraCart::removeItem()`                             |
| `laracart.empty`      | `LaraCart::emptyCart()`                              |
| `laracart.destroy`    | `LaraCart::destroyCart()`                            |

## Exceptions

| Exception             | Reason                                                    |
| --------------------- | --------------------------------------------------------- |
| `InvalidPrice`        | When trying to give an item a non currency format         |
| `InvalidQuantity`     | When trying to give an item a non-integer for a quantity  |
| `CouponException`     | When a coupon either is expired or an invalid amount      |
| `ModelNotFound`       | When you try to relate a model that does not exist        |
| `InvalidTaxableValue` | Either a tax value is invalid or taxable is not a boolean |
