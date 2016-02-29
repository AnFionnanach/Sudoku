var removeThisCell = function (cell, cells) {
    for (var i = 0; i < cells.length; i++) {
        if (cells[i] === cell) {
            cells.splice(i, 1);
        }
    }
}

var removeCandidate = function (candidate, cells) {
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeCandidate(candidate);
    }
};

var isNakedPair = function (cell, cells) {
    for (var i = 0; i < cells.length; i++) {
        if (cell.candidates === cells[i].candidates) {
            console.log("Naked pair second at " + cells[i].x + ", " + cells[i].y);
            return cells[i];
        }
    }
    return false;
}

var hasXYZpairs = function (cell, cells) {

    var trios = new Array();
    var first = cell.candidates[0];
    var second = cell.candidates[1];
    var pair = "";
    for (var i = 0; i < cells.length; i++) {
        // we are only interested in pairs && the pair has to be different
        if ((cells[i].candidates.length === 2) && (cells[i].candidates !== cell.candidates)) {
            // the pair must contain at least one of the initial pair
            var index = cells[i].candidates.search(first);
            if (index !== -1) {
                var otherIndex = (index + 1) % 2;
                if (parseInt(cells[i].candidates[otherIndex]) < parseInt(second)) {
                    pair = cells[i].candidates[otherIndex] + second;
                } else {
                    pair = second + cells[i].candidates[otherIndex];
                }
                // now search for the missing pair
                for (var j = 0; j < cells.length; j++) {
                    if (cells[j].candidates === pair) {
                        // we have a chain!
                        console.log("Pair (at " + cell.x + "," + cell.y +"): " + first + second + ", " + cells[i].candidates +  " (at " + cells[i].x + "," + cells[i].y +"), " + pair);
                        trios.push({value: cells[i].candidates[otherIndex], first: cells[i], second: cells[j]});
                    }
                }
            }
        }
    }
    return trios;
};

var isPointingPair = function (cell, cells) {

    var valueAndLocation = new Array();
    for (var i = 0; i < cell.candidates.length; i++) {
        // for each candidate check the other cells in the square
        var count = 0;
        var candidate = cell.candidates[i];
        for (var j = 0; j < cells.length; j++) {
            // check if it appears in the other cells
            if (cells[j].candidates.search(candidate) !== -1) {
                count++;
            }
        }

        // if it only occurs once, you have a pair
        // now you need to know if it's in a row or a column
        if (count === 1) {
            var location = "";
            for (var j = 0; j < cells.length; j++) {
                if (cells[j].candidates.search(cell.candidates[i]) !== -1) {
                    if (cells[j].x === cell.x) {
                        location = "row";
                        console.log("Pointing pair " + cell.candidates[i] + " in row " + cell.x);
                    }
                    if (cells[j].y === cell.y) {
                        location = "column";
                        console.log("Pointing pair " + cell.candidates[i] + " in column " + cell.y);
                    }
                    if (location !== "") {
                        valueAndLocation.push({value: cell.candidates[i], direction: location, x: cells[j].x, y: cells[j].y});
                    }
                }
            }
        }
    }
    ;
    return valueAndLocation;
};

var hasHiddenSingle = function (cell, cells) {

    var numberOfCandidates = cell.candidates.length;

    for (var i = 0; i < numberOfCandidates; i++) {
        var unique = true;
        for (var j = 0; j < cells.length; j++) {
            if (cells[j].candidates.search(cell.candidates[i]) !== -1) {
                unique = false;
            }
            ;
        }
        ;
        if (unique) {
            console.log("found hidden single at " + cell.x + ", " + cell.y);
            return cell.candidates[i];
        }
    }
    ;

    return "0";
};
