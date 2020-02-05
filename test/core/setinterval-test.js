var later = require('../../index'),
  should = require('should');
var moment = require('moment');
var sinon = require('sinon');

describe('Set interval', function () {

  it('should execute a callback after the specified amount of time', function (done) {
    this.timeout(0);

    var s = later.parse.recur().every(1).second(),
      t = later.setInterval(test, s),
      count = 0;

    function test() {
      later.schedule(s).isValid(new Date()).should.eql(true);
      count++;
      if (count > 2) {
        t.clear();
        done();
      }
    }

  });

  it('should allow clearing of the timeout', function (done) {
    this.timeout(0);

    var s = later.parse.recur().every(2).second();

    function test() {
      should.not.exist(true);
    }

    var t = later.setInterval(test, s);
    t.clear();

    setTimeout(done, 3000);
  });


  // check for bug: https://github.com/bunkat/later/issues/239
  describe('issue/239', function () {
    var clock = null;

    beforeEach(function () {
      var now = moment();
      var fakeNow = moment().minute(0).second(58);
      clock = sinon.useFakeTimers(fakeNow.valueOf());
      console.log(`now = ${now.format('HH:mm:ss')}, fakeNow = ${fakeNow.format('HH:mm:ss')}`);
    });

    afterEach(function () {
      clock.restore();
    });


    it('should trigger 1 time in 3 seconds', function (done) {
      this.timeout(10 * 1000);

      later.date.localTime();
      var now = moment();
      var second = now.second();
      var timeStr = moment().add(1, 'm').format('HH:mm');
      var text = `at ${timeStr} also every 1 hour`;
      var s = later.parse.text(text);
      var count = 0;

      console.log('text: ', text);

      var fn = function () {
        // console.log('tick');
        count++;
      };

      later.setInterval(fn, s);

      setTimeout(function () {
        should(count).be.exactly(1);
        done();
      }, 3000);

      clock.tick(4000);
    })
  });

});