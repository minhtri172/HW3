/*
    File: hw3.js
    GUI Assigment: Creating an Interactive Dynamic Table
    Minh Le, Umass Lowell Computer Science, minhtri_le@student.uml.edu
    Copyright (C) 2021 by Minh Le. 
    Updated by ML on Oct 25, 2021 at 10:00am
*/

// These variables used to determine if the form is valid or not
// If the form is valid, create the table; otherwise, display error messages
let IS_VALID_FIRST_COLUMN = false;
let IS_VALID_END_COLUMN = false;
let IS_VALID_FIRST_ROW = false;
let IS_VALID_END_ROW = false;

// Inputs: if inputs lost focus, they will call functions to validate the values
document.getElementById("fCol").addEventListener("blur", valFirstColumn, false);
document.getElementById("eCol").addEventListener("blur", valEndColumn, false);
document.getElementById("fRow").addEventListener("blur", valFirstRow, false);
document.getElementById("eRow").addEventListener("blur", valEndRow, false);

// Button generate the table (click)
document.getElementById("btnGen").addEventListener("click", drawTable, false);

/*
##############################################################################################
#   Check valid start column
#   Check if the input is not empty
#   Check if the input is a number
#   Check if the number start with 0 or 00
#   referene: https://stackoverflow.com/questions/26484914/check-if-number-start-with-0-or-00
#   Check if the number is an integer number
#   Check if the number is in the range [-50, 50]
#   fCol: get the start column value from users
#   valFCol: display the error message
#   IS_VALID_FIRST_COLUMN set to true if the input is valid; otherwise, set to false
###############################################################################################
*/
function valFirstColumn() {
    let fCol = document.getElementById("fCol").value; // get start column value
    if (fCol != "") { // check if the value is not null
        if (!isNaN(fCol) && !fCol.match(/^(?:0|00|-0|-00)\d+$/)) { // check if the value is a digit (not accept start wih 0 or 00)
            fCol = Number(fCol); // convert to number
            if (Number.isInteger(fCol)) { // check if the value is integer
                if (fCol >= -50 && fCol <= 50) { // check if the value is in the range[-50, 50]
                    // Here - The first column is valid
                    document.getElementById("fCol").style.borderColor = "black"; // set the input border to black (means valid input)
                    document.getElementById("valFCol").innerHTML = ""; // delete the message
                    IS_VALID_FIRST_COLUMN = true; // valid input
                } else {
                    document.getElementById("fCol").style.borderColor = "red"; // set the input border to red (means invalid input)
                    document.getElementById("valFCol").innerHTML = "Please enter a number between -50 and 50."; // display error message
                    IS_VALID_FIRST_COLUMN = false; // invalid input
                }
            } else {
                document.getElementById("fCol").style.borderColor = "red"; // set the input border to red (means invalid input)
                document.getElementById("valFCol").innerHTML = "Please enter a integer number."; // display error message
                IS_VALID_FIRST_COLUMN = false; // invalid input
            }
        } else {
            document.getElementById("fCol").style.borderColor = "red"; // set the input border to red (means invalid input)
            document.getElementById("valFCol").innerHTML = "Please enter a number."; // display error message
            IS_VALID_FIRST_COLUMN = false; // invalid input
        }
    } else {
        document.getElementById("fCol").style.borderColor = "red"; // set the input border to red (means invalid input)
        document.getElementById("valFCol").innerHTML = "This field is required."; // display error message
        IS_VALID_FIRST_COLUMN = false; // invalid input
    }
}

