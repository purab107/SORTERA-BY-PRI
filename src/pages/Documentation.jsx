import React from 'react';
import './styling/Bubble.css'; // Assume you have a CSS file for styling
import Navbar from '../components/Navbar';
import BubbleSortCode from './snippets/BubbleSortCode';

const Documentation = () => {
  return (
    <>
 
      <div className='hero-section'>
        <h1 className='page-heading'>Sortera : Sorting Operations and Real-Time Efficient Rendering and Analysis</h1>
        <p>SORTERA is a sophisticated web application developed to enhance the understanding of sorting algorithms through interactive visualizations and real-time analysis.</p>
        <p>As sorting algorithms are foundational to computer science and software engineering, SORTERA seeks to provide an intuitive platform for users to grasp the underlying mechanics and efficiency of these algorithms.</p>
        <p>This introduction explores the purpose and scope of SORTERA, its key features, and the technological foundation that supports its functionality.</p>
        <hr></hr>
        <div className="explain-bubble-sort-sortera">
          <h1>Code Explaination</h1>

          <h2>1.  Element Selection and Variable Initialization</h2>
          <p>
          The first part of the code retrieves HTML elements and initializes key variables:
          </p>
          <pre>
            <code>
              {`const arrayContainer = document.getElementById('arrayContainer');
const arraySizeSlider = document.getElementById('arraySize');
const arraySizeValue = document.getElementById('arraySizeValue');
const animationSpeedSlider = document.getElementById('animationSpeed');
const animationSpeedValue = document.getElementById('animationSpeedValue');
const generateArrayButton = document.getElementById('generateArrayButton');
const algorithmDropdown = document.getElementById('algorithmDropdown'); 
`}
            </code>
          </pre>

          <p>These lines use document.getElementById to grab elements from the DOM. The elements include:</p>
          <ul>
  <li><strong>arrayContainer</strong>: Container where array bars will be displayed.</li>
  <li><strong>arraySizeSlider</strong>: Slider input to control the size of the array.</li>
  <li><strong>arraySizeValue</strong>: Displays the value of the selected array size.</li>
  <li><strong>animationSpeedSlider</strong>: Slider input to control the animation speed.</li>
  <li><strong>animationSpeedValue</strong>: Displays the value of the selected animation speed.</li>
  <li><strong>generateArrayButton</strong>: Button to generate a new array.</li>
  <li><strong>algorithmDropdown</strong>: Dropdown menu for selecting a sorting algorithm.</li>
</ul>

          <h2>2. Variable Initialization</h2>
          <p>
          Additional variables are initialized to handle the array size, speed, bar heights, and animation delays:
          </p>
          <pre>
            <code>{`flet arraySize = arraySizeSlider.value;
let speed = 1000;
let barHeights = [];
let barElements = [];
let spacingBetweenBars;
let delayTime = 10000 / (Math.floor(arraySize / 10) * speed);
let animationDelay = 0;`}</code>
          </pre>
          <ul>
  <li><strong>arraySize</strong> : Tracks the current size of the array.</li>
  <li><strong>speed</strong> : Sets the initial speed of the sorting animation.</li>
  <li><strong>barHeights</strong> : Stores the heights of each bar in the array.</li>
  <li><strong>barElements</strong> : Stores the array bar elements created in the DOM.</li>
  <li><strong>spacingBetweenBars</strong> : Determines the spacing between each bar.</li>
  <li><strong>delayTime</strong> : Controls the delay time for animations based on speed and array size.</li>
  <li><strong>animationDelay</strong> : Adds delays between animations.</li>
</ul>


          <h2>3.  Function: showAlgorithmDetails</h2>
          <p>
          Displays details about the currently selected sorting algorithm, including its name, time taken, and complexity:
          </p>
          <pre>
            <code>{`hello`}</code>
          </pre>

          <h2>4. Swapping Elements</h2>
          <p>
            If the current element is greater than the next, the elements are
            swapped, and their color is changed to red to indicate the swap
            visually.
          </p>
          <pre>
            <code>{`if (barHeights[j] > barHeights[j + 1]) {
    [barHeights[j], barHeights[j + 1]] = [barHeights[j + 1], barHeights[j]]; // Swap
    animateArrayBars(barElements[j], barHeights[j], '#FF0000'); // Red for swap
    animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FF0000');
    await new Promise(resolve => setTimeout(resolve, delayTime));
}`}</code>
          </pre>

          <h2>5. Restoring Colors</h2>
          <p>
            After comparing and swapping, the bar colors are restored to their
            original color.
          </p>
          <pre>
            <code>{`animateArrayBars(barElements[j], barHeights[j], '#673AB7'); // Original color
animateArrayBars(barElements[j + 1], barHeights[j + 1], '#673AB7');
`}</code>
          </pre>

          <h2>6. Marking Sorted Elements</h2>
          <p>
            At the end of each pass, the last sorted element is marked in green to
            indicate that it is in its correct position.
          </p>
          <pre>
            <code>{`animateArrayBars(barElements[arraySize - i - 1], barHeights[arraySize - i - 1], '#4CAF50'); // Green for sorted
`}</code>
          </pre>

          <h2>7. Finalizing the Sort</h2>
          <p>
            After all elements are sorted, the entire array is highlighted in green.
            The total time taken for the sort is then calculated and displayed.
          </p>
          <pre>
            <code>{`for (let i = 0; i < arraySize; i++) {
    animateArrayBars(barElements[i], barHeights[i], '#4CAF50');
}

let endTime = performance.now(); // End time
let timeTaken = endTime - startTime;
setTimeout(() => {
    showAlgorithmDetails("Bubble Sort", timeTaken, "O(n²)", "O(1)");
}, animationDelay);
enableButtons();
}`}</code>
          </pre>

          <h2>8. Conclusion</h2>
          <p>
            The Bubble Sort algorithm visually sorts the array in Sortera by
            changing colors to represent comparisons, swaps, and sorted positions,
            helping users easily follow the algorithm's steps. The performance is
            also calculated and displayed at the end.
          </p>

          <div className="note">
            <p>
              <strong>Note:</strong> The color codes help users to understand the
              sorting process step-by-step: yellow for comparison, red for swaps,
              purple for unsorted, and green for sorted elements.
            </p>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <button class="modern-button">Try Sortera Now</button>
      </div>
    </>
  );
};

export default Documentation;
