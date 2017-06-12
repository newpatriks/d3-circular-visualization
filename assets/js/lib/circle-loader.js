function CircleLoader() {
	this.svgWidth = 300;
	this.iWidthCircle = 50;
	this.τ = 2 * Math.PI;
	this.fontSize = 20;
	this.min = 0;
	this.max = 100;
}

CircleLoader.prototype = (function() {
	var animation = function(transition, newAngle, oldAngle) {
		this.oldAngle = (!oldAngle) ? this.min : oldAngle;
		var interpolate = d3.interpolate(this.oldAngle, newAngle);
		var interpolateValue = d3.interpolateNumber(this.oldAngle, newAngle);

		transition.attrTween("d", function(d) {
			return function(t) {
				d.endAngle = interpolate(t);
				var textLabels = text.text( d3.format(".1f")(interpolateValue(t) * this.max / this.τ) +' %' );
				return arc(d);
			};
		});
		this.oldValue = (newAngle * this.max/this.τ);
	}
	var callback = function() {
		this.foreground.transition().duration(500).ease("back-out").attr("transform", "scale(2.1)");
		this.background.transition().duration(500).ease("back-out").attr("transform", "scale(2.1)");
	}

	return {
		init: function(elem, assignedClass, value, width, fontSize) {
			this.value = value;
			this.svgWidth = (width) ? width : this.svgWidth;
			this.fontSize = fontSize ? fontSize : this.fontSize;
			this.iWidthCircle = this.svgWidth/6;

			arc = d3.svg.arc()
				.innerRadius(this.iWidthCircle)
				.outerRadius(this.iWidthCircle+3)
				.startAngle(0);

			svg = d3.select("#"+elem).append("svg")
				.attr("width", this.svgWidth)
				.attr("height", this.svgWidth)
				.attr("class","svg_cercles")
				.append("g")
				.attr("transform", "translate(" + this.svgWidth/2 + "," + this.svgWidth/2 +")");

			background = svg.append("path")
			.datum({endAngle: this.τ})
			.attr('class', assignedClass+'_back')
			.attr("d", arc);

			foreground = svg.append("path")
				.datum({endAngle: this.τ})
				.attr('class', assignedClass+'_front')
				.attr("d", arc);

			svg.append("text")
				.attr("text-anchor", "middle")
				.attr("font-size", this.fontSize + "px")
				.attr("dy", ".35em")

			text = svg.select("text")
				.attr('class','circle-txt');

			foreground.transition()
				.duration(1000)
				.call(animation, (this.value * this.τ/this.max))
				.each("end", callback);
		},
		update: function(value) {
			this.value = value;
			foreground.transition()
				.duration(1000)
				.call(animation, (this.value * this.τ/this.max), (this.oldValue * τ/this.max))
				.each("end", callback);
		}
	}
})();
