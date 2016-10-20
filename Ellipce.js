
//define our rectangles
var rect1 = {
    x1: Math.round(Math.random() * 10),
    x2: Math.round(Math.random() * 10),
    y1: Math.round(Math.random() * 10),
    y2: Math.round(Math.random() * 10)
};
var rect2 = {
    x1: Math.round(Math.random() * 10),
    x2: Math.round(Math.random() * 10),
    y1: Math.round(Math.random() * 10),
    y2: Math.round(Math.random() * 10)
};


for(key in rect1) {
    console.log("Rectangle1 " + key + " " + rect1[key]);
}
for(key in rect2) {
    console.log("Rectangle2 " + key + " " + rect2[key]);
}

//if rectangles don`t intersect
if (((rect1.y1 < rect2.y2) || (rect1.y2 > rect2.y1)) && ((rect1.x2 < rect2.x1) || (rect1.x1 > rect2.x2))) {
    alert("Rectangles don't intersect");
} else { //rectangles intersect
    let intersectRect = {};
    let arrayX = [];
    let arrayY = [];
    if ((rect1.x2 <= rect2.x2) && (rect1.x1 >= rect2.x1) && (rect1.y1 <= rect2.y1) && (rect1.y2 <= rect2.y2)) { // if rect2 contains rect1
        intersectRect.side1 = Math.sqrt((rect1.x1 ** 2) + (rect1.x2 ** 2));
        intersectRect.side2 = Math.sqrt((rect1.y1 ** 2) + (rect1.y2 ** 2));
        intersectRect.x0 = (rect1.x1 + rect1.x2) / 2;
        intersectRect.y0 = (rect1.y1 + rect2.y2) / 2;
    } else if ((rect2.x2 <= rect1.x2) && (rect2.x1 >= rect1.x1) && (rect2.y1 <= rect1.y1) && (rect2.y2 <= rect2.y1)) { // if rect1 contains rect2
        intersectRect.side1 = Math.sqrt((rect2.x1 ** 2) + (rect2.x2 ** 2));
        intersectRect.side2 = Math.sqrt((rect2.y1 ** 2) + (rect2.y2 ** 2));
        intersectRect.x0 = (rect2.x1 + rect2.x2) / 2;
        intersectRect.y0 = (rect2.y1 + rect2.y2) / 2;
    } else if (rect1.x2 > rect2.x1) {
        if (rect1.y1 > rect2.y2) {
            intersectRect.side1 = Math.sqrt((rect2.x1 ** 2) + (rect1.x2 ** 2));
            intersectRect.side2 = Math.sqrt((rect1.y1 ** 2) + (rect2.y2 ** 2));
            intersectRect.x0 = (rect2.x1 + rect1.x2) / 2;
            intersectRect.y0 = (rect1.y1 + rect2.y2) / 2;
        } else if (rect1.y2 < rect2.y1) {
            intersectRect.side1 = Math.sqrt((rect2.x1 ** 2) + (rect1.x2 ** 2));
            intersectRect.side2 = Math.sqrt((rect1.y2 ** 2) + (rect2.y1 ** 2));
            intersectRect.x0 = (rect2.x1 + rect1.x2) / 2;
            intersectRect.y0 = (rect1.y1 + rect2.y2) / 2;
        }
    } else if (rect2.x2 > rect1.x1) {
        if (rect2.y1 > rect1.y2) {
            intersectRect.side1 = Math.sqrt((rect1.x1 ** 2) + (rect2.x2 ** 2));
            intersectRect.side2 = Math.sqrt((rect2.y1 ** 2) + (rect1.y2 ** 2));
            intersectRect.x0 = (rect1.x1 + rect2.x2) / 2;
            intersectRect.y0 = (rect2.y1 + rect1.y2) / 2;
        } else if (rect1.y2 < rect2.y1) {
            intersectRect.side1 = Math.sqrt((rect1.x1 ** 2) + (rect2.x2 ** 2));
            intersectRect.side2 = Math.sqrt((rect2.y2 ** 2) + (rect1.y1 ** 2));
            intersectRect.x0 = (rect1.x1 + rect2.x2) / 2;
            intersectRect.y0 = (rect2.y1 + rect1.y2) / 2;
        }
    } else if (rect1.y2 >= rect2.y2) {
        if (rect1.x2 > rect2.x1) {
            intersectRect.side1 = Math.sqrt((rect1.x2 ** 2) + (rect2.x1 ** 2));
            intersectRect.side2 = Math.sqrt((rect2.y2 ** 2) + (rect1.y2 ** 2));
            intersectRect.x0 = (rect1.x2 + rect2.x1) / 2;
            intersectRect.y0 = (rect2.y2 + rect1.y2) / 2;
        }
        if (rect1.x2 < rect2.x1) {
            intersectRect.side1 = Math.sqrt((rect1.x1 ** 2) + (rect2.x2 ** 2));
            intersectRect.side2 = Math.sqrt((rect1.y1 ** 2) + (rect2.y2 ** 2));
            intersectRect.x0 = (rect1.x1 + rect2.x2) / 2;
            intersectRect.y0 = (rect1.y1 + rect2.y2) / 2;
        }
    }
    else if (rect2.y2 >= rect1.y2) {
        if (rect2.x2 > rect1.x1) {
            intersectRect.side1 = Math.sqrt((rect2.x2 ** 2) + (rect1.x1 ** 2));
            intersectRect.side2 = Math.sqrt((rect1.y2 ** 2) + (rect2.y2 ** 2));
            intersectRect.x0 = (rect2.x2 + rect1.x1) / 2;
            intersectRect.y0 = (rect1.y2 + rect2.y2) / 2;
        }
        if (rect1.x2 < rect2.x1) {
            intersectRect.side1 = Math.sqrt((rect2.x1 ** 2) + (rect1.x2 ** 2));
            intersectRect.side2 = Math.sqrt((rect2.y1 ** 2) + (rect1.y2 ** 2));
            intersectRect.x0 = (rect2.x1 + rect1.x2) / 2;
            intersectRect.y0 = (rect2.y1 + rect1.y2) / 2;
        }
    }
    //finding, checking and pushing coordinates
    while (arrayX.length < 10) {
        let x = Math.round(Math.random() * 10);
        let y = Math.round(Math.random() * 10);
        if ( ((((x - intersectRect.x0) / (intersectRect.side1 / 2)) ** 2) + (((y - intersectRect.y0) / (intersectRect.side2 / 2)) ** 2) - 1) < 0) {
            arrayX.push(x);
            arrayY.push(y);
            arrayX.length++;
            arrayY.length++;
        }
    }
    alert("Coordinates:\n x:\n" + arrayX + "\n y: \n" + arrayY);
}
if ((rect1.x2 == rect2.x1) || (rect1.x1 == rect2.x2)) { //if rectangles intersect by corners
    if ((rect1.y2 == rect2.y1) || (rect1.y1 == rect2.y2)) {
        alert("Rectangles intersect by the corners. Can't find solution.");
    }
} else if ((rect1.x2 == rect2.x1) || (rect1.x1 == rect2.x2)) { //if rectangles intersect by the sides
    if ((rect1.y1 == rect2.y1) && (rect1.y1 == rect2.y2)) {
        alert("Rectangles intersect by the sides. Can't find solution.");
    }
} else if ((rect1.y2 == rect2.y1) || (rect1.y1 == rect2.y2)) { // if rectangles intersect by the sides
    if ((rect1.x1 == rect2.x1) && (rect1.x2 == rect2.x2)) {
        alert("Rectangles intersect by the sides. Can't find solution.");
    }
}