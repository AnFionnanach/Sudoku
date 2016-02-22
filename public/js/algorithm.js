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
