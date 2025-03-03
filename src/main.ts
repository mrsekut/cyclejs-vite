import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import { main } from '.';

const drivers = {
  DOM: makeDOMDriver("#app"),
};


run(main, drivers)