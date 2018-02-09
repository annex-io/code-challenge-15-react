const boardSize = 16;


var game = {  
	
	spaces: {},
	
	draw: function() {

		var tiles = "";
		
		for(var key in this.spaces) 
			tiles += "<div class='space space-"+ key +" tile- "+ this.spaces[key] +"'>"+ this.spaces[key] +"</div>";
				
		$('.board').append(tiles);
	},

	move: function(space) {
		console.log(this.spaces[space]);
		
		// move val 		
 		var moveVal = this.spaces[space];

 		// find the empty space to add it
 		for(var key in this.spaces)
			if (!this.spaces[key].length) this.spaces[key] = moveVal;
 		
 		// clear clicked space
		this.spaces[space] = "";
	}
}
