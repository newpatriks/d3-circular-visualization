
![Circular-percentage](http://s1.postimg.org/x59zrod27/Captura_de_pantalla_2015_02_24_a_las_23_06_36.png)

This is an js object that lets you build a visualizacion to show percentage data, or other data that can be represented by a circular visualization. The plugin has been created using the library [D3.js](http://d3js.org/).

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