/*
##############################################################################################
#   Check valid start column
#   Check if the input is not empty
#   Check if the input is a number
#   Check if the number start with 0 or 00
#   referene: https://stackoverflow.com/questions/26484914/check-if-number-start-with-0-or-00
#   Check if the number is an integer number
#   Check if the number is in the range [-50, 50]
#   eCol: get the end column value from users
#   valECol: display the error message
#   IS_VALID_END_COLUMN set to true if the input is valid; otherwise, set to false
##############################################################################################
*/
function valEndColumn() {
    let eCol = document.getElementById("eCol").value;
    if (eCol != "") {
        if (!isNaN(eCol) && !eCol.match(/^(?:0|00|-0|-00)\d+$/)) {
            eCol = Number(eCol);
            if (Number.isInteger(eCol)) {
                if (eCol >= -50 && eCol <= 50) {
                    // Here - The end column is valid
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
            document.getElementById("valECol").innerHTML = "Please enter a number.";
            IS_VALID_END_COLUMN = false;
        }
    } else {
        document.getElementById("eCol").style.borderColor = "red";
        document.getElementById("valECol").innerHTML = "This field is required.";
        IS_VALID_END_COLUMN = false;
    }
}

/*
#############################################################################################
#   Check valid start column
#   Check if the input is not empty
#   Check if the input is a number
#   Check if the number start with 0 or 00
#   referene: https://stackoverflow.com/questions/26484914/check-if-number-start-with-0-or-00
#   Check if the number is an integer number
#   Check if the number is in the range [-50, 50]
#   fRow: get the first row value from users
#   valFRow: display the error message
#   IS_VALID_FIRST_ROW set to true if the input is valid; otherwise, set to false
##############################################################################################
*/
function valFirstRow() {
    let fRow = document.getElementById("fRow").value;
    if (fRow != "") {
        if (!isNaN(fRow) && !fRow.match(/^(?:0|00|-0|-00)\d+$/)) {
            fRow = Number(fRow);
            if (Number.isInteger(fRow)) {
                if (fRow >= -50 && fRow <= 50) {
                    // Here - The first row is valid
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
            document.getElementById("valFRow").innerHTML = "Please enter a number.";
            IS_VALID_FIRST_ROW = false;
        }
    } else {
        document.getElementById("fRow").style.borderColor = "red";
        document.getElementById("valFRow").innerHTML = "This field is required.";
        IS_VALID_FIRST_ROW = false;
    }
}

/*
##############################################################################################
#   Check valid start column
#   Check if the input is not empty
#   Check if the input is a number
#   Check if the number start with 0 or 00
#   referene: https://stackoverflow.com/questions/26484914/check-if-number-start-with-0-or-00
#   Check if the number is an integer number
#   Check if the number is in the range [-50, 50]
#   eRow: get the end row value from users
#   valERow: display the error message
#   IS_VALID_END_ROW set to true if the input is valid; otherwise, set to false
###############################################################################################
*/
function valEndRow() {
    let eRow = document.getElementById("eRow").value;
    if (eRow != "") {
        if (!isNaN(eRow) && !eRow.match(/^(?:0|00|-0|-00)\d+$/)) {
            eRow = Number(eRow);
            if (Number.isInteger(eRow)) {
                if (eRow >= -50 && eRow <= 50) {
                    // Here - The end row is valid
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
            document.getElementById("valERow").innerHTML = "Please enter a number.";
            IS_VALID_END_ROW = false;
        }
    } else {
        document.getElementById("eRow").style.borderColor = "red";
        document.getElementById("valERow").innerHTML = "This field is required.";
        IS_VALID_END_ROW = false;
    }
}

/*
###########################################
#   Create the Dynamic Table
#   Valid the form before create the table
###########################################
*/
function drawTable() {
    // Get values from inputs
    let fCol = document.getElementById("fCol").value; // First Column
    let eCol = document.getElementById("eCol").value; // End Column
    let fRow = document.getElementById("fRow").value; // Start Row
    let eRow = document.getElementById("eRow").value; // End Row

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
    // If all IS_VALID_FIRST_COLUMN, IS_VALID_END_COLUMN, IS_VALID_FIRST_ROW, IS_VALID_END_ROW are true
    // that means the form is valid, so generate the table
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

        // Clear red borders
        document.getElementById("fCol").style.borderColor = "black";
        document.getElementById("eCol").style.borderColor = "black";
        document.getElementById("fRow").style.borderColor = "black";
        document.getElementById("eRow").style.borderColor = "black";

        // CREATE TABLE
        // delete the table before create a new one
        if (document.getElementById('myTable') !== null) {
            document.getElementById("myTable").remove();
        }

        // Create table with id="myTable"
        let tab = document.createElement("TABLE");
        tab.setAttribute("id", "myTable");

        // Add table to div.displayTab
        let container = document.getElementById("displayTab");
        container.appendChild(tab);

        // create rows
        let i, j, tr_index;
        tr_index = 0; // index of the TR element (index of rows), used to determine the index of <tr>

        // This code measure the table is still created 
        // if users input start values > end values
        if (fCol > eCol && fRow > eRow) { // start col > end col and start row > end row
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
                        cols.appendChild(document.createTextNode(j)); // add values
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                    }
                    tr_index++; // increase the index of tr
                } else {
                    // rows 2nd and more
                    let rows = document.createElement("TR"); // create TR
                    tab.appendChild(rows); // add it to table

                    // Left Header
                    let cols = document.createElement("TD"); // create TD

                    // i + 1 because we skip the first row, so we need to +1 (going down)
                    cols.appendChild(document.createTextNode(i + 1)); // add the content to TD
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TD to TR

                    // Create other next TD (columns)
                    for (j = fCol; j >= eCol; j--) {
                        let cols = document.createElement("TD"); // create TD
                        cols.appendChild(document.createTextNode((i + 1) * j)); // create content of TD (calculate the multiplication)
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TD to TR
                    }
                    tr_index++; // increase the index of tr
                }
            }
        } else if (fCol > eCol && fRow <= eRow) { // start col > end col and start row <= end row
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
                        cols.appendChild(document.createTextNode(j)); // add values
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                    }
                    tr_index++; // increase the index of tr
                } else {
                    // rows 2nd and more
                    let rows = document.createElement("TR"); // create TR
                    tab.appendChild(rows); // add it to table

                    // Left Header
                    let cols = document.createElement("TD"); // create TD

                    // i - 1 because we skip the first header (going up)
                    cols.appendChild(document.createTextNode(i - 1)); // add the content to TD
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TD to TR

                    // Create other next TD (columns)
                    for (j = fCol; j >= eCol; j--) {
                        let cols = document.createElement("TD"); // create TD
                        cols.appendChild(document.createTextNode((i - 1) * j)); // create content of TD (calculate the multiplication)
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TD to TR
                    }
                    tr_index++; // increase the index of tr
                }
            }
        } else if (fCol <= eCol && fRow > eRow) { // start col <= end col and end start > end row
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
                        cols.appendChild(document.createTextNode(j)); // add values
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                    }
                    tr_index++;
                } else {
                    // rows 2nd and more
                    let rows = document.createElement("TR"); // create TR
                    tab.appendChild(rows); // add it to table

                    // Left Header
                    let cols = document.createElement("TD"); // create TD
                    cols.appendChild(document.createTextNode(i + 1)); // add the content to TD
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TD to TR

                    // Create other next TD (columns)
                    for (j = fCol; j <= eCol; j++) {
                        let cols = document.createElement("TD"); // create TD
                        cols.appendChild(document.createTextNode((i + 1) * j)); // create content of TD (calculate the multiplication)
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TD to TR
                    }
                    tr_index++; // increase the index of tr
                }
            }
        } else { // start col <= end col and start row <= end row (normal case)
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
                        cols.appendChild(document.createTextNode(j)); // add values
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
                    }
                    tr_index++; // increase the index of tr
                } else {
                    // rows 2nd and more
                    let rows = document.createElement("TR"); // create TR
                    tab.appendChild(rows); // add it to table

                    // Left Header
                    let cols = document.createElement("TD"); // create TD
                    // add the content to TD
                    // i - 1 because we added the first row, so we need to -1
                    cols.appendChild(document.createTextNode(i - 1));
                    tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TD to TR

                    // Create other next TD
                    for (j = fCol; j <= eCol; j++) {
                        let cols = document.createElement("TD"); // create TD
                        cols.appendChild(document.createTextNode((i - 1) * j)); // create content of TD (calculate the multiplication)
                        tab.getElementsByTagName("TR")[tr_index].appendChild(cols); // add TD to TR
                    }
                    tr_index++; // increase the index of tr
                }
            }
        }
    }
}