var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
mc.on("panleft panright panup pandown tap press", function(ev) {
    //console.log(ev.type +" gesture detected.");
  var myelem = document.getElementsByClassName('sub')[0];
  if (ev.type=='panup') {
    myelem.classList.remove('pandown');
    myelem.classList.add('panup');
  }
  if (ev.type=='pandown') {
    myelem.classList.remove('panup');
    myelem.classList.add('pandown');
  }
});




//
//
//
TweenLite.defaultEase = Linear.easeNone;

var svgns = "http://www.w3.org/2000/svg";
var root = document.querySelector("svg");
var ease = 0.75;

var pointer = {
  x: window.innerWidth  / 2,
  y: window.innerHeight / 2
};

window.addEventListener("mousemove", function(event) {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});

mc.on("panmove", function(ev) {
  pointer.x = ev.center.x;
  pointer.y = ev.center.y;
});

var leader = pointer;

var total = 100;
for (var i = 0; i < total; i++) {
  leader = createLine(leader, i);
}

function createLine(leader, i) {

  var line = document.createElementNS(svgns, "line");
  root.appendChild(line);

  TweenLite.set(line, { x: -15, y: -15, alpha: (total - i) / total });

  var pos = line._gsTransform;

  TweenMax.to(line, 10, {
    x: "+=1",
    y: "+=1",
    repeat: -1,
    modifiers: {
      x: function() {
        var x = pos.x + (leader.x - pos.x) * ease;
        line.setAttribute("x2", leader.x - x);
        return x;
      },
      y: function() {
        var y = pos.y + (leader.y - pos.y) * ease;
        line.setAttribute("y2", leader.y - y);
        return y;
      }
    }
  });

  return pos;
}

