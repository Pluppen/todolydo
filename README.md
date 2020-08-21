
# Todolydo - Open Source Todo App
A simple Todo application made with electron!
But hey! Let's make this an awesome open source todo application for computers!

## Adding themes
If you want to contribute to this project with a theme. Follow this guide.

Begin by creating a new folder with the name of your theme in the *themes* folder. After that add your css file with the same format as your folder. For example if we make a theme called **awesomeTheme** our path from the *app* folder would be. *./themes/awesomeTheme/awesomeTheme.css*.

The HTML you can modify looks like this.
```html
<div  class="container">
	<h1>TODOLYDO</h1>
	<input
	id="newTodo"
	type="text"
	placeholder="Write task, press ENTER"
	onkeypress="handleKeyPress(event)"
	/>
	<div  id="todos"  class="todos">
		<!--EXAMPLE TODO FOR THEME GUIDE -->
		<div id="todos" class="todos">
			<div class="todo" id="0">
				<div class="text">
					I'm a todo!
				</div>
				<div class="button" onclick="removeTodo(event)">
					<img src="./remove.svg" alt="trash icon">
				</div>
			</div>
		</div>
	</div>
</div>
```

When you've your dream theme and added your new folder with its css. You have to add your theme into an array in our `main.js`
```javascript
// Array used to keep track of the themes. Used in menu.
const  themesAvailable = [
	...
	"awesomeTheme",
];
```
When you have completed all of the steps you should create a pull request!

## More features?
I think we need some more features, if you have any ideas post an issue where you explain your feature.
