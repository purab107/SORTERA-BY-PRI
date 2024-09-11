import React from 'react';
import './styling/Bubble.css'; // Assume you have a CSS file for styling
import Navbar from '../components/Navbar';
import BubbleSortCode from './snippets/BubbleSortCode';

const Bubble = () => {
  return (
    <>
      
      <div className='hero-section'>
        <h1 className='page-heading'>Bubble Sort Algorithm</h1>
        <p>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order.</p>
        <p>Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
        <hr></hr>
        <h2 className='second-heading'>Working of Bubble Sort</h2>
        <p>Suppose we are trying to sort the elements in ascending order.</p>
        <h3 className='working-heading'>1. First Iteration (Compare and Swap)</h3>
        <ol>
          <li>Starting from the first index, compare the first and the second elements.</li>
          <li>If the first element is greater than the second element, they are swapped.</li>
          <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
          <li>The above process goes on until the last element.</li>
        </ol>

        <div className='bar-container'>
          <p className='box-heading'>step = 0</p>
          <div className='bar-row'>
            <p>i = 0</p>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>45</div>
            <div className='bar-content'> 0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>-9</div>
          </div>
          <div className='arrow-row1'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 1</p>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>45</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>-9</div>
          </div>
          <div className='arrow-row2'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 2</p>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>45</div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>-9</div>
          </div>
          <div className='arrow-row3'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 3</p>
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
            <p>Compare the Adjacent Elements</p>
          </div>
        </div>

        <h3 className='working-heading'>2. Remaining Iteration</h3>
        <p>The same process goes on for the remaining iterations.</p>
        <p>After each iteration, the largest element among the unsorted elements is placed at the end.</p>

        <div className='bar-container'>
          <p className='box-heading'>step = 1</p>
          <div className='bar-row'>
            <p>i = 0</p>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='arrow-row5'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 1</p>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='arrow-row6'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 2</p>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='arrow-row7'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='bar-container-footer'>
            <p>Put The Largest Element At The End</p>
          </div>
        </div>

        <p>In each iteration, the comparison takes place up to the last unsorted element.</p>

        <div className='bar-container'>
          <p className='box-heading'>step = 2</p>
          <div className='bar-row'>
            <p>i = 0</p>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='arrow-row8'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <p>i = 1</p>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='arrow-row9'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='bar-container-footer'>
            <p>Compare The Adjacent Elements</p>
          </div>
        </div>

        <p>The array is sorted when all the unsorted elements are placed at their correct positions.</p>

        <div className='bar-container'>
          <p className='box-heading'>step = 3</p>
          <div className='bar-row'>
            <p>i = 0</p>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='arrow-row10'>
            <span className='swapping-arrow-front'>&#8628;</span>
            <span className='swapping-arrow-back'>&#8628;</span>
          </div>
          <div className='bar-row'>
            <div className='bar-content'>-9</div>
            <div className='bar-content'>-2</div>
            <div className='bar-content'>0 </div>
            <div className='bar-content'>11</div>
            <div className='bar-content'>45</div>
          </div>
          <div className='bar-container-footer'>
            <p>The Array Is Sorted If All Elements Are Kept In The Right Order</p>
          </div>
        </div>
        <h2>Bubble Sort Code in Python, Java and C/C++</h2>
        <BubbleSortCode />

        <div class="complexity-title">Bubble Sort Complexity</div>
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

        <div class="complexity-title">Complexity in Detail</div>
        <p>Bubble Sort compares the adjacent elements.</p>
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
        <p>Also, if we observe the code, bubble sort requires two loops. Hence, the complexity is <span>n*n = n<sup>2</sup></span></p>

        <div className='complexity-info'>
        <h2>1. Time Complexities</h2>
        <ul>
          <li>
            <h3>Worst Case Complexity : <span className='complex-box'>O(n<sup>2</sup>)</span></h3>
            <p>If we want to sort in ascending order and the array is in descending order then the worst case occurs.</p>
          </li>
          <li>
            <h3>Best Case Complexity : <span className='complex-box'>O(n)</span></h3>
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
          <h1>How Sortera Uses Bubble Sort</h1>
          <p>
            The Bubble Sort algorithm is a simple yet effective way to sort an array
            by repeatedly stepping through the list, comparing adjacent elements,
            and swapping them if they are in the wrong order. Here's how Sortera
            visualizes this sorting process:
          </p>

          <h2>1. Starting the Bubble Sort Algorithm</h2>
          <p>
            The function begins by initializing the start time, which helps measure
            how long the sorting takes.
          </p>
          <pre>
            <code>
              {`// Initialize the Bubble Sort and measure start time
async function BubbleSort() {
    console.log("Starting Bubble Sort");
    let startTime = performance.now(); 
`}
            </code>
          </pre>

          <h2>2. Outer Loop: Number of Passes</h2>
          <p>
            The outer loop runs from the first element to the last, ensuring that
            each pass correctly positions the next largest element.
          </p>
          <pre>
            <code>{`for (let i = 0; i < arraySize - 1; i++) {`}</code>
          </pre>

          <h2>3. Inner Loop: Comparing Elements</h2>
          <p>
            The inner loop compares adjacent elements. If the current element is
            larger than the next one, a swap is performed.
          </p>
          <pre>
            <code>{`for (let j = 0; j < arraySize - i - 1; j++) {
    // Highlight elements being compared
    animateArrayBars(barElements[j], barHeights[j], '#FFFF00'); // Yellow
    animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FFFF00');
    await new Promise(resolve => setTimeout(resolve, delayTime));
}`}</code>
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

export default Bubble;
