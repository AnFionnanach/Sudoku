var isPointingPair = function(pair, cells) {
    
    for (var i = 0; i < cells.length; i++) {
        if (pair.cendidates === cells[i].candidates) {
           return true; 
        }
    };
    return false;
};

