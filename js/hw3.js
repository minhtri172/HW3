/*
    File: hw3.js
    GUI Assigment: Creating an Interactive Dynamic Table
    Minh Le, Umass Lowell Computer Science, minhtri_le@student.uml.edu
    Copyright (C) 2021 by Minh Le. 
    Updated by ML on Oct 15, 2021 at 11:00pm
*/

let IS_VALID_FIRST_COLUMN = false;
let IS_VALID_END_COLUMN = false;
let IS_VALID_FIRST_ROW = false;
let IS_VALID_END_ROW = false;

// Input
document.getElementById("fCol").addEventListener("blur", valFirstColumn, false);
document.getElementById("eCol").addEventListener("blur", valEndColumn, false);
document.getElementById("fRow").addEventListener("blur", valFirstRow, false);
document.getElementById("eRow").addEventListener("blur", valEndRow, false);

// Button
document.getElementById("btnGen").addEventListener("click", drawTable, false);

/*
###################################
#   Check valid start column
#   Check is NULL
#   Check not a digit
#   Check in range [-50, 50]
###################################
*/
function valFirstColumn() {
    let fCol = document.getElementById("fCol").value;
    if (fCol != "") {
        if (!isNaN(fCol)) {
            fCol = Number(fCol);
            if (Number.isInteger(fCol)) {
                if (fCol >= -50 && fCol <= 50) {
                    document.getElementById("fCol").style.borderColor = "black";
                    document.getElementById("valFCol").innerHTML = "";
                    IS_VALID_FIRST_COLUMN = true;
                } else {
                    document.getElementById("fCol").style.borderColor = "red";
                    document.getElementById("valFCol").innerHTML = "Please enter a number between -50 and 50.";
                    IS_VALID_FIRST_COLUMN = false;
                }
            } else {
                document.getElementById("fCol").style.borderColor = "red";
                document.getElementById("valFCol").innerHTML = "Please enter a integer number.";
                IS_VALID_FIRST_COLUMN = false;
            }
        } else {
            document.getElementById("fCol").style.borderColor = "red";
            document.getElementById("valFCol").innerHTML = "Please enter a digit.";
            IS_VALID_FIRST_COLUMN = false;
        }
    } else {
        document.getElementById("fCol").style.borderColor = "red";
        document.getElementById("valFCol").innerHTML = "This field is required.";
        IS_VALID_FIRST_COLUMN = false;
    }
}

/*
###################################
#   Check valid end column
#   Check is NULL
#   Check not a digit
#   Check in range [-50, 50]
###################################
*/
function valEndColumn() {
    let eCol = document.getElementById("eCol").value;
    if (eCol != "") {
        if (!isNaN(eCol)) {
            eCol = Number(eCol);
            if (Number.isInteger(eCol)) {
                if (eCol >= -50 && eCol <= 50) {
                    document.getElementById("eCol").style.borderColor = "black";
                    document.getElementById("valECol").innerHTML = "";
                    IS_VALID_END_COLUMN = true;
                } else {
                    document.getElementById("eCol").style.borderColor = "red";
                    document.getElementById("valECol").innerHTML = "Please enter a number between -50 and 50.";
                    IS_VALID_END_COLUMN = false;
                }
            } else {
                document.getElementById("eCol").style.borderColor = "red";
                document.getElementById("valECol").innerHTML = "Please enter a integer number.";
                IS_VALID_END_COLUMN = false;
            }
        } else {
            document.getElementById("eCol").style.borderColor = "red";
            document.getElementById("valECol").innerHTML = "Please enter a digit.";
            IS_VALID_END_COLUMN = false;
        }
    } else {
        document.getElementById("eCol").style.borderColor = "red";
        document.getElementById("valECol").innerHTML = "This field is required.";
        IS_VALID_END_COLUMN = false;
    }
}

