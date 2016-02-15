var isSingleCandidate = function(cell) {
	if (cell.length === 1) {
		return true;
	} else {
		return false;
	};
};

var isFinished = function(board) {
	var finished = true;
	
	for (x = 0; x < board.length; x++) {
		for (y = 0; y < board[x].length; y++) {
			if (!isSingleCandidate(board[x][y].candidates)) {
				finished = false;
			}
		}
	};
	return finished;
};

var isValid = function(cells) {
	var valid = true;
	
	for (x = 0; x < cells.length; x++) {
		var currentValue = cells[x].value;
		for (y = x + 1; y < cells.length; y++) {
			if (currentValue === cells[y].value) {
				valid = false;
				break;
			}
		}
	}
	return valid;
};