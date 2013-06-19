/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['constraint/day.js']) {
  _$jscoverage['constraint/day.js'] = [];
  _$jscoverage['constraint/day.js'][11] = 0;
  _$jscoverage['constraint/day.js'][30] = 0;
  _$jscoverage['constraint/day.js'][40] = 0;
  _$jscoverage['constraint/day.js'][50] = 0;
  _$jscoverage['constraint/day.js'][52] = 0;
  _$jscoverage['constraint/day.js'][55] = 0;
  _$jscoverage['constraint/day.js'][56] = 0;
  _$jscoverage['constraint/day.js'][59] = 0;
  _$jscoverage['constraint/day.js'][68] = 0;
  _$jscoverage['constraint/day.js'][78] = 0;
  _$jscoverage['constraint/day.js'][91] = 0;
  _$jscoverage['constraint/day.js'][92] = 0;
  _$jscoverage['constraint/day.js'][95] = 0;
  _$jscoverage['constraint/day.js'][97] = 0;
  _$jscoverage['constraint/day.js'][113] = 0;
  _$jscoverage['constraint/day.js'][116] = 0;
}
_$jscoverage['constraint/day.js'].source = ["/**","* Day Constraint (D)","* (c) 2013 Bill, BunKat LLC.","*","* Definition for a day of month (date) constraint type.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","later.day = later.D = {","","  /**","  * The name of this constraint.","  */","  name: 'day',","","  /**","  * The rough amount of seconds between start and end for this constraint.","  * (doesn't need to be exact)","  */","  range: 86400,","","  /**","  * The day value of the specified date.","  *","  * @param {Date} d: The date to calculate the value of","  */","  val: function(d) {","    return d.D || (d.D = later.date.getDate.call(d));","  },","","  /**","  * Returns true if the val is valid for the date specified.","  *","  * @param {Date} d: The date to check the value on","  * @param {Integer} val: The value to validate","  */","  isValid: function(d, val) {","    return later.D.val(d) === (val || later.D.extent(d)[1]);","  },","","  /**","  * The minimum and maximum valid day values of the month specified.","  * Zero to specify the last day of the month.","  *","  * @param {Date} d: The date indicating the month to find the extent of","  */","  extent: function(d) {","    if(d.DExtent) return d.DExtent;","","    var month = later.M.val(d),","        max = later.DAYS_IN_MONTH[month-1];","","    if(month === 2 &amp;&amp; later.dy.extent(d)[1] === 366) {","      max = max+1;","    }","","    return (d.DExtent = [1, max]);","  },","","  /**","  * The start of the day of the specified date.","  *","  * @param {Date} d: The specified date","  */","  start: function(d) {","    return d.DStart || (d.DStart = later.date.next(","      later.Y.val(d), later.M.val(d), later.D.val(d)));","  },","","  /**","  * The end of the day of the specified date.","  *","  * @param {Date} d: The specified date","  */","  end: function(d) {","    return d.DEnd || (d.DEnd = later.date.prev(","      later.Y.val(d), later.M.val(d), later.D.val(d)));","  },","","  /**","  * Returns the start of the next instance of the day value indicated. Returns","  * the first day of the next month if val is greater than the number of","  * days in the following month.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  next: function(d, val) {","    val = val &gt; later.D.extent(d)[1] ? 1 : val;","    var month = later.date.nextRollover(d, val, later.D, later.M),","        DMax = later.D.extent(month)[1];","","    val = val &gt; DMax ? 1 : val || DMax;","","    return later.date.next(","      later.Y.val(month),","      later.M.val(month),","      val","    );","  },","","  /**","  * Returns the end of the previous instance of the day value indicated. Returns","  * the last day in the previous month if val is greater than the number of days","  * in the previous month.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  prev: function(d, val) {","    var month = later.date.prevRollover(d, val, later.D, later.M),","        DMax = later.D.extent(month)[1];","","    return later.date.prev(","      later.Y.val(month),","      later.M.val(month),","      val &gt; DMax ? DMax : val || DMax","    );","  }","","};"];
_$jscoverage['constraint/day.js'][11]++;
later.day = (later.D = {name: "day", range: 86400, val: (function (d) {
  _$jscoverage['constraint/day.js'][30]++;
  return (d.D || (d.D = later.date.getDate.call(d)));
}), isValid: (function (d, val) {
  _$jscoverage['constraint/day.js'][40]++;
  return (later.D.val(d) === (val || later.D.extent(d)[1]));
}), extent: (function (d) {
  _$jscoverage['constraint/day.js'][50]++;
  if (d.DExtent) {
    _$jscoverage['constraint/day.js'][50]++;
    return d.DExtent;
  }
  _$jscoverage['constraint/day.js'][52]++;
  var month = later.M.val(d), max = later.DAYS_IN_MONTH[(month - 1)];
  _$jscoverage['constraint/day.js'][55]++;
  if (((month === 2) && (later.dy.extent(d)[1] === 366))) {
    _$jscoverage['constraint/day.js'][56]++;
    max = (max + 1);
  }
  _$jscoverage['constraint/day.js'][59]++;
  return (d.DExtent = [1, max]);
}), start: (function (d) {
  _$jscoverage['constraint/day.js'][68]++;
  return (d.DStart || (d.DStart = later.date.next(later.Y.val(d), later.M.val(d), later.D.val(d))));
}), end: (function (d) {
  _$jscoverage['constraint/day.js'][78]++;
  return (d.DEnd || (d.DEnd = later.date.prev(later.Y.val(d), later.M.val(d), later.D.val(d))));
}), next: (function (d, val) {
  _$jscoverage['constraint/day.js'][91]++;
  val = ((val > later.D.extent(d)[1])? 1: val);
  _$jscoverage['constraint/day.js'][92]++;
  var month = later.date.nextRollover(d, val, later.D, later.M), DMax = later.D.extent(month)[1];
  _$jscoverage['constraint/day.js'][95]++;
  val = ((val > DMax)? 1: (val || DMax));
  _$jscoverage['constraint/day.js'][97]++;
  return later.date.next(later.Y.val(month), later.M.val(month), val);
}), prev: (function (d, val) {
  _$jscoverage['constraint/day.js'][113]++;
  var month = later.date.prevRollover(d, val, later.D, later.M), DMax = later.D.extent(month)[1];
  _$jscoverage['constraint/day.js'][116]++;
  return later.date.prev(later.Y.val(month), later.M.val(month), ((val > DMax)? DMax: (val || DMax)));
})});