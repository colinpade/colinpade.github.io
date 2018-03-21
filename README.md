# Whale Watcher

An Angular website that pings GDAX for it's orderbook and shows the higher
amount order's on the book.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Running the tests

To run these tests make sure to `npm install` all the required libraries.

Then use `npm test` to start mocha with a timeout

```
$ npm test

> colinpade@0.0.1 test /Desktop/colinpade.github.io
> node ./node_modules/mocha/bin/mocha --timeout 5000


  WhaleWatcher site
    ✓ homepage loads (2622ms)
    ✓ bitcoin page loads (1913ms)
    ✓ ethereum page loads (1752ms)
    ✓ litecoin page loads (1627ms)
    ✓ monero page DOES NOT load (1397ms)


  5 passing (9s)

```

## Built With

* [Angular](https://angular.io/guide/quickstart) - The web framework used

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* DuckDuckGo :bird:
