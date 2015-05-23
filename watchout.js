var width = 960,	
		height = 550,
		collisionCount = 0,
		highScore = 0,
		userScore = 0,
		enemyCount = 40,
		radius = 15,
		enemies = [];



var Enemy = function(cx, cy) {
	this.cx = cx || Math.random() * width;
	this.cy = cy || Math.random() * height;
}



// creating svg element for enemy circles
var svg = d3.select("body")
						.append("svg")
						.attr("width", width)
						.attr("height", height);


// create enemies 
var createEnemies = function() {
	for (var i = 0; i < enemyCount; i++) {
		enemies.push(new Enemy());
	}

	// append enemies to board as svg circles
	svg.selectAll("circle")
    .data(enemies, function(d, i) {return i;})
    .enter().append("circle")
      .attr("cx", function(d){return d.cx;})
      .attr("cy", function(d){return d.cy;})
      .attr("r", radius)
      .classed("enemy", true);


};


createEnemies();





