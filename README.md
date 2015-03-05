
![Circular-percentage](http://s1.postimg.org/x59zrod27/Captura_de_pantalla_2015_02_24_a_las_23_06_36.png)

This is a js object that lets you build a visualization to show percentage data, or other data that can be represented by a circular visualization. The plugin has been created using the library [D3.js](http://d3js.org/).

Here you have an example working: [Circular visualization](http://jordillobet.es/projects/circular-visualization/)

###Installation
The file *circular-percentage.js* has to be added after adding the D3 library on your html file. The object will be initialized automatically, so you don't need to call it. On the next step I'll explain how to pass the parameters to draw the correct circle.
```html
<script src="assets/js/lib/d3.v3.min.js"></script>
<script src="assets/js/lib/circle-loader.min.js"></script>
```

###How to use

To send the parameters to the object, you need to call the **init** funcion. And the parameters are:
- **ID** of the element where the visualization will be placed.
- **Class** will be assigned to the circles. This option is basically for css.
- **Value** we want to show.
- **SVG Width** that we want to draw. (Optional. Will be 300 by default)
- **Size of text** that will show the %. (Optional. Will be 20 by default)

```html
<script type="text/javascript">
  var graph = new CircleLoader();
  graph.init("circular_graph", 'circle', 85);
</script>
```

or 

```html
<script type="text/javascript">
  var graph = new CircleLoader();
  graph.init("circular_graph", 'circle', 85, 200, 20);
</script>
```

###Personalize

You can personalize some of the things about the visualization. First of all you have to keep in mind the parts of the visualization:

![Circular-percentage](http://s9.postimg.org/4001tuz5b/circle_visualization_details.jpg)

The names that you can see on the image are the classes that are assigned to the elements. That classes can be changed on the function init call (last parameter), and will be applied inside init funcion:

```javascript
background = svg.append("path")
  .datum({endAngle: τ})
  .attr('class', class_assign+'_back')
  .attr("d", arc);

foreground = svg.append("path")
  .datum({endAngle: τ})
  .attr('class', class_assign+'_front')
  .attr("d", arc);
```

Then, the class name will be *[you-personalized-name]_back* and *[you-personalized-name]_front*, so you can update it on the css!

#####Update feature

This new functionality lets you update the value on the fly and the circle will adapt automatically. The instructions to call are the next:

```javascript
graph.update(50);
```

As you can see, you call the update function passing the new value through (0 < newValue < 100). 


======
Jordi Llobet | newpatriks@gmail.com 
