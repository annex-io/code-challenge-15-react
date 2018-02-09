const boardSize = 16;
const boardElem = '.board';
const emptyTile = "&nbsp;";

var game = {  
	
	spaces: {},
	
	draw: function() {

		$(boardElem).empty();

		var $board = $(boardElem);
		
		for(var key in this.spaces) { 
			var $tile = $('<div class="space"></div>');
			
			$tile
				.attr('data-space', key)
				.attr('data-tile', this.spaces[key])
				.html(this.spaces[key])

				// todo: allow only the tiles net to the space to be clickable...		
				.click(function() {	
					var space = $(this).attr('data-space');
					console.log('space clicked: ' + space);
					
					game.move(space);
					game.draw();
				});
	
			$board.append($tile);
		}

		$(boardElem).append($board);		
	},

	move: function(space) {
		var tileVal = this.spaces[space];
		console.log('tile at this space ' + tileVal);

 		// find the empty space to add it
 		for(var key in this.spaces) {
 			if (this.spaces[key] === emptyTile) {
 				this.spaces[key] = tileVal;
 				console.log('the empty space found was ' + key + ' and we added tile ' + this.spaces[key])
 			}
 		} 		

 		// clear clicked space
 		console.log('tile as prev ' + this.spaces[space]);
		this.spaces[space] = emptyTile;
		console.log('tile as curr ' + this.spaces[space]);
	},

	isWin: function() {
		// check data to see if the player has won
	}
}

function handler() {
	console.log(handler);
}