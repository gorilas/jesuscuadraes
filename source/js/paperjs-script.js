var oldPos;
var path;
var secondPath;
var colors = ['#001f3f','#0074D9', '#7FDBFF'];

function onMouseDown(event) {
  if (path) {
    path.selected = false;
  }
  path = new Path();
  path.segments = [event.point];
  path.strokeColor = 'white';
  oldPos = event.point;
}

function onMouseDrag(event) {
  path.add(event.point);
}

function onMouseUp(event) {
  path.simplify(10);

  // if the line is too small we draw a circle
  var dist = Math.hypot(oldPos.x-event.point.x, oldPos.y-event.point.y);
  if (dist<20) {
    secondPath = new Path.Circle(event.point, 25);
    secondPath.fillColor = colors[Math.floor(Math.random()*colors.length)];
  }

}