/*
###################################
#   Check valid start row
#   Check is NULL
#   Check not a digit
#   Check in range [-50, 50]
###################################
*/
function valFirstRow() {
    let fRow = document.getElementById("fRow").value;
    if (fRow != "") {
        if (!isNaN(fRow)) {
            fRow = Number(fRow);
            if (Number.isInteger(fRow)) {
                if (fRow >= -50 && fRow <= 50) {
                    document.getElementById("fRow").style.borderColor = "black";
                    document.getElementById("valFRow").innerHTML = "";
                    IS_VALID_FIRST_ROW = true;
                } else {
                    document.getElementById("fRow").style.borderColor = "red";
                    document.getElementById("valFRow").innerHTML = "Please enter a number between -50 and 50.";
                    IS_VALID_FIRST_ROW = false;
                }
            } else {
                document.getElementById("fRow").style.borderColor = "red";
                document.getElementById("valFRow").innerHTML = "Please enter a integer number.";
                IS_VALID_FIRST_ROW = false;
            }          
        } else {
            document.getElementById("fRow").style.borderColor = "red";
            document.getElementById("valFRow").innerHTML = "Please enter a digit.";
            IS_VALID_FIRST_ROW = false;
        }
    } else {
        document.getElementById("fRow").style.borderColor = "red";
        document.getElementById("valFRow").innerHTML = "This field is required.";
        IS_VALID_FIRST_ROW = false;
    }
}

/*
###################################
#   Check valid end row
#   Check is NULL
#   Check not a digit
#   Check in range [-50, 50]
###################################
*/
function valEndRow() {
    let eRow = document.getElementById("eRow").value;
    if (eRow != "") {
        eRow = Number(eRow);
        if (!isNaN(eRow)) {
            if (Number.isInteger(eRow)) {
                if (eRow >= -50 && eRow <= 50) {
                    document.getElementById("eRow").style.borderColor = "black";
                    document.getElementById("valERow").innerHTML = "";
                    IS_VALID_END_ROW = true;
                } else {
                    document.getElementById("eRow").style.borderColor = "red";
                    document.getElementById("valERow").innerHTML = "Please enter a number between -50 and 50.";
                    IS_VALID_END_ROW = false;
                }
            } else {
                document.getElementById("eRow").style.borderColor = "red";
                document.getElementById("valERow").innerHTML = "Please enter a integer number.";
                IS_VALID_END_ROW = false;
            }
        } else {
            document.getElementById("eRow").style.borderColor = "red";
            document.getElementById("valERow").innerHTML = "Please enter a digit.";
            IS_VALID_END_ROW = false;
        }
    } else {
        document.getElementById("eRow").style.borderColor = "red";
        document.getElementById("valERow").innerHTML = "This field is required.";
        IS_VALID_END_ROW = false;
    }
}

