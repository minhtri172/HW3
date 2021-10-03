/*
    File: hw3.js
    GUI Assigment: Creating an Interactive Dynamic Table
    Minh Le, Umass Lowell Computer Science, minhtri_le@student.uml.edu
    Copyright (C) 2021 by Minh Le. 
    Updated by ML on Oct 3, 2021 at 11:00am
*/

// Button
var btnGen = document.getElementById("btnGen");
btnGen.addEventListener("click", drawTable, false);

// draw the table
function drawTable() {
    var fCol = document.getElementById("fCol").value;
    var eCol = document.getElementById("eCol").value;
    var fRow = document.getElementById("fRow").value;
    var eRow = document.getElementById("eRow").value;

    // debug
    /*console.log("first col: " + fCol);
    console.log("end col: " + eCol);
    console.log("first row: " + fRow);
    console.log("end row: " + eRow);*/

    // check validation - if input numbers are not null, convert to number; otherwise, catch the error
    if (isEmptyField(fCol, eCol, fRow, eRow)) {
        // Check if not numbers
        if (isNumerics(fCol, eCol, fRow, eRow)) {
            // convert string to numbers
            fCol = parseInt(fCol);
            eCol = parseInt(eCol);
            fRow = parseInt(fRow);
            eRow = parseInt(eRow);
            // Check outside of range[-50,50]
            if (isInRange(fCol, eCol, fRow, eRow, -50, 50)) {
                // Clear validation messages
                document.getElementById("valFCol").innerHTML = "";
                document.getElementById("valECol").innerHTML = "";
                document.getElementById("valFRow").innerHTML = "";
                document.getElementById("valERow").innerHTML = "";

                // create table
                createTable(fCol, eCol, fRow, eRow);
            }
        }
    }
}

// check if the field is empty
function isEmptyField(x1, x2, y1, y2) {
    // Boolean
    var isValFC = false;
    var isValEC = false;
    var isValFR = false;
    var isValER = false;

    if (x1 != "" && x2 != "" && y1 != "" && y2 != "") {
        return true;
    } else {
        if (x1 == "") {
            isValFC = true;
        }
        if (x2 == "") {
            isValEC = true;
        }
        if (y1 == "") {
            isValFR = true;
        }
        if (y2 == "") {
            isValER = true;
        }
        validationMessage(isValFC, isValEC, isValFR, isValER, "Error: Blank Field.");
        return false;
    }
}

// Check if the input is numberic or not
function isNumerics(x1, x2, y1, y2) {
    // Boolean
    var isValFC = false;
    var isValEC = false;
    var isValFR = false;
    var isValER = false;

    if (!isNaN(x1) && !isNaN(x2) && !isNaN(y1) && !isNaN(y2)) {
        return true;
    } else {
        if (isNaN(x1)) {
            isValFC = true;
        }
        if (isNaN(x2)) {
            isValEC = true;
        }
        if (isNaN(y1)) {
            isValFR = true;
        }
        if (isNaN(y2)) {
            isValER = true;
        }
        validationMessage(isValFC, isValEC, isValFR, isValER, "Error: Not a Number.");
        return false;
    }
}

// Check if the input numbers in a specific range
function isInRange(x1, x2, y1, y2, start, end) {
    // Boolean
    var isValFC = false;
    var isValEC = false;
    var isValFR = false;
    var isValER = false;

    if ((x1 >= start && x1 <= end)
        && (x2 >= start && x2 <= end)
        && (y1 >= start && y1 <= end)
        && (y2 >= start && y2 <= end)) {
        return true;
    } else {
        if (x1 < start || x1 > end) {
            isValFC = true;
        }
        if (x2 < start || x2 > end) {
            isValEC = true;
        }
        if (y1 < start || y1 > end) {
            isValFR = true;
        }
        if (y2 < start || y2 > end) {
            isValER = true;
        }
        validationMessage(isValFC, isValEC, isValFR, isValER, "Error: Out of range [-50, 50].");
        return false;
    }
}

// Check if the end number is greater than the start number
function isEndGreaterThanStart(x1, x2, y1, y2) {
    // Boolean
    var isValFC = false;
    var isValEC = false;
    var isValFR = false;
    var isValER = false;

    if (x2 >= x1 && y2 >= y1) {
        return true;
    } else {
        if (x1 > x2) {
            isValEC = true;
        }
        if (y1 > y2) {
            isValER = true;
        }
        validationMessage(isValFC, isValEC, isValFR, isValER, "Error: Start Number > End Number.");
        return false;
    }
}

// Display validation messages
function validationMessage(isValFC, isValEC, isValFR, isValER, msg) {
    // delete the table before create a new one
    if (document.getElementById("myTable") !== null) {
        document.getElementById("myTable").remove();
    }

    // debug
    /*console.log("first col: " + isValFC);
    console.log("end col: " + isValEC);
    console.log("first row: " + isValFR);
    console.log("end row: " + isValER);*/

    // Empty field
    if (isValFC) {
        document.getElementById("valFCol").innerHTML = msg;
    } else {
        document.getElementById("valFCol").innerHTML = "";
    }
    if (isValEC) {
        document.getElementById("valECol").innerHTML = msg;
    } else {
        document.getElementById("valECol").innerHTML = "";
    }
    if (isValFR) {
        document.getElementById("valFRow").innerHTML = msg;
    } else {
        document.getElementById("valFRow").innerHTML = "";
    }
    if (isValER) {
        document.getElementById("valERow").innerHTML = msg;
    } else {
        document.getElementById("valERow").innerHTML = "";
    }
}

