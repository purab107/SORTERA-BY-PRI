import React from 'react';
import './styling/Bubble.css'; // Assume you have a CSS file for styling
import Navbar from '../components/Navbar';
import BubbleSortCode from './snippets/BubbleSortCode';

const Selection = () => {
  return (
    <>
      
      <div className='hero-section'>
        <h1 className='page-heading'>Selection Sort Algorithm</h1>
        <p>Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.</p>
        <hr></hr>
        <h2 className='second-heading'>Working of Selection Sort</h2>
        <p>Suppose we are trying to sort the elements in ascending order.</p>
        <h3 className='working-heading'>1. Set the first element as minimum.</h3>
        <div className='bar-container'>
          <div className='bar-row'>
            <div className='bar-content'>20</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
          </div>
          <div className='bar-container-footer'>
            <p>Select first element as minimum</p>
          </div>
          </div>

          <h3 className='working-heading'>2. Compare minimum with the second element. </h3>
          <p>If the second element is smaller than minimum, assign the second element as minimum.</p>
          <p>Compare minimum with the third element.</p>
          <p>Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing.</p>
          <p>The process goes on until the last element</p>
        <div className='bar-container'>
          <div className='bar-row'>
            <div className='bar-content'>20</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10 </div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
          </div>
          <div className='arrow-row1'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>20</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
          </div>
          <div className='arrow-row2'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>20</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
          </div>
          <div className='arrow-row3'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>45</div>
            <div className='bar-content'>-9</div>
          </div>
          <div className='arrow-row4'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='bar-container-footer'>
            <p>Compare minimum with the remaining elements</p>
          </div>
        </div>

        <h3 className='working-heading'>3. After each iteration, minimum is placed in the front of the unsorted list.</h3>
        <div className='bar-container'>
          <div className='bar-row'>
            <div className='bar-content'>2</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>20</div>
          </div>
          <div className='arrow-row5'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span>swapping</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-container-footer'>
            <p>Swap the first with minimum</p>
          </div>
        </div>

        <h3 className='working-heading'>4. For each iteration, indexing starts from the first unsorted element.</h3>
        <p>Step 1 to 3 are repeated until all the elements are placed at their correct positions.</p>
        <div className='bar-container'>
          <p className='box-heading'>step = 0</p>
          <div className='bar-row'>
            <p>i = 0</p>
            <div className='bar-content'>20</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
            <p>min value at index 1</p>
          </div>
          <div className='arrow-row1'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 1</p>
            <div className='bar-content'>20</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
            <p>min value at index 2</p>
          </div>
          <div className='arrow-row2'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 2</p>
            <div className='bar-content'>20</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
            <p>min value at index 2</p>
          </div>
          <div className='arrow-row3'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 3</p>
            <div className='bar-content'>20</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
            <p>min value at index 4</p>
          </div>
          <div className='arrow-row4'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>2</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>20</div>
          </div>
          <div className='bar-container-footer'>
            <p>The first iteration</p>
          </div>
        </div>

        <br></br>

        <div className='bar-container'>
          <p className='box-heading'>step = 1</p>
          <div className='bar-row'>
            <p>i = 0</p>
            <div className='bar-content'>2</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>20</div>
            <p>min value at index 2</p>
          </div>
          <div className='arrow-row1'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 1</p>
            <div className='bar-content'>2</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>20</div>
            <p>min value at index 2</p>
          </div>
          <div className='arrow-row2'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 2</p>
            <div className='bar-content'>2</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>20</div>
            <p>min value at index 2</p>
          </div>
          <div className='arrow-row3'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 3</p>
            <div className='bar-content'>20</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
          </div>
          <div className='bar-container-footer'>
            <p>The Second Iteration</p>
          </div>
        </div>

        <br></br>

        <div className='bar-container'>
          <p className='box-heading'>step = 2</p>
          <div className='bar-row'>
            <p>i = 0</p>
            <div className='bar-content'>2</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>20</div>
            <p>min value at index 2</p>
          </div>
          <div className='arrow-row1'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='arrow-row2'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 2</p>
            <div className='bar-content'>2</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>20</div>
            <p>min value at index 2</p>
          </div>
          <div className='arrow-row3'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>2</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>2</div>
          </div>
          <div className='bar-container-footer'>
            <p>The Third Iteration</p>
          </div>
        </div>

        <div className='bar-container'>
          <p className='box-heading'>step = 3</p>
          <div className='bar-row'>
            <p>i = 0</p>
            <div className='bar-content'>2</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>20</div>
            <p>min value at index 3</p>
          </div>
          <div className='arrow-row1'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>2</div>
            <div className='bar-content'>10</div>
            <div className='bar-content'>12</div>
            <div className='bar-content'>15</div>
            <div className='bar-content'>20</div>
          </div>
          <div className='bar-container-footer'>
            <p>The Fourth Iteration</p>
          </div>
        </div>

        <h2>Selection Sort Code in Python, Java and C/C++</h2>
        <BubbleSortCode />

        <div class="complexity-title">Selection Sort Complexity</div>
        <table class="complexity-table">
          <tr>
            <th colspan="2">Time Complexity</th>
          </tr>
          <tr>
            <td>Best</td>
            <td>O(n<sup>2</sup>)</td>
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
            <td>No</td>
          </tr>
        </table>

        <div class="complexity-title">Complexity in Detail</div>
        <table class="complexity-table">
          <tr>
            <th>Cycle</th>
            <th>Number of Comparisons</th>
          </tr>
          <tr>
            <td>1st</td>
            <td>(n-1)</td>
          </tr>
          <tr>
            <td>2nd</td>
            <td>(n-2)</td>
          </tr>
          <tr>
            <td>3rd</td>
            <td>(n-3)</td>
          </tr>
          <tr>
            <td>.......</td>
            <td>.......</td>
          </tr>
          <tr>
            <td>Last</td>
            <td>1</td>
          </tr>
        </table>

        <p>Hence, the number of comparisons is</p>

        <pre><code>(n-1) + (n-2) + (n-3) +.....+ 1 = n(n-1)/2</code></pre>

        <p>which nearly equals to <span className='complex-box'>n<sup>2</sup></span></p>
        <p>Hence Complexity : <span className='complex-box'>O(n<sup>2</sup>)</span></p>
        <p>Also, if we can analyze the complexity by simply observing the number of loops. There are 2 loops so the complexity is <span>n*n = n<sup>2</sup></span></p>

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
  <h1>How Sortera Uses Selection Sort</h1>
  <p>
    The Selection Sort algorithm is an in-place comparison sorting algorithm that divides
    the input list into two parts: the sublist of items already sorted and the sublist of items
    remaining to be sorted. Here's how Sortera visualizes this sorting process:
  </p>

  <h2>1. Starting the Selection Sort Algorithm</h2>
  <p>
    The function begins by initializing the start time to measure how long the sorting takes.
  </p>
  <pre>
    <code>
      {`// Initialize the Selection Sort and measure start time
async function SelectionSort() {
    console.log("Starting Selection Sort");
    let startTime = performance.now(); 
`}
    </code>
  </pre>

  <h2>2. Outer Loop: Finding the Minimum Element</h2>
  <p>
    The outer loop iterates through the array, treating each element as the current minimum.
  </p>
  <pre>
    <code>{`for (let i = 0; i < arraySize - 1; i++) {`}</code>
  </pre>

  <h2>3. Highlighting the Minimum Element</h2>
  <p>
    The minimum element in each pass is highlighted in yellow to visually indicate its
    consideration as the smallest element.
  </p>
  <pre>
    <code>{`let minIndex = i; 
animateArrayBars(barElements[minIndex], barHeights[minIndex], '#FFFF00'); // Yellow for minimum`}</code>
  </pre>

  <h2>4. Inner Loop: Comparing Elements</h2>
  <p>
    The inner loop compares the current minimum element with the rest of the unsorted
    portion to find the smallest element.
  </p>
  <pre>
    <code>{`for (let j = i + 1; j < arraySize; j++) { 
    // Highlight comparison
    animateArrayBars(barElements[j], barHeights[j], '#FFFF00');
    await new Promise(resolve => setTimeout(resolve, delayTime));
}`}</code>
  </pre>

  <h2>5. Updating the Minimum Index</h2>
  <p>
    If a smaller element is found, the minimum index is updated, and the new minimum is highlighted.
  </p>
  <pre>
    <code>{`if (barHeights[j] < barHeights[minIndex]) { 
    animateArrayBars(barElements[minIndex], barHeights[minIndex], '#673AB7'); // Restore color
    minIndex = j; 
    animateArrayBars(barElements[minIndex], barHeights[minIndex], '#FFFF00'); // Highlight new min
}`}</code>
  </pre>

  <h2>6. Swapping Elements</h2>
  <p>
    Once the smallest element is found in each pass, it is swapped with the first unsorted element
    and highlighted in red to indicate the swap.
  </p>
  <pre>
    <code>{`if (minIndex !== i) { 
    [barHeights[i], barHeights[minIndex]] = [barHeights[minIndex], barHeights[i]]; // Swap
    animateArrayBars(barElements[i], barHeights[i], '#FF0000'); // Red for swap
    animateArrayBars(barElements[minIndex], barHeights[minIndex], '#FF0000');
    await new Promise(resolve => setTimeout(resolve, delayTime));
}`}</code>
  </pre>

  <h2>7. Marking Sorted Elements</h2>
  <p>
    After each pass, the sorted element is marked in green to show its correct position in the array.
  </p>
  <pre>
    <code>{`animateArrayBars(barElements[i], barHeights[i], '#4CAF50'); // Green for sorted`}</code>
  </pre>

  <h2>8. Finalizing the Sort</h2>
  <p>
    When all elements are sorted, the entire array is highlighted in green. The total time taken
    for the sort is calculated and displayed.
  </p>
  <pre>
    <code>{`animateArrayBars(barElements[arraySize - 1], barHeights[arraySize - 1], '#4CAF50');

let endTime = performance.now(); // End time
let timeTaken = endTime - startTime;
setTimeout(() => {
    showAlgorithmDetails("Selection Sort", timeTaken, "O(n²)", "O(1)");
}, animationDelay);
enableButtons();
}`}</code>
  </pre>

  <h2>9. Conclusion</h2>
  <p>
    The Selection Sort algorithm visually sorts the array in Sortera by highlighting comparisons, 
    swaps, and sorted positions. The performance metrics are also calculated and displayed at the end.
  </p>

  <div className="note">
    <p>
      <strong>Note:</strong> The color codes help users to understand the sorting process step-by-step:
      yellow for the current minimum, red for swaps, purple for unsorted, and green for sorted elements.
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

export default Selection;
