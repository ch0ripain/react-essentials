<h1 align='center'> 🚀 A Quick Introduction to React Essentials 🚀</h1>

## 🧩 Components 🧩
A component is a standard JavaScript function that starts with an uppercase letter and returns renderable content. Components are reusable and customizable, making it easier to build complex UIs.

```javascript
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <Footer />
    </div>
  );
}
```
> [!NOTE]
> A component is a JavaScript function that must return a single renderable element. To return multiple elements, wrap them in a parent element like a div or use a React Fragment (<> </>)

## 💻 JSX 💻
JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It enables you to include standard HTML elements, behaviors, and JavaScript expressions using curly braces {}. JSX also supports conditional rendering and the use of functions like .map() to create dynamic user interfaces, making it easier to combine markup with logic seamlessly.
> [!NOTE]
> In many projects, you may encounter JSX code outside of .jsx files, which is normal. Ultimately, all your code is transpiled to JavaScript that browsers can understand, ensuring compatibility across different environments.

```javascript
export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.length > 0 && CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
```

## 🎛️ Props 🎛️
Props (short for properties) act as parameters in our components. They allow you to pass data from one component to another. You can access prop values using props.valueName, destructuring like { valueProperty }, or by using the spread operator to collect all remaining props.
> [!NOTE]
> Props in React are immutable, meaning they cannot be changed by the component that receives them. This immutability promotes predictable behavior and encourages reusable components. If a component needs to update its output based on user interactions, it should manage its own state instead.

```javascript
import { CORE_CONCEPTS } from "../data";
export default function CoreConcepts() {
...
          <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
...
}

export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```

## 🔄 State 🔄
State is a React hook that enables components to manage and display dynamic changes. You first define the initial state based on your requirements. To update the state, you utilize a function provided by the useState hook, allowing the component to re-render with new data.
> [!NOTE]
> State is local to the component that defines it, triggering re-renders to display updated data. To share state between components, lift it to a common ancestor and pass it as a prop. Always utilize the updater function when modifying state based on its previous value to maintain accuracy.

```javascript
import { useState } from 'react';

// Example of an initial state, which can be a string, number, or boolean.
const INITIAL_STATE = 'string' | 1000 | true | false; 
const [state, setState] = useState(INITIAL_STATE);

// Function to handle state changes.
function handleChange(newStateValue) {
    setState(newStateValue);
}

// Updating state based on the previous state value.
setState(prevState => !prevState); // Toggle boolean: true => false

setState(prevState => {
    return {
        ...prevState, // Preserve existing data
        propertyName: newValue // Update the specific property
    };
});

// Note: The spread operator (...) creates a shallow copy (level 1). 
// For nested arrays or objects, you must copy each level into a new variable.
setState(prevArray => {
    const newArray = [...prevArray.map(el => [...el])];
    // Continue to map or modify newArray as needed.
});
```

---
<p align="center">🐸 This project is a practice exercise I learned from the <a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=ST7MT110524'>Academind's React Course</a> 🐸</p>
