function drawTable() {
    var fCol = document.getElementById("fCol").value;
    var eCol = document.getElementById("eCol").value;
    var fRow = document.getElementById("fRow").value;
    var eRow = document.getElementById("eRow").value;

    // debug
    console.log("first col: " + fCol);
    console.log("end col: " + eCol);
    console.log("first row: " + fRow);
    console.log("end row: " + eRow);

    // delete val labels
    if (document.getElementById("valFCol").textContent != "") {
        document.getElementById("valFCol").innerHTML = "";
    }

    if (document.getElementById("valECol").textContent != "") {
        document.getElementById("valECol").innerHTML = "";
    }

    if (document.getElementById("valFRow").textContent != "") {
        document.getElementById("valFRow").innerHTML = "";
    }

    if (document.getElementById("valERow").textContent != "") {
        document.getElementById("valERow").innerHTML = "";
    }

    // Boolean
    var isValFC = false;
    var isValEC = false;
    var isValFR = false;
    var isValER = false;

    // check validation - if != "", convert to number; otherwise, catch the error
    if (fCol != "" && eCol != "" && fRow != "" && eRow != "") {

        // Check if not numbers
        // create a function to create table
        if (!isNaN(fCol) && !isNaN(eCol) && !isNaN(fRow) && !isNaN(eRow)) {
            // Check outside of range[-50,50]
            if ((fCol >= -50 && fCol <= 50)
                && (eCol >= -50 && eCol <= 50)
                && (fRow >= -50 && fRow <= 50)
                && (eRow >= -50 && eRow <= 50)) {

                // convert string to numbers
                fCol = parseInt(fCol);
                eCol = parseInt(eCol);
                fRow = parseInt(fRow);
                eRow = parseInt(eRow);

                // start > end
                if (eCol >= fCol && eRow >= fRow) {
                    // create table
                    createTable(fCol, eCol, fRow, eRow);
                } else {
                    if (fCol > eCol) {
                        isValEC = true;
                    }
                    if (fRow > eRow) {
                        isValER = true;
                    }
                    validationMessage(isValFC, isValEC, isValFR, isValER, "Error: End Number > Start Number.");
                }
            } else {
                if (fCol < -50 || fCol > 50) {
                    isValFC = true;
                }
                if (eCol < -50 || eCol > 50) {
                    isValEC = true;
                }
                if (fRow < -50 || fRow > 50) {
                    isValFR = true;
                }
                if (eRow < -50 || eRow > 50) {
                    isValER = true;
                }
                validationMessage(isValFC, isValEC, isValFR, isValER, "Error: Out of range [-50, 50].");
            }

        } else {
            if (isNaN(fCol)) {
                isValFC = true;
            }
            if (isNaN(eCol)) {
                isValEC = true;
            }
            if (isNaN(fRow)) {
                isValFR = true;
            }
            if (isNaN(eRow)) {
                isValER = true;
            }
            validationMessage(isValFC, isValEC, isValFR, isValER, "Error: Incorrect Number Format.");
        }
    } else {
        if (fCol == "") {
            isValFC = true;
        }
        if (eCol == "") {
            isValEC = true;
        }
        if (fRow == "") {
            isValFR = true;
        }
        if (eRow == "") {
            isValER = true;
        }
        validationMessage(isValFC, isValEC, isValFR, isValER, "Error: Blank Field.");
    }
}

function validationMessage(isValFC, isValEC, isValFR, isValER, msg) {
    // delete the table before create a new one
    if (document.getElementById("myTable") !== null) {
        document.getElementById("myTable").remove();
    }

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

function createTable(x1, x2, y1, y2) {
    // delete the table before create a new one
    if (document.getElementById('myTable') !== null) {
        document.getElementById("myTable").remove();
    }

    var wrapper = document.getElementById("wrapper");
    var tab = document.createElement("TABLE");
    tab.setAttribute("id", "myTable");
    //wrapper.appendChild(tab);
    
    var container = document.getElementById("displayTab");
    container.appendChild(tab);
    
    // create rows
    var i, j, tr_index;
    tr_index = 0;

    for (i = x1; i <= x2 + 1; i++) {
        if (i == x1) { // First row
            var rows = document.createElement("TR");
            tab.appendChild(rows);
            var cols = document.createElement("TD");
            tab.getElementsByTagName("TR")[tr_index].appendChild(cols);

            for (j = y1; j <= y2; j++) {
                var cols = document.createElement("TD");
                cols.appendChild(document.createTextNode(j));
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
            }
            tr_index++;
        } else { // rows 2 -> ++
            var rows = document.createElement("TR");
            tab.appendChild(rows);
            var cols = document.createElement("TD");
            console.log(i);
            cols.appendChild(document.createTextNode(i - 1));
            tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
            for (j = y1; j <= y2; j++) {
                var cols = document.createElement("TD");
                cols.appendChild(document.createTextNode((i - 1) * j));
                tab.getElementsByTagName("TR")[tr_index].appendChild(cols);
            }
            tr_index++;
        }
    }
}