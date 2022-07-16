import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
const zorkmid = await stdlib.launchToken(accAlice, "zorkmid", "ZMD");
const gil = await stdlib.launchToken(accAlice)
console.log('Hello, Everyone welcome!');


const addrs = {
  'Admin': accAlice.getAddress(),
  'Bob': accBob.getAddress(),
  // '1': accUnknow1.getAddress(),
  // '2': accUnknow2.getAddress(),
  // '3': accUnknow3.getAddress()
};

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
// const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const users = await stdlib.newTestAccounts(3, startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const anybodiesBalance = async (dd) => {await stdlib.balanceOf(dd), console.log(`called me: ${dd}`)}

console.log('Starting backends...');

const willError = async (f) => {
  let e;
  try {
    await f();
    e = false;
  } catch (te) {
    e = te;
  }
  if (e === false ) {
    throw Error(`Expected to error, but didn't`);
  }
  console.log(`That last call errored and that's okay`);
};


const ctcWho = (whoi) => 
  users[whoi].contract(backend, ctcAlice.getInfo());
const rsvp = async (whoi) => {
  // const tiv = users[whoi]
  // const viv = await getBalance(tiv);
  const who = users[whoi];
  const ctc = ctcWho(whoi);
  console.log(stdlib.formatAddress(who), `register for the board balance: ${fmt(await stdlib.balanceOf(who))} ` );
  await ctc.p.Bob.request;
};
const passed = async (ctc, whoi) => {
  const who = users[whoi];
  console.log(stdlib.formatAddress(who), 'was whitelisted');
  await ctc.p.Bob.notify;
};
const whitelist = (whoi) => passed(ctcAlice, whoi);
const bad_whitelist = () => passed(ctcWho(whoi), whoi);

await rsvp(0)
await rsvp(1)
await rsvp(2)

// for ( const who of [ accAlice, ...users ]) {
//   console.warn(stdlib.formatAddress(who), 'has',
//     stdlib.formatCurrency(await stdlib.balanceOf(who)));
// }

// await willError(() => rsvp(4));
await whitelist(0)
await whitelist(1)
// await willError(() => whitelist(4))
await willError(() => bad_whitelist(2))
await whitelist(2)

console.log('Goodbye, Alice and Bob!');