/*
###################################
#   Draw the Dynamic Table
###################################
*/
function drawTable() {
    let fCol = document.getElementById("fCol").value;
    let eCol = document.getElementById("eCol").value;
    let fRow = document.getElementById("fRow").value;
    let eRow = document.getElementById("eRow").value;

    // Validation
    valFirstColumn();
    valEndColumn();
    valFirstRow();
    valEndRow();

    // debug
    /*console.log("first col: " + fCol);
    console.log("end col: " + eCol);
    console.log("first row: " + fRow);
    console.log("end row: " + eRow);*/

    // check validation
    if (IS_VALID_FIRST_COLUMN && IS_VALID_END_COLUMN && IS_VALID_FIRST_ROW && IS_VALID_END_ROW) {
        // Convert from string to integer
        fCol = parseInt(fCol);
        eCol = parseInt(eCol);
        fRow = parseInt(fRow);
        eRow = parseInt(eRow);

        // Clear validation messages
        document.getElementById("valFCol").innerHTML = "";
        document.getElementById("valECol").innerHTML = "";
        document.getElementById("valFRow").innerHTML = "";
        document.getElementById("valERow").innerHTML = "";
        document.getElementById("fCol").style.borderColor = "black";
        document.getElementById("eCol").style.borderColor = "black";
        document.getElementById("fRow").style.borderColor = "black";
        document.getElementById("eRow").style.borderColor = "black";

        // create table
        // delete the table before create a new one
        if (document.getElementById('myTable') !== null) {
            document.getElementById("myTable").remove();
        }

        let tab = document.createElement("TABLE");
        tab.setAttribute("id", "myTable");

        let container = document.getElementById("displayTab");
        container.appendChild(tab);

        // create rows
        let i, j, tr_index;
        tr_index = 0; // index of the TR

        // Check if end > start
        if (fCol > eCol && fRow > eRow) { // end col > start col and end row > start row
            for (i = fRow; i >= eRow - 1; i--) {
                if (i == fRow) {
                    // First row (Top Header)
                    let rows = document.createElement("TR"); // create first TR (first row)
                    tab.appendChild(rows); // add it to table
                    let cols = document.createElement("TD"); // create the first TD (detail)
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to the first row

                    // Create other TD on the first row
                    for (j = fCol; j >= eCol; j--) {
                        let cols = document.createElement("TD");
                        cols.appendChild(document.createTextNode(j));
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                    }
                    tr_index++;
                } else {
                    // rows 2nd and more
                    let rows = document.createElement("TR"); // create TR
                    tab.appendChild(rows); // add it to table

                    // Left Header
                    let cols = document.createElement("TD"); // create TD
                    cols.appendChild(document.createTextNode(i + 1)); // // add the content to TD
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TR and TD to table

                    // Create other next TD (columns)
                    for (j = fCol; j >= eCol; j--) {
                        let cols = document.createElement("TD"); // create TD
                        cols.appendChild(document.createTextNode((i + 1) * j)); // create content of TD (calculate the multiplication)
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to table
                    }
                    tr_index++;
                }
            }
        } else if (fCol > eCol && fRow <= eRow) { // end col > start col and end row <= start row
            for (i = fRow; i <= eRow + 1; i++) {
                if (i == fRow) {
                    // First row (Top Header)
                    let rows = document.createElement("TR"); // create first TR (first row)
                    tab.appendChild(rows); // add it to table
                    let cols = document.createElement("TD"); // create the first TD (detail)
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to the first row

                    // Create other TD on the first row
                    for (j = fCol; j >= eCol; j--) {
                        let cols = document.createElement("TD");
                        cols.appendChild(document.createTextNode(j));
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                    }
                    tr_index++;
                } else {
                    // rows 2nd and more
                    let rows = document.createElement("TR"); // create TR
                    tab.appendChild(rows); // add it to table

                    // Left Header
                    let cols = document.createElement("TD"); // create TD
                    cols.appendChild(document.createTextNode(i - 1)); // // add the content to TD
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TR and TD to table

                    // Create other next TD (columns)
                    for (j = fCol; j >= eCol; j--) {
                        let cols = document.createElement("TD"); // create TD
                        cols.appendChild(document.createTextNode((i - 1) * j)); // create content of TD (calculate the multiplication)
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to table
                    }
                    tr_index++;
                }
            }
        } else if (fCol <= eCol && fRow > eRow) { // end col <= start col and end row > start row
            for (i = fRow; i >= eRow - 1; i--) {
                if (i == fRow) {
                    // First row (Top Header)
                    let rows = document.createElement("TR"); // create first TR (first row)
                    tab.appendChild(rows); // add it to table
                    let cols = document.createElement("TD"); // create the first TD (detail)
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to the first row

                    // Create other TD on the first row
                    for (j = fCol; j <= eCol; j++) {
                        let cols = document.createElement("TD");
                        cols.appendChild(document.createTextNode(j));
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                    }
                    tr_index++;
                } else {
                    // rows 2nd and more
                    let rows = document.createElement("TR"); // create TR
                    tab.appendChild(rows); // add it to table

                    // Left Header
                    let cols = document.createElement("TD"); // create TD
                    cols.appendChild(document.createTextNode(i + 1)); // // add the content to TD
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TR and TD to table

                    // Create other next TD (columns)
                    for (j = fCol; j <= eCol; j++) {
                        let cols = document.createElement("TD"); // create TD
                        cols.appendChild(document.createTextNode((i + 1) * j)); // create content of TD (calculate the multiplication)
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to table
                    }
                    tr_index++;
                }
            }
        } else { // end col >= start col and end row >= start row
            for (i = fRow; i <= eRow + 1; i++) {
                if (i == fRow) {
                    // First row (Top Header)
                    let rows = document.createElement("TR"); // create first TR (first row)
                    tab.appendChild(rows); // add it to table
                    let cols = document.createElement("TD"); // create the first TD (detail)
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to the first row

                    // Create other TD on the first row
                    for (j = fCol; j <= eCol; j++) {
                        let cols = document.createElement("TD");
                        cols.appendChild(document.createTextNode(j));
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                    }
                    tr_index++;
                } else {
                    // rows 2nd and more
                    let rows = document.createElement("TR"); // create TR
                    tab.appendChild(rows); // add it to table

                    // Left Header
                    let cols = document.createElement("TD"); // create TD
                    cols.appendChild(document.createTextNode(i - 1)); // // add the content to TD
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TR and TD to table

                    // Create other next TD
                    for (j = fCol; j <= eCol; j++) {
                        let cols = document.createElement("TD"); // create TD
                        cols.appendChild(document.createTextNode((i - 1) * j)); // create content of TD (calculate the multiplication)
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add it to table
                    }
                    tr_index++;
                }
            }
        }
    }
}