// Create the table
function createTable(x1, x2, y1, y2) {
    // delete the table before create a new one
    if (document.getElementById('myTable') !== null) {
        document.getElementById("myTable").remove();
    }

    var tab = document.createElement("TABLE");
    tab.setAttribute("id", "myTable");

    var container = document.getElementById("displayTab");
    container.appendChild(tab);

    // create rows
    var i, j, tr_index;
    tr_index = 0; // index of the TR

    // Check if end > start
    if (x1 > x2 && y1 > y2) { // end col > start col and end row > start row
        for (i = y1; i >= y2 - 1; i--) {
            if (i == y1) {
                // First row (Top Header)
                var rows = document.createElement("TR"); // create first TR (first row)
                tab.appendChild(rows); // add it to table
                var cols = document.createElement("TD"); // create the first TD (detail)
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to the first row

                // Create other TD on the first row
                for (j = x1; j >= x2; j--) {
                    var cols = document.createElement("TD");
                    cols.appendChild(document.createTextNode(j));
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                }
                tr_index++;
            } else {
                // rows 2nd and more
                var rows = document.createElement("TR"); // create TR
                tab.appendChild(rows); // add it to table

                // Left Header
                var cols = document.createElement("TD"); // create TD
                cols.appendChild(document.createTextNode(i + 1)); // // add the content to TD
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TR and TD to table

                // Create other next TD (columns)
                for (j = x1; j >= x2; j--) {
                    var cols = document.createElement("TD"); // create TD
                    cols.appendChild(document.createTextNode((i + 1) * j)); // create content of TD (calculate the multiplication)
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to table
                }
                tr_index++;
            }
        }
    } else if (x1 > x2 && y1 <= y2) { // end col > start col and end row < start row
        for (i = y1; i <= y2 + 1; i++) {
            if (i == y1) {
                // First row (Top Header)
                var rows = document.createElement("TR"); // create first TR (first row)
                tab.appendChild(rows); // add it to table
                var cols = document.createElement("TD"); // create the first TD (detail)
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to the first row

                // Create other TD on the first row
                for (j = x1; j >= x2; j--) {
                    var cols = document.createElement("TD");
                    cols.appendChild(document.createTextNode(j));
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                }
                tr_index++;
            } else {
                // rows 2nd and more
                var rows = document.createElement("TR"); // create TR
                tab.appendChild(rows); // add it to table

                // Left Header
                var cols = document.createElement("TD"); // create TD
                cols.appendChild(document.createTextNode(i - 1)); // // add the content to TD
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TR and TD to table

                // Create other next TD (columns)
                for (j = x1; j >= x2; j--) {
                    var cols = document.createElement("TD"); // create TD
                    cols.appendChild(document.createTextNode((i - 1) * j)); // create content of TD (calculate the multiplication)
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to table
                }
                tr_index++;
            }
        }
    } else if (x1 <= x2 && y1 > y2) { // end col < start col and end row > start row
        for (i = y1; i >= y2 - 1; i--) {
            if (i == y1) {
                // First row (Top Header)
                var rows = document.createElement("TR"); // create first TR (first row)
                tab.appendChild(rows); // add it to table
                var cols = document.createElement("TD"); // create the first TD (detail)
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to the first row

                // Create other TD on the first row
                for (j = x1; j <= x2; j++) {
                    var cols = document.createElement("TD");
                    cols.appendChild(document.createTextNode(j));
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                }
                tr_index++;
            } else {
                // rows 2nd and more
                var rows = document.createElement("TR"); // create TR
                tab.appendChild(rows); // add it to table

                // Left Header
                var cols = document.createElement("TD"); // create TD
                cols.appendChild(document.createTextNode(i + 1)); // // add the content to TD
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TR and TD to table

                // Create other next TD (columns)
                for (j = x1; j <= x2; j++) {
                    var cols = document.createElement("TD"); // create TD
                    cols.appendChild(document.createTextNode((i + 1) * j)); // create content of TD (calculate the multiplication)
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to table
                }
                tr_index++;
            }
        }
    } else { // end col >= start col and end row >= start row
        for (i = y1; i <= y2 + 1; i++) {
            if (i == y1) {
                // First row (Top Header)
                var rows = document.createElement("TR"); // create first TR (first row)
                tab.appendChild(rows); // add it to table
                var cols = document.createElement("TD"); // create the first TD (detail)
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to the first row

                // Create other TD on the first row
                for (j = x1; j <= x2; j++) {
                    var cols = document.createElement("TD");
                    cols.appendChild(document.createTextNode(j));
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                }
                tr_index++;
            } else {
                // rows 2nd and more
                var rows = document.createElement("TR"); // create TR
                tab.appendChild(rows); // add it to table

                // Left Header
                var cols = document.createElement("TD"); // create TD
                cols.appendChild(document.createTextNode(i - 1)); // // add the content to TD
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TR and TD to table

                // Create other next TD
                for (j = x1; j <= x2; j++) {
                    var cols = document.createElement("TD"); // create TD
                    cols.appendChild(document.createTextNode((i - 1) * j)); // create content of TD (calculate the multiplication)
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to table
                }
                tr_index++;
            }
        }
    }
}