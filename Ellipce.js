//define our rectangles
//first rectangle
var rect1 = {
    x1: Math.round(Math.random() * 30),
    x2: Math.round(Math.random() * 30),
    y1: Math.round(Math.random() * 30),
    y2: Math.round(Math.random() * 30)
};
//second rectangle
var rect2 = {
    x1: Math.round(Math.random() * 30),
    x2: Math.round(Math.random() * 30),
    y1: Math.round(Math.random() * 30),
    y2: Math.round(Math.random() * 30)
};
//rectangle formed by intersecting rect1 and rect2
var intersecting = {};

var ellipseCoord = [];

for (key in rect1) {
    console.log("Rectangle1 " + key + " " + rect1[key]);
}
for (key in rect2) {
    console.log("Rectangle2 " + key + " " + rect2[key]);
}

//randomizing
function getRandomInt(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    random = Math.floor(random);
    return random;
}

//if rectangles don`t intersect
if (((rect1.y1 < rect2.y2) || (rect1.y2 > rect2.y1)) && ((rect1.x2 < rect2.x1) || (rect1.x1 > rect2.x2))) {
    alert("Rectangles don't intersect");
} else {
    //coordinates of intersecting
    intersecting.x1 = Math.max(rect1.x1, rect2.x1);
    intersecting.y1 = Math.min(rect1.y1, rect2.y1);
    intersecting.x2 = Math.min(rect1.x2, rect2.x2);
    intersecting.y2 = Math.min(rect1.y2, rect2.y2);

    //half sides of rectangle or semi axis of ellipse
    intersecting.semiAxisA = (Math.max(intersecting.x1, intersecting.x2) - Math.min(intersecting.x1, intersecting.x2)) / 2;
    intersecting.semiAxisB = (Math.max(intersecting.y1, intersecting.y2) - Math.min(intersecting.y1, intersecting.y2)) / 2;

    //coordinates of the center of the ellipse
    intersecting.x0 = (intersecting.x1 + intersecting.x2) / 2;
    intersecting.y0 = (intersecting.y1 + intersecting.y2) / 2;

    //finding, checking and pushing ellipse points
    while (ellipseCoord.length < 10) {
        let x = getRandomInt(intersecting.x1, intersecting.x2);
        let y = getRandomInt(intersecting.y1, intersecting.y2);

        if (((((x - intersecting.x0) / intersecting.semiAxisA) ** 2) + (((y - intersecting.y0) / intersecting.semiAxisB) ** 2) - 1) < 0) {
            ellipseCoord.push("(" + x + " ," + y + ")");
        }
    }
    alert("Coordinates: \n" + ellipseCoord);
}
