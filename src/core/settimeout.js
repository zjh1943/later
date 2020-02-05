/**
* Set Timeout
* (c) 2013 Bill, BunKat LLC.
*
* Works similar to setTimeout() but allows you to specify a Later schedule
* instead of milliseconds.
*
* Later is freely distributable under the MIT license.
* For all details and documentation:
*     http://github.com/bunkat/later
*/

later.setTimeout = function (fn, sched) {

  var s = later.schedule(sched), t;
  if (fn) {
    scheduleTimeout();
  }

  /**
  * Schedules the timeout to occur. If the next occurrence is greater than the
  * max supported delay (2147483647 ms) than we delay for that amount before
  * attempting to schedule the timeout again.
  */
  function scheduleTimeout() {
    var now = Date.now(),
      next = s.next(2, now);

    if (!next[0]) {
      t = undefined;
      return;
    }

    // minimum time to fire is one second, use next occurrence instead
    // fix bug: https://github.com/bunkat/later/issues/239
    var maxCount = 3;
    var diff = 0;
    for (var i = 0; i < maxCount; i++) {
      next = s.next(Math.max(i + 1, 2), now);
      diff = next[i] ? next[i].getTime() - now : 1000;

      if (diff >= 1000) break;
    }

    if (diff < 2147483647) {
      t = setTimeout(fn, diff);
    }
    else {
      t = setTimeout(scheduleTimeout, 2147483647);
    }
  }

  return {

    isDone: function () {
      return !t;
    },

    /**
    * Clears the timeout.
    */
    clear: function () {
      clearTimeout(t);
    }

  };

};