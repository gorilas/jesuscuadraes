paper.install(window);
window.onload = function() {
  paper.setup('myCanvas');
  // Create a simple drawing tool:
  var tool = new Tool();
  var path;
  var path2;

  // Define a mousedown and mousedrag handler
  /*tool.onMouseDown = function(event) {
    path = new Path();
    path.strokeColor = 'white';
    path.add(event.point);
  }

  tool.onMouseDrag = function(event) {
    path.add(event.point);
  }*/

  path = new Path();
  path.strokeColor = 'white';
  tool.onMouseMove = function(event) {
    path.add(event.point);
  }
}

