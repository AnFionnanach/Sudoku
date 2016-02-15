var getRow = function(row, board) {
	return board[row];
}  

var getRowExCell = function(row, column, board) {
	var rowCells = new Array();
	for (y = 0; y < board.length; y++) {
		if (y != column) {
			rowCells.push(board[row][y]);
		};
	};
	return rowCells;
};

var getColumnExCell = function(row, column, board) {
	var columnCells = new Array();
	for (x = 0; x < board.length; x++) {
		if (x != row) {
			columnCells.push(board[x][column]);
		};
	};
	return columnCells;
};

var getColumn = function(column, board) {
	var columnCells = new Array();
	for (x = 0; x < board.length; x++) {
		columnCells.push(board[x][column]);
	}
	return columnCells;
};

var getSquareExCell = function(row, column, board) {
	var square = new Array();
	var rows = Math.floor(row/3) * 3;
	var columns = Math.floor(column/3) * 3;
	for (x = rows; x < rows + 3; x++) {
		for (y = columns; y < columns + 3; y++) {
			if (!((x == row) && (y == column))) {
				square.push(board[x][y]);
			}
		}
	}
	return square;
};

var getSquareExCellRowColumn = function(row, column, board) {
	var square = new Array();
	var rows = Math.floor(row/3) * 3;
	var columns = Math.floor(column/3) * 3;
	for (x = rows; x < rows + 3; x++) {
		for (y = columns; y < columns + 3; y++) {
			if ((x != row) && (y != column)) {
				square.push(board[x][y]);
			}
		}
	}
	return square;
};

var getBuddiesExCell = function(row, column, board) {
	var cells = new Array();
	cells = getRowExCell(row, column, board);
	cells = cells.concat(getColumnExCell(row, column, board));
	cells = cells.concat(getSquareExCellRowColumn(row, column, board));
	return cells;
};

var getSquare = function(row, column, board) {
	var square = getSquareExCell(row, column, board);
	square.push(board[row][column]);
	return square;
};  
	
var getCommonCellsExCells = function(row1, column1, row2, column2, board) {
	var cells1 = getBuddiesExCell(row1, column1, board);
	var cells2 = getBuddiesExCell(row2, column2, board);
	
	var commonCells = new Array();
	for (x = 0; x < cells1.length; x++) {
		for (y = 0; y < cells2.length; y++) {
			if (cells1[x] === cells2[y]) {
				commonCells.push(cells1[x]);
			}
		}
	}
	return commonCells;
};
