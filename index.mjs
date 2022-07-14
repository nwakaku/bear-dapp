import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob, accUnknow1, accUnknow2, accUnknow3 ] =
  await stdlib.newTestAccounts(5, startingBalance);
console.log('Hello, Alice and Bob!');

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob)


console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const addrs = {
  'Alice': accAlice.getAddress(),
  'Bob': accBob.getAddress(),
  '1': accUnknow1.getAddress(),
  '2': accUnknow2.getAddress(),
  '3': accUnknow3.getAddress()
};

console.log(`Alice address: ${addrs['Alice']}`);
console.log(`Bob address: ${addrs['Bob']}`);
console.log(`Unknow1 address: ${addrs['1']}`);
console.log(`Unknow2 address: ${addrs['2']}`);
console.log(`Unknow3 address: ${addrs['3']}`);
console.log(`Alice went from ${beforeAlice}`);
console.log(`Bob went from ${beforeBob}`);

console.log('Starting backends...');
await Promise.all([
  ctcAlice.participants.Alice({
    request: stdlib.parseCurrency(5),
    info: 'Info you wear these, you can see beyond evil illusions.',
    getAddress: addrs['1'],
  }),
  ctcBob.p.Bob({
    want: (amt) => console.log(`Alice asked Bob for ${stdlib.formatCurrency(amt)}`),
    got: (secret) => console.log(`Alice's secret is: ${secret}`),
  }),
  // backend.Alice(ctcAlice, {
  //   ...stdlib.hasRandom,
  //   // implement Alice's interact object here
  // }),
  // backend.Bob(ctcBob, {
  //   ...stdlib.hasRandom,
  //   // implement Bob's interact object here
  // }),
]);
const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);

console.log('Goodbye, Alice and Bob!');
