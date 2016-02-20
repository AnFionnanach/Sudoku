var isPointingPair = function(pair, cells) {
    
    for (var i = 0; i < cells.length; i++) {
        if (pair.candidates === cells[i].candidates) {
           return true; 
        }
    };
    return false;
};

var hasHiddenSingle = function(cell, cells) {
    
};
