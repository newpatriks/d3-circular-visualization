
![Circular-percentage](http://s1.postimg.org/x59zrod27/Captura_de_pantalla_2015_02_24_a_las_23_06_36.png)

This is a js object that lets you build a visualizacion to show percentage data, or other data that can be represented by a circular visualization. The plugin has been created using the library [D3.js](http://d3js.org/).

Here you have an example working: [Circular visualization](http://jordillobet.es/projects/circular-visualization/)

###Installation
The file *circular-percentage.js* has to be added after add the D3 library on your html file. The object will be initializate automatically, so you don't need to call it. On the next step I'll explain how to pass the parameters to draw the correct circle.
```html
<script src="assets/js/lib/d3.v3.min.js"></script>
<script src="assets/js/lib/circular-percentage.js"></script>
```

###How to use

To send the parameters to the object, you need to call the **init** funcion. And the parameters are:
- **ID** of the element where the visualization will be placed
- **Minimum** value of the visualization
- **Maximum** value of the visualization
- **Final value** we want to show
- **Class** will be assigned to the circles. This option is basically for css.

```html
<script type="text/javascript">
  createAverage.init("circular_graph", 0, 100, 85, 'circle');
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

Then, the class name will be *[you-personalized-name]_back* and *[you-personalized-name]_front*

