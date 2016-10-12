
//define our rectangles
var rect1 = {
    x1: Math.random() * 200,
    x2: Math.random() * 200,
    y1: Math.random() * 200,
    y2: Math.random() * 200
};
var rect2 = {
    x1: Math.random() * 200,
    x2: Math.random() * 200,
    y1: Math.random() * 200,
    y2: Math.random() * 200
};

function noSolution() {
    //rectangles intersect by the corners
    if ((rect1.x2 == rect2.x1) && (rect1.y2 == rect2.y1)) {
        alert('Can\'t define the solution');
    }
    if ((rect1.x1 == rect2.x2) && (rect1.y1 == rect2.y2)) {
        alert('Can\'t define the solution');
    }
    if ((rect1.x2 == rect2.x1) && (rect1.y1 == rect2.y2)) {
        alert('Can\'t define the solution');
    }
    if ((rect1.x1 == rect2.x2) && (rect1.y2 == rect2.y1)) {
        alert('Can\'t define the solution');
    }

//rectangles intersect by the sides
    if ((rect1.x1 == rect2.x1) && (rect1.y2 == rect2.y1) && (rect1.x2 == rect2.x2)) {
        alert('Can\'t define the solution');
    } else if ((rect1.x1 == rect2.x2) && (rect1.y1 == rect2.y2) && (rect1.x2 == rect2.x2)) {
        alert('Can\'t define the solution');
    } else if((rect1.x2 == rect2.x1) && (rect1.y1 == rect2.y2) && (rect1.y2 == rect2.y2)) {
        alert('Can\'t define the solution');
    } else if ((rect1.x1 == rect2.x2) && (rect1.y1 == rect2.y1) && (rect1.y2 == rect2.y2)) {
        alert('Can\'t define the solution');
    }
}

noSolution();

var x0, y0;
var rect3 = {};
var arrayOfX = [];
var arrayOfY = [];
// rectangles on one another
if ((rect1.x1 == rect2.x1) && (rect1.x2 == rect2.x2) && (rect1.y1 == rect1.y1) && (rect2.y2)) {
    rect3.side1 = Math.sqrt(((rect1.x1 - rect1.x2) ** 2) + ((rect1.y2 - rect1.y2) ** 2));
    rect3.side2 = Math.sqrt(((rect1.x2 - rect1.x2) ** 2) + ((rect1.y1 - rect1.y2) **2));
    x0 = (rect1.x1 + rect1.x2) / 2;
    y0 = (rect1.y1 + rect1.y2) / 2;
}

// rectangles intersect
if ((rect1.y1 >= rect2.y1) && (rect1.y1 <= rect2.y2) && (rect1.x2 >= rect2.x1) && (rect1.x2 <= rect2.x2)) {
    rect3.side1 = Math.sqrt((rect2.y1 ** 2) + (rect1.y2 ** 2));
    rect3.side2 = Math.sqrt((rect2.x1 ** 2) + (rect1.x2 ** 2));
    x0 = (rect2.x1 + rect1.x2) / 2;
    y0 = (rect1.y2 + rect2.y1) / 2;
}

if ((rect1.x2 >= rect2.x1) && (rect1.x1 <= rect2.x2) && (rect1.y1 >= rect2.y1) && (rect1.y1 <= rect2.y2)) {
    rect3.side1 = Math.sqrt((rect1.x2 ** 2) + (rect2.x1 ** 2));
    rect3.side2 = Math.sqrt((rect1.y1 ** 2) + (rect2.y2 ** 2));
}

if ((rect2.x2 >= rect1.x1) && (rect2.x2 <= rect1.x2) && (rect2.y1 >= rect1.y1) && (rect2.y2 <= rect1.y2)) {
    rect3.side1 = Math.sqrt((rect1.x1 ** 2) + (rect2.x2 ** 2));
    rect3.side2 = Math.sqrt((rect2.y1 ** 2) + (rect1.y2 ** 2));
}

if ((rect2.x2 >= rect1.x1) && (rect2.x2 <= rect1.x2) && (rect2.y2 >= rect1.y1) && (rect2.y2 <= rect1.y2)) {
    rect3.side1 = Math.sqrt((rect1.x1 ** 2) + (rect2.x2 ** 2));
    rect3.side1 = Math.sqrt((rect1.y1 ** 2) + (rect2.y2 ** 2));
}

//checking & pushing coordinates
while ((arrayOfX.length < 10) && (arrayOfY.length < 10)) {
    let x = Math.random() * 400;
    let y = Math.random() * 400;
    if ( ((((x - x0) ** 2) / (rect3.side1 / 2) ** 2) + (((y - y0) ** 2) / (rect3.side2 / 2) ** 2) - 1) < 0) {
        arrayOfX.push(x);
        arrayOfY.push(y);
    }
    arrayOfX.length++;
    arrayOfY.length++;
}
alert("x:\n" + arrayOfX + "\n y:\n" + arrayOfY);