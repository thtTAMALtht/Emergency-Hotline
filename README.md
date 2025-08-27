# Q&A

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById -> gets one element by its unique Id.
getElementsByClassName -> gets a collection of elements by class name.
querySelector -> returns the first element that matches a CSS selector.
querySelectorAll -> returns all elements that matches a CSS selector.


2.How do you create and insert a new element into the DOM?

Answer:
step1: First use document.createElement() to create a new element.
step2: Then use a method like appendChild() or append() to insert the element into the DOM.


3.What is Event Bubbling and how does it work?

Answer:
When we click on a chid element in the DOM,that event doesn't stay only on the child element.It bubbles up through its parent elements all the way to the root of the DOM tree. This is called event bubbling.We can use  
event.stopPropagation() to stop the event from bubbling.


4.What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where we add an event listener to a parent element and use event bubbling to handle events from its child elements.Event delegation is useful because it makes our code simpler,faster and more efficient.


5.What is the difference between preventDefault() and stopPropagation() methods?

Answer: When we click a button,the page reloads by itself.preventDefault() stops the page from reloading.
stopPropagation() stops the event from going to the parent elements in the DOM.