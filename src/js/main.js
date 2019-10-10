import "@babel/polyfill";

import { pi, power, foo } from './lib';

console.log(pi);
console.log(power(pi, pi));

const f = new foo();
console.log(f.foo());
console.log(f.bar());