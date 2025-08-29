1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**Answer**: The four type selectors are used to select an element in the DOM in JavaScript.
=> getElementById is a unique element selector.
=> getElementsByClassName is a collection of element with same class name.representing in a array form.
=> querySelector select the frist element of given class name.
=> querySwlwctorAll select total element with class name, tag name or valid css. It is return nodelist and more flexible then getElementsByClassName. 

## ============================================================================

2. How do you **create and insert a new element into the DOM**?
**Answer**: Usaully I use this methods to create element in DOM.
    1.document.createElement("p"); it creates a paragraph tag.
I know this two methods for inserting an element in DOM
    2.parentDiv.appendChild(newDiv) to add the new element as the last child of a parent element.
    3.parentDiv.append(newDiv) it creats a new div inside parent div. Usually i use it.

## ============================================================================

3. What is **Event Bubbling** and how does it work?
**Answer**: Event Bubbling: When the event propagate from child element to parent element then it is called Event Bubbling. 

## ============================================================================

4. What is **Event Delegation** in JavaScript? Why is it useful?
**Answer**: Event Delegation: When we add an event to parent selector then it works to its indivisual child element or only one addEventListener for multiple indivisual element and also applicable this event when adding new element is called Event Delegation.

Usefulness of Event Delegation:
It is very usefull because we do not need to write multiple event so less memory and less code is needed which incrase the performence of application. Besides for new element do not need to write extra code it automatically dynamic.

## ============================================================================

5. What is the difference between **preventDefault() and stopPropagation()** methods?
**Answer**: preventDefault() and stopPropagation() are two distinct methods available on the Event, used to control behavior in browsers.

**preventDefault():** preventDefault() deals with the default action of an event and prevents the default values of browser.
**stopPropagation()**: stopPropagation() deals with the propagation of an event in DOM and it prevents propagation up to spacefied element inside (child to parent element)


## ================================END====================================##