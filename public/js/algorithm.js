var isPointingPair = function(pair, cells) {
    
    for (var i = 0; i < cells.length; i++) {
        if (pair.candidates === cells[i].candidates) {
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
          return cell.candidates[i];
      }
    };
    
    return "0";
};
