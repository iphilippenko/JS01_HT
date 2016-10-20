
//define our rectangles
var rect1 = {
    x1: Math.round(Math.random() * 20),
    x2: Math.round(Math.random() * 20),
    y1: Math.round(Math.random() * 20),
    y2: Math.round(Math.random() * 20)
};
var rect2 = {
    x1: Math.round(Math.random() * 20),
    x2: Math.round(Math.random() * 20),
    y1: Math.round(Math.random() * 20),
    y2: Math.round(Math.random() * 20)
};

for(key in rect1) {
    console.log("Rectangle1 " + key + " " + rect1[key]);
}
for(key in rect2) {
    console.log("Rectangle2 " + key + " " + rect2[key]);
}

//if rectangles don`t intersect
if ((rect1.y1 < rect2.y2) || (rect1.y2 > rect2.y1) || (rect1.x2 < rect2.x1) || (rect1.x1 > rect2.x2)) {
    alert("Rectangles don't intersect");
} else if ((rect1.x2 == rect2.x1) || (rect1.x1 == rect2.x2)) { //if rectangles intersect by corners
    if ((rect1.y2 == rect2.y1) || (rect1.y1 == rect2.y2)) {
        alert("Rectangles intersect by the corners. Can't find solution.")
    }
} else if ((rect1.x2 == rect2.x1) || (rect1.x1 == rect2.x2)) { //if rectangles intersect by the sides
   if ((rect1.y1 == rect2.y2) )
}