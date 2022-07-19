'reach 0.1';

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const A = Participant('Admin', {
    approve: Fun([Address], Bool),
  });
  const B = ParticipantClass('Requester', {
    request: Fun([], Null),
    notify: Fun([Address], Null),
  });
  init();

  // A.only(() => {
  //   const meta = declassify(interact.meta); });
  // A.publish(meta);
  // XXX expose meta as a view
  A.publish()
  const holdersM = new Set();
  // XXX expose holdersM.member as a view

  var [] = [];
  invariant( balance() == 0 );
  while ( true ) {
    commit();

    // XXX Right now, the Bs and admin interact in a synchronized manner.
    // Instead, Bs could be free to add themselves to the "wantM" set (if
    // they aren't in holdersM) and the admin can come in later and move things
    // from "wantM" to "holdersM"

    B.only(() => {
      declassify(interact.request());
      assume(! holdersM.member(this));
    });
    B.publish()
    const requester = this;
    require(! holdersM.member(requester));
    commit();

    // A.only(() => {
    //   const okay = declassify(interact.approve(requester));
    // });
    // A.publish(okay);
    A.publish()
    holdersM.insert(requester);
    // }
    B.interact.notify(requester);
    continue;
  }
  commit();

  exit();
});
