# Pet-Adoption

[CodePen Preview of Finished Work](https://codepen.io/nswalters/pen/YzyVKpb)

## Notes from project:

1) When sizing elements, make sure you take any margins, borders, and/or padding into account.  Especially borders!

2) I need to pay attention more to where I place certain elements in containers and how flex utilizes those.  I could probably streamline some of my CSS by diving deeper into the intracacies of flex.

3) While it was an optional challenge this time, I would like to work more with eventListeners and programatically updating the dom.

4) Don't forget about the `display: none;` option in CSS!  You can use it, along with some selector scripting, to programatically hide elements by alternating between `display: none;` and `display: block;` (or similar attributes).

## What would I do differently?

1) Utilize flex more efficiently to properly position elements

2) Use a loop to apply event listeners to buttons, programatically identifying which elements require a listener and then identifying which function to apply based on the element (i.e. the Dog button would apply the viewDogs function (which hides the Cats and Dinos); the Cat button would apply the viewCats function (which hides the Dogs and Dinos) etc...)
