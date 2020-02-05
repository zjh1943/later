var later = require('../../index'),
  should = require('should');
var moment = require('moment');
var sinon = require('sinon');

describe('Set timeout', function () {

  it('should execute a callback after the specified amount of time', function (done) {
    this.timeout(3000);

    var s = later.parse.recur().every(2).second();

    function test() {
      later.schedule(s).isValid(new Date()).should.eql(true);
      done();
    }

    later.setTimeout(test, s);
  });

  it('should allow clearing of the timeout', function (done) {
    this.timeout(3000);

    var s = later.parse.recur().every(1).second();

    function test() {
      should.not.exist(true);
    }

    var t = later.setTimeout(test, s);
    t.clear();

    setTimeout(done, 2000);
  });


  it('should not execute a far out schedule immediately', function (done) {
    this.timeout(3000);

    var s = later.parse.recur().on(2017).year();

    function test() {
      should.not.exist(true);
    }

    var t = later.setTimeout(test, s);

    setTimeout(function () { t.clear(); done(); }, 2000);
  });

  it('should execute a callback for a one-time occurrence after the specified amount of time', function (done) {
    this.timeout(3000);

    var offsetInMilliseconds = 2000;
    var now = new Date()
    var nowOffset = now.getTime() + offsetInMilliseconds
    var s = later.parse.recur().on(new Date(nowOffset)).fullDate();

    function test() {
      done();
    }

    later.setTimeout(test, s);
  });


});

// check for bug: https://github.com/bunkat/later/issues/239
describe('issue/239', function () {
  var clock = null;

  beforeEach(function () {

  });

  afterEach(function () {
    if (clock) {
      clock.restore();
      clock = null;
    }
  });

  it('should trigger 1 time in 3 seconds', function (done) {
    // fake time
    var now = moment();
    var fakeNow = moment().minute(0).second(58);
    clock = sinon.useFakeTimers(fakeNow.valueOf());
    // console.log(`now = ${now.format('HH:mm:ss')}, fakeNow = ${fakeNow.format('HH:mm:ss')}`);

    this.timeout(10 * 1000);


    later.date.localTime();
    var timeStr = moment().add(1, 'm').format('HH:mm');
    var text = `at ${timeStr} also every 1 hour`;
    var s = later.parse.text(text);
    var count = 0;

    // console.log('text: ', text);
    // console.log('next 24: ', later.schedule(s).next(24));

    var fn = function () {
      // console.log('tick');
      count++;

      later.setTimeout(fn, s);
    };

    later.setTimeout(fn, s);

    setTimeout(function () {
      should(count).be.exactly(1);
      done();
    }, 3000);

    clock.tick(4000);
  });
});

