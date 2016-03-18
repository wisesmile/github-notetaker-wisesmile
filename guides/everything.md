* Imperative
- how to do it
- step by step - take number, loop
- walk into a restaurant example
- walk in - pull out the chair - read the menu - motion to the waiter

* Declarative code
- what to do
- for example using the reduce function
- the reduce function is an abstraction over the loop
- much more readable
- walk in say we need a table for two and the waiter takes over

* Side effects
- in imperative it's more up to you to keep track of things

Composition
program your brain in terms of components
start thinking about how you break something down into components
Compose larger compoents of smaller components

* The react meme
- Focused
- Independent
- Reusuable
- Small
- Testable

* React
- It's just javascript

* React & JQuery
- JQuery the state is in the dom
- React, we take the state outside of the DOM and then rendered for the DOM


* Webpack
- a way of bundling your work
- a way of transforming js and run transformations to get it into a single file

* Bable
- allows for transformations on the js
- jsx is must be converted through the use of babel using the loader

props are to components what arguments are to functions.
the code that gets returned from our render method is a representation of what the real DOM should look like.

f(d)=V. A Function takes in some Data and returns a View.

Array.prototype.map
- creates a new array,
- calls our callback function on each item in the array,
- and fills the new array with the result of calling the callback function on each item.

* Stateless Functional Components
- allows the code above to be written as normal functions

* Functional Programming
- Pure functions always return the same result given the same arguments.
- Pure function's execution doesn't depend on the state of the application.
- Pure functions don't modify the variables outside of their scope.
- Abide by the rules and it minimizes side effects

* Pure Functions  
- evaluate same result
- doesn’t modify outside of scope
- minimizes side effects
- react the flow is fn(d)=v  take a function give it data and it returns a view
- pure functions - take in a few props and render a UI
- doesnt contain other function invocations

- easy to test
- easy to reuse
- the render method is a pure function

this.props.children is an array of components rather than just a single component,
since there are multiple components nested.

If you're using React correctly, you're going to notice you have a lot of
components that simply take in some data via props and output some UI

The reason for this is because a really great paradigm to get used to is
separating your components into container components and presentational
components, with presentational components optionally taking in some data
and rendering a view

Notice React passes props to your function as the first argument to the function.
This is a lot cleaner and makes creating React components more natural since
you're literally just making a function. It's a good idea to try to use as
many Stateless Functional Components as possible because then you have a
good separation of presentational components vs other components.
