//+'<div class="row"><svg id="senator-terms-served" width="720" height="20" style="margin-left:-5px;"></svg></div>'
//update_term_vis	();

function update_term_vis() {
	var term_x = d3.scale.linear()
			    .domain([0, 42])
			    .range([0, 420]);
			
	var term_chart = d3.select("#senator-terms-served");
	
	term_chart.append("rect")
	    .attr("x", 5)
	    .attr("width", 420)
	    .attr("height", 40);
	
	term_chart.append("g")
	    .attr("transform", "translate(4.5,39.5)")
	    .attr("class", "outer axis")
	    .call(d3.svg.axis()
	      .scale(term_x)
	      .orient("bottom")
	      .ticks(10));
	
	term_chart.append("g")
	    .attr("transform", "translate(4.5,39.5)")
	    .attr("class", "inner axis")
	    .call(d3.svg.axis()
	      .scale(term_x)
	      .orient("bottom")
	      .tickSize(-40)
	      .ticks(40))
	  .selectAll(".tick")
	    .data(term_x.ticks(10), function(d) { return d; })
	  .exit()
	    .classed("minor", true);
}