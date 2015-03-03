var createAverage = (function() {
  var svgWidth = 300,
    iWidthCircle = 50,
    τ = 2 * Math.PI,
    fontSize = "2em",
    _min = 0, _max = 100,
    _value, _oldValue, _oldAngle,
    arc, svg, background, foreground, text;

  function animation(transition, newAngle, oldAngle)
  {
    _oldAngle = (!oldAngle) ? _min : oldAngle;
    var interpolate = d3.interpolate(_oldAngle, newAngle);
    var interpolateValue = d3.interpolateNumber(_oldAngle, newAngle);

    transition.attrTween("d", function(d) {
      return function(t) {
        d.endAngle = interpolate(t);
        var textLabels = text
          .text( d3.format(".1f")(interpolateValue(t) * _max / τ) +' %' );
        return arc(d);
      };
    });
    _oldValue = (newAngle*_max/τ);
  }
  
  function myCallback() {
    foreground.transition().duration(500).ease("back-out").attr("transform", "scale(2.1)");
    background.transition().duration(500).ease("back-out").attr("transform", "scale(2.1)");
  }

  return {
    init : function(elem, class_assign, value)
    {
      _value = value;
      
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
        .attr('class', class_assign+'_back')
        .attr("d", arc);

      foreground = svg.append("path")
        .datum({endAngle: τ})
        .attr('class', class_assign+'_front')
        .attr("d", arc);

      svg.append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", fontSize)
        .attr("dy", ".35em")

      text = svg.select("text")
        .attr('class','circle-txt');

      foreground.transition()
        .duration(1000)
        .call(animation, (_value * τ/_max))
        .each("end", myCallback);
    },
    update : function(value)
    {
      _value = value;

      foreground.transition()
        .duration(1000)
        .call(animation, (_value * τ/_max), (_oldValue * τ/_max))
        .each("end", myCallback);
    }
  }
})();