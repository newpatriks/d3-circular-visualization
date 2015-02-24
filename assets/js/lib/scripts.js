var createAverage = (function() {

	var svgWidth = 300,
		iWidthCircle = 50,
		τ = 2 * Math.PI,
		fontSize = "2em",
		arc, svg, background, foreground, text, avg, max;

	
	function init(elem, min, max, avg, class_assign, i)
	{
		avg = avg;
		max = max;

		arc = d3.svg.arc()
			.innerRadius(iWidthCircle)
			.outerRadius(iWidthCircle+3)
			.startAngle(0);

		svg = d3.select("#"+elem).append("svg")
			.attr("width", svgWidth)
			.attr("height", svgWidth)
			.attr("class","svg_cercles")
			.append("g")
			.attr("transform", "translate(" + svgWidth/2 + "," + svgWidth/2 +")");

		background = svg.append("path")
			.datum({endAngle: τ})
			//.attr('class', 'path_background')
			.attr('class', class_assign+'_back')
			.attr("d", arc);

		foreground = svg.append("path")
			.datum({endAngle: τ})
			//.attr('class', 'path_foreground')
			.attr('class', class_assign+'_front')
			.attr("d", arc);

		svg.append("text")
			.attr("text-anchor", "middle")
			.attr("font-size", fontSize)
			.attr("dy", ".35em")

		text = svg.select("text")
			.attr('class','txt_cercle');

		foreground.transition()
			.duration(1000)
			.call(animation, (avg * τ/max), max)
			.each("end", myCallback);

	}

	function animation(transition, newAngle, max)
	{
		transition.attrTween("d", function(d) {
			var interpolate = d3.interpolate(0, newAngle);
			var interpolateValue = d3.interpolateNumber(0, newAngle);
			return function(t) {				
				d.endAngle = interpolate(t);
				var textLabels = text
					.text( d3.format(".1f")(interpolateValue(t) * max / τ) +' %' );
				return arc(d);
			};
		});
	}
	
	function myCallback() {
		foreground.transition().duration(500).ease("back-out").attr("transform", "scale(2.1)");
		background.transition().duration(500).ease("back-out").attr("transform", "scale(2.1)");
	}

	return {
		init
	};
})();