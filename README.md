# Pet-Adoption

## Instructions

[Instructions Here](https://github.com/nss-nightclass-projects/pet-adoption)

## Preview

[CodePen Preview of Finished Work](https://codepen.io/nswalters/pen/YzyVKpb)

## Running the Code

You can use your favorite web server utility. Simply git clone the repo, then within the top-level directory, run your web server utility. Here at NSS, we've been using [http-server](https://www.npmjs.com/package/http-server).

You could also use something like Python's httpserver: `python2.7 -m SimpleHTTPServer` or `python3 -m http.server` for Python2 or Python3 versions, respectively.

## Notes from project:

1) When sizing elements, make sure you take any margins, borders, and/or padding into account.  Especially borders!

2) I need to pay attention more to where I place certain elements in containers and how flex utilizes those.  I could probably streamline some of my CSS by diving deeper into the intracacies of flex.

3) While it was an optional challenge this time, I would like to work more with eventListeners and programatically updating the dom.

4) Don't forget about the `display: none;` option in CSS!  You can use it, along with some selector scripting, to programatically hide elements by alternating between `display: none;` and `display: block;` (or similar attributes).

## What would I do differently?

1) Utilize flex more efficiently to properly position elements

2) Use a loop to apply event listeners to buttons, programatically identifying which elements require a listener and then identifying which function to apply based on the element (i.e. the Dog button would apply the viewDogs function (which hides the Cats and Dinos); the Cat button would apply the viewCats function (which hides the Dogs and Dinos) etc...)
