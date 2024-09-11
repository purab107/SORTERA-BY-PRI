import React from 'react';
import './styling/Bubble.css'; // Assume you have a CSS file for styling
import Navbar from '../components/Navbar';
import BubbleSortCode from './snippets/BubbleSortCode';

const Insertion = () => {
  return (
    <>
    
      <div className='hero-section'>
        <h1 className='page-heading'>Insertion Sort Algorithm</h1>
        <p>Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.</p>
        <p>Insertion sort works similarly as we sort cards in our hand in a card game.</p>
        <p>We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place.</p>
        <p>A similar approach is used by insertion sort.</p>
        <hr></hr>
        <h2 className='second-heading'>Working of Insertion Sort</h2>
        <p>Suppose we are trying to sort the elements in ascending order.</p>
        <div className='bar-container'>
          <div className='bar-row'>
            <div className='bar-content'>19</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>13</div>
          </div>
          <div className='bar-container-footer'>
            <p>Initial Array</p>
          </div>
          </div>
        <h3 className='working-heading'>1. The first element in the array is assumed to be sorted. </h3>
        <p>Take the second element and store it separately in key.</p>
        <p>Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element.</p>

        <div className='bar-container'>
          <p className='box-heading'>step = 1</p>
          <div className='bar-row'>
            <div className='bar-content'>19</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>13</div>
          </div>
          <h3>key = 15</h3>
          <div className='bar-row'>
            <div className='bar-content'>19</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>13</div>
          </div>
          <div className='arrow-row2'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>13</div>
          </div>
          <div className='bar-container-footer'>
            <p>If the first element is greater than key, then key is placed in front of the first element.</p>
          </div>
        </div>

          <h3 className='working-heading'>2. Now, the first two elements are sorted. </h3>
          <p>Take the third element and compare it with the elements on the left of it.</p>
          <p>Placed it just behind the element smaller than it. </p>
          <p>If there is no element smaller than it, then place it at the beginning of the array.</p>
        <div className='bar-container'>
        <p className='box-heading'>step = 2</p>
          <div className='bar-row'>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>13</div>
          </div>
          <h3>Key = 11</h3>
          <div className='bar-row'>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>13</div>
          </div>
          <div className='arrow-row2'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>15</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>13</div>
          </div>
          <div className='arrow-row3'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>13</div>
          </div>
          <div className='bar-container-footer'>
            <p>Place 1 at the beginning</p>
          </div>
        </div>

        <h3 className='working-heading'>3. Similarly, place every unsorted element at its correct position.</h3>
        <div className='bar-container'>
        <p className='box-heading'>step = 3</p>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>13</div>
          </div>
          <h3>Key = 14</h3>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>13</div>
          </div>
          <div className='arrow-row2'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>13</div>
          </div>
          <div className='arrow-row3'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>13</div>
          </div>
          <div className='bar-container-footer'>
            <p>Place 4 behind 1</p>
          </div>
        </div>

        <br></br>

        <div className='bar-container'>
        <p className='box-heading'>step = 4</p>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>13</div>
          </div>
          <h3>Key = 13</h3>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
            <div className='bar-content'>19</div>
          </div>
          <div className='arrow-row2'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
          </div>
          <div className='arrow-row3'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
          </div>
          <div className='arrow-row3'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>11</div>
            <div className='bar-content'>13</div>
            <div className='bar-content'>14</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>19</div>
          </div>
          <div className='bar-container-footer'>
            <p>Place 3 behind 1 and the array is sorted</p>
          </div>
        </div>
        <br></br>
        <h2>Insertion Sort Code in Python, Java and C/C++</h2>
        <BubbleSortCode />

        <div class="complexity-title">Insertion Sort Complexity</div>
        <table class="complexity-table">
          <tr>
            <th colspan="2">Time Complexity</th>
          </tr>
          <tr>
            <td>Best</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Worst</td>
            <td>O(n<sup>2</sup>)</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>O(n<sup>2</sup>)</td>
          </tr>
          <tr>
            <td>Space Complexity</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Stability</td>
            <td>Yes</td>
          </tr>
        </table>

        <div className='complexity-info'>
          <h2>1. Time Complexities</h2>
          <ul>
            <li>
              <h3>Worst Case Complexity : <span className='complex-box'>O(n<sup>2</sup>)</span></h3>
              <p>If we want to sort in ascending order and the array is in descending order then the worst case occurs.</p>
            </li>
            <li>
              <h3>Best Case Complexity : <span className='complex-box'>O(n<sup>2</sup>)</span></h3>
              <p>If the array is already sorted, then there is no need for sorting.</p>
            </li>
            <li>
              <h3>Average Case Complexity : <span className='complex-box'>O(n<sup>2</sup>)</span></h3>
              <p>It occurs when the elements of the array are in jumbled order (neither ascending nor descending).</p>
            </li>
          </ul>

          <h2>2. Space Complexity</h2>
          <ul>
            <li>
              <p>Space complexity is <span className='complex-box'>O(1)</span> because an extra variable is used for swapping.</p>
            </li>
            <li>
              <p>In the <span>optimized bubble sort algorithm</span>, two extra variables are used. Hence, the space complexity will be <span className='complex-box'>O(2)</span>.</p>
            </li>
          </ul>
        </div>

        <br></br>
        <hr></hr>

        <div className="explain-bubble-sort-sortera">
  <h1>How Sortera Uses Insertion Sort</h1>
  <p>
    The Insertion Sort algorithm is a simple, in-place sorting technique that builds the sorted list
    one element at a time. It works by repeatedly picking the next element from the unsorted portion
    and inserting it into its correct position in the sorted portion of the array. Here's how Sortera
    visualizes this sorting process:
  </p>

  <h2>1. Starting the Insertion Sort Algorithm</h2>
  <p>
    The function begins by initializing the start time to measure the duration of the sorting.
  </p>
  <pre>
    <code>
{`// Initialize Insertion Sort and measure start time
async function InsertionSort() {
    console.log("Starting Insertion Sort");
    let startTime = performance.now(); 
`}
    </code>
  </pre>

  <h2>2. Outer Loop: Iterating Over Elements</h2>
  <p>
    The outer loop starts from the second element (index 1) and goes through each element of the array,
    considering each as the "key" to be inserted in the sorted part of the array.
  </p>
  <pre>
    <code>{`for (let i = 1; i < arraySize; i++) {`}</code>
  </pre>

  <h2>3. Highlighting the Key Element</h2>
  <p>
    The current element (the "key") is highlighted in yellow to indicate it is the value being inserted
    into the sorted portion.
  </p>
  <pre>
    <code>{`let key = barHeights[i];
let j = i - 1;
animateArrayBars(barElements[i], barHeights[i], '#FFFF00'); // Yellow for key`}</code>
  </pre>

  <h2>4. Inner Loop: Shifting Elements</h2>
  <p>
    The inner loop compares the key element with the sorted elements to its left, shifting them one 
    position to the right until the correct position for the key is found.
  </p>
  <pre>
    <code>{`while (j >= 0 && barHeights[j] > key) { 
    console.log(\`Shifting index \${j}\`);
    animateArrayBars(barElements[j], barHeights[j], '#FFFF00'); // Yellow for comparison
    animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FF0000'); // Red for shift

    barHeights[j + 1] = barHeights[j]; 
    animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FF0000');
    await new Promise(resolve => setTimeout(resolve, delayTime));
    j--; 
}`}</code>
  </pre>

  <h2>5. Inserting the Key Element</h2>
  <p>
    Once the correct position is found, the key element is inserted, and the animation highlights
    this insertion in red.
  </p>
  <pre>
    <code>{`barHeights[j + 1] = key;
animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FF0000'); // Red for insertion
await new Promise(resolve => setTimeout(resolve, delayTime));`}</code>
  </pre>

  <h2>6. Marking Sorted Elements</h2>
  <p>
    After each pass, the sorted portion of the array is highlighted in green to indicate which elements
    have been correctly positioned.
  </p>
  <pre>
    <code>{`// Restore color for sorted portion
for (let k = 0; k <= i; k++) { 
    animateArrayBars(barElements[k], barHeights[k], '#4CAF50'); // Green for sorted
}`}</code>
  </pre>

  <h2>7. Finalizing the Sort</h2>
  <p>
    When all elements are sorted, the entire array is highlighted in green. The total time taken
    for the sort is calculated and displayed.
  </p>
  <pre>
    <code>{`let endTime = performance.now(); // End time
let timeTaken = endTime - startTime;
setTimeout(() => {
    showAlgorithmDetails("Insertion Sort", timeTaken, "O(n²)", "O(1)");
}, animationDelay);
enableButtons();
}`}</code>
  </pre>

  <h2>8. Conclusion</h2>
  <p>
    The Insertion Sort algorithm visualizes the sorting process in Sortera by highlighting the key 
    element, shifts, and sorted portions step-by-step. The performance metrics are also calculated
    and displayed at the end.
  </p>

  <div className="note">
    <p>
      <strong>Note:</strong> The color codes help users understand the sorting process:
      yellow for the key element, red for shifts and insertion, and green for sorted elements.
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

export default Insertion;
