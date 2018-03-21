paper.install(window);
window.onload = function() {
  paper.setup('myCanvas');
  // Create a simple drawing tool:
  var tool = new Tool();
  var path;

  tool.onMouseDown = function(event) {
    // If we produced a path before, deselect it:
    if (path) {
      path.selected = false;
    }

    // Create a new path and set its stroke color to black:
    path = new Path();
    path.segments = [event.point];
    path.strokeColor = 'white';
  }

  // While the user drags the mouse, points are added to the path
  // at the position of the mouse:
  tool.onMouseDrag = function(event) {
    path.add(event.point);
  }

  // When the mouse is released, we simplify the path:
  tool.onMouseUp = function(event) {
    // When the mouse is released, simplify it:
    path.simplify(10);
  }
}

