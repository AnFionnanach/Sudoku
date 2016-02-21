var removeCandidate = function(candidate, cells) {
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeCandidate(candidate);
    };    
};

var isPointingPair = function(pair, cells) {
    
    for (var i = 0; i < cells.length; i++) {
        if (pair.candidates === cells[i].candidates) {
          console.log("found pointing pair " + pair.candidates);
           return true; 
        }
    };
    return false;
};

var hasHiddenSingle = function(cell, cells) {
   
   var numberOfCandidates = cell.candidates.length;
   
    for (var i = 0; i < numberOfCandidates; i++){
      var unique = true;
      for (var j = 0; j < cells.length; j++) {
          if (cells[j].candidates.search(cell.candidates[i]) !== -1) {
              unique = false;
          };
      };
      if (unique) {
          console.log("found hidden single at " + cell.x + ", " + cell.y);
          return cell.candidates[i];
      }
    };
    
    return "0";
};
