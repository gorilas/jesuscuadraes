var oldPos;
var paths = [];
var path;
var secondPath;
var colors = ['#001f3f','#0074D9', '#7FDBFF'];

function onMouseDown(event) {
  if (path) {
    path.selected = false;
  }
  path = new Path();
  path.segments = [event.point];
  path.strokeWidth = 3;
  path.strokeCap = 'round';
  path.strokeColor = 'white';
  oldPos = event.point;
}

function onMouseDrag(event) {
  path.add(event.point);
  path.smooth({ type: 'asymmetric' });
}

function onMouseUp(event) {
  path.smooth({ type: 'asymmetric' });
  paths.push(path);

  // if the line is too small we draw a circle
  var dist = Math.hypot(oldPos.x-event.point.x, oldPos.y-event.point.y);
  if (dist<20) {
    secondPath = new Path.Circle(event.point, 25);
    secondPath.fillColor = colors[Math.floor(Math.random()*colors.length)];
    paths.push(secondPath);
  }
}

function onFrame(event) {
  for (var j = 0; j < paths.length; j++) {
    var currentpath = paths[j];
    // Loop through the segments of the path:
    for (var i = 0; i < currentpath.segments.length; i++) {
      var segment = currentpath.segments[i];

      // A cylic value between -1 and 1
      var sinus = Math.sin(event.time * 50 + i);
      var cosinus = Math.cos(event.time * 40 + i);

      // Change the y position of the segment point:
      segment.point.x = segment.point.x + cosinus * 0.2;
      segment.point.y = segment.point.y + sinus * 0.2;
    }
    // Uncomment the following line and run the script again
    // to smooth the path:
    currentpath.smooth({ type: 'asymmetric' });
  }
}
