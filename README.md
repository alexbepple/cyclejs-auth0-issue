
## How to reproduce issue

```shell
yarn
yarn run dev:js:once
open index.html
```

Output in console:

    Uncaught TypeError: xstream_1.default.fromObservable(...).subscribe is not a function
        at http://localhost:3012/bundle.js:1433:85
        at Array.map (native)
        at replicateMany (http://localhost:3012/bundle.js:1433:10)
        at run (http://localhost:3012/bundle.js:1513:34)
        at run (http://localhost:3012/bundle.js:1555:12)
        at Object.1.@cycle/dom (http://localhost:3012/bundle.js:33:19)
        at s (http://localhost:3012/bundle.js:1:254)
        at e (http://localhost:3012/bundle.js:1:425)
        at http://localhost:3012/bundle.js:1:443


## Dev server

If you want to play around you might find the dev server handy: `yarn run dev`

