 var circles = [];

 function onKeyDown(event) {

     var maxPoint = new Point(view.size.width, view.size.height);
     var randomPoint = Point.random();
     var point = maxPoint * randomPoint;
     var newCircle = new Path.Circle(point, 10)
     newCircle.fillColor = "orange";
     circles.push(newCircle);

     

 }

 var animatedCircle = new Path.Circle(new Point(300, 300), 100);
 animatedCircle.fillColor = "red";

 function onFrame(event) {
     for (var i = 0; i < circles.length; i++) {
         circles[i].fillColor.hue = 1;
     }
     animatedCircle.fillColor.hue += 1;

 }
