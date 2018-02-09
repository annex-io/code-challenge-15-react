/*
 * Assumptions: 
 * - Duplicate numbers are ok for now
 * - It's unlikely that a player will win without first making a move
 * 
 * TODO: 
 * - Slide rule was not implemented. Could add in a check to only allow a click on tiles next to the empty tile. 
 * - 
 *
*/
var game = {  
	
	spaces: {},

	settings: {
		boardSize : 16,
		boardElem : '.board',
		emptyTile : "&nbsp;"
	},
	
	init: function() {
		// init spaces & tiles
		for (var i = 1; i < this.settings.boardSize; i++ ) {
			game.spaces[i] = Math.floor(Math.random() * (this.settings.boardSize - 1)) + 1; 
		}
		game.spaces[this.settings.boardSize] = this.settings.emptyTile;

		game.draw();
	},

	draw: function() {

		$(this.settings.boardElem).empty();

		var $board = $(this.settings.boardElem);
		
		// draw dynamic elems and bind events based on object
		for(var key in this.spaces) { 
			var $tile = $('<div class="space"></div>');
			
			$tile
				.attr('data-space', key)
				.attr('data-tile', this.spaces[key])
				.html(this.spaces[key])
				.click(function() {	
					var space = $(this).attr('data-space');
					
					game.move(space);
					game.draw();
					game.win();
				});
	
			$board.append($tile);
		}

		$(this.settings.boardElem).append($board);		
	},

	move: function(space) {
		var tileVal = this.spaces[space];

 		// find the empty space to move tile there
 		for(var key in this.spaces) {
 			if (this.spaces[key] === this.settings.emptyTile) {
 				this.spaces[key] = tileVal; 				
 			}
 		} 		

 		// clear clicked space 
		this.spaces[space] = this.settings.emptyTile;		
	},

	win: function() {
		var clone = Object.assign({}, this.spaces);
		var prev = 0;
		var win = true;

		// delete empty tile from object so we can test
		for (var key in clone) if (clone[key] == this.settings.emptyTile) delete clone[key]

		// note: maybe a better way to sort and compare...
		for (var key in clone) {
			
			if (prev > clone[key]) {
				win = false;
				break;
			}

			prev = clone[key];
		}

		if (win) {
			alert("You are a winner!");
			$(this.settings.boardElem).css('border', 'solid 5px #56d1e3');
		}
	}
}