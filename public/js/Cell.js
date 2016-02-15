var candidates = "123456789";

var Cell = function(x, y) {
	this.x = x;
	this.y = y;
	
	this.candidates = candidates;
	this.value = "";
	
	this.setValue = function(value) {
		this.value = value;
		this.candidates = value;
	};
	
	this.removeCandidate = function(number) {
		this.candidates = this.candidates.replace(number, "");
	};
};