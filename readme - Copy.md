1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: The four type selectors are used to select an element in the DOM in JavaScript.
=> getElementById is a unique element selector.
=> getElementsByClassName is a collection of element with same class name.representing in a array form.
=> querySelector select the frist element of given class name.
=> querySwlwctorAll select total element with class name, tag name or valid css. It is return nodelist and more flexible then getElementsByClassName. 

2. How do you **create and insert a new element into the DOM**?
Answer: Usaully I use this methods to create element in DOM
document.createElement("p"); it creates a paragraph tag.
I know this two methods for inserting an element in DOM
parentDiv.appendChild(newDiv) to add the new element as the last child of a parent element.
parentDiv.append(newDiv) it creats a new div inside parent div. Usually i use it.

3. What is **Event Bubbling** and how does it work?

4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?