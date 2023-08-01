// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.layer.invalid-calls.save-endLayer
// Description:Raises exception on save() + endLayer().
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Raises exception on save() + endLayer().");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  assert_throws_dom("INVALID_STATE_ERR", function() {
    ctx.save();
    ctx.endLayer();
  });
  t.done();
});
done();