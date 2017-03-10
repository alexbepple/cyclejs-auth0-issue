import xs from 'xstream';
import run from '@cycle/run';
import {makeDOMDriver, div} from '@cycle/dom';
import {makeAuth0Driver, protect} from 'cyclejs-auth0'

const HelloWorld = (sources) => ({
  DOM: xs.of(div("hello fellow user"))
})

const drivers = {
  DOM: makeDOMDriver('#app'),
  auth0: makeAuth0Driver('foo', 'bar')
}

const main = (sources) => {
  return protect(HelloWorld)(sources)
}

run(main, drivers);

