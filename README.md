# Q&A

## 1️⃣ What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

**Answer:**

- `getElementById` → Gets **one** element by its **unique ID**.
- `getElementsByClassName` → Gets a **collection of elements** with the specified **class name**.
- `querySelector` → Returns the **first element** that matches a **CSS selector**.
- `querySelectorAll` → Returns **all elements** that match a **CSS selector**.

---

## 2️⃣ How do you create and insert a new element into the DOM?

**Answer:**

1. Use `document.createElement()` to **create** a new element.
2. Use methods like `appendChild()` or `append()` to **insert** the element into the DOM.

---

## 3️⃣ What is Event Bubbling and how does it work?

**Answer:**

When we click on a **child element** in the DOM, the event doesn't stay only on the child — it **bubbles up** through its parent elements all the way to the root of the DOM tree. This is called **event bubbling**.

Use `event.stopPropagation()` to **stop the event** from bubbling up.

---

## 4️⃣ What is Event Delegation in JavaScript? Why is it useful?

**Answer:**

**Event Delegation** is a technique where we add an event listener to a **parent element** and use **event bubbling** to handle events from its **child elements**.

It is useful because it makes our code:
- **Simpler**
- **Faster**
- **More efficient**

---

## 5️⃣ What is the difference between `preventDefault()` and `stopPropagation()` methods?

**Answer:**

- `preventDefault()` → **Stops the browser’s default behavior**, such as reloading a page when a button is clicked.
- `stopPropagation()` → **Stops the event** from moving up to **parent elements** in the DOM tree.

---