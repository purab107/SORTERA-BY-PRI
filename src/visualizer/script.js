console.log("hello");

const arrayContainer = document.getElementById('arrayContainer');
const arraySizeSlider = document.getElementById('arraySize');
const arraySizeValue = document.getElementById('arraySizeValue');
const animationSpeedSlider = document.getElementById('animationSpeed');
const animationSpeedValue = document.getElementById('animationSpeedValue');
const generateArrayButton = document.getElementById('generateArrayButton');
const algorithmDropdown = document.getElementById('algorithmDropdown');

let arraySize = arraySizeSlider.value;
let speed = 1000;
let barHeights = [];
let barElements = [];
let spacingBetweenBars;
let delayTime = 10000 / (Math.floor(arraySize / 10) * speed);
let animationDelay = 0;

function showAlgorithmDetails(name, timeTaken, timeComplexity, spaceComplexity) {
    document.getElementById('algorithmName').textContent = `Algorithm Name: ${name}`;
    document.getElementById('timeTaken').textContent = `Time Taken: ${timeTaken.toFixed(2)} ms`;
    document.getElementById('timeComplexity').textContent = `Time Complexity: ${timeComplexity}`;
    document.getElementById('spaceComplexity').textContent = `Space Complexity: ${spaceComplexity}`;

    const detailsElement = document.getElementById('algorithmDetails');

    setTimeout(() => {
        detailsElement.classList.add('show');
    }, 50);

    detailsElement.style.display = 'block';

}

generateArrayButton.addEventListener('click', generateArray);
arraySizeSlider.addEventListener('input', updateArraySize);
animationSpeedSlider.addEventListener('input', updateAnimationSpeed);
algorithmDropdown.addEventListener('change', runAlgorithm);

generateArrayButton.addEventListener('click', () => {
    generateArray();
    resetDropdown();
    const detailsElement = document.getElementById('algorithmDetails');
    detailsElement.style.display = 'none';
});

arraySizeSlider.addEventListener('input', () => {
    updateArraySize();
    resetDropdown();
    const detailsElement = document.getElementById('algorithmDetails');
    detailsElement.style.display = 'none';
});

animationSpeedSlider.addEventListener('input', updateAnimationSpeed);
algorithmDropdown.addEventListener('change', runAlgorithm);

function generateArray() {
    arrayContainer.innerHTML = "";
    barHeights = [];
    barElements = [];
    spacingBetweenBars = 0.1;

    for (let i = 0; i < arraySize; i++) {
        barHeights[i] = Math.floor(Math.random() * 101) + 10;
        barElements[i] = document.createElement("div");
        barElements[i].style = `margin: 0% ${spacingBetweenBars}%; background-color: #673AB7; width: ${(100 / arraySize) - (2 * spacingBetweenBars)}%; height: ${barHeights[i]}%;`;
        arrayContainer.appendChild(barElements[i]);
    }
}

function updateArraySize() {
    arraySize = arraySizeSlider.value;
    arraySizeValue.textContent = arraySize;
    generateArray();
}

function updateAnimationSpeed() {
    let arraySpeed = parseInt(animationSpeedSlider.value);
    animationSpeedValue.textContent = arraySpeed;

    switch (arraySpeed) {
        case 1: speed = 10000; break;
        case 2: speed = 1000; break;
        case 3: speed = 100; break;
        case 4: speed = 10; break;
        case 5: speed = 1; break; 
        default: speed = 1000; 
    }

    delayTime = 10000 / (Math.floor(arraySize / 10) * speed);
}

function runAlgorithm() {
    disableButtons();
    switch (algorithmDropdown.value) {
        case "bubbleSort": BubbleSort(); break;
        case "selectionSort": SelectionSort(); break;
        case "insertionSort": InsertionSort(); break;
        case "quickSort": QuickSort(); break;
        case "mergeSort": MergeSort(); break;
        default: enableButtons(); 
    }
}

function disableButtons() {
    document.querySelectorAll("button, input, select").forEach(el => {
        el.disabled = true;
    });
}

function enableButtons() {
    setTimeout(() => {
        document.querySelectorAll("button, input, select").forEach(el => {
            el.disabled = false;
        });
    }, animationDelay += delayTime);
}

function resetDropdown() {
    algorithmDropdown.selectedIndex = 0; 
}

function animateArrayBars(cont, height, color) {
    setTimeout(function () {
        cont.style = `margin: 0% ${spacingBetweenBars}%; width: ${(100 / arraySize) - (2 * spacingBetweenBars)}%; height: ${height}%; background-color: ${color};`; 
    }, animationDelay += delayTime);
    
}

// Bubble Sort Algorithm
async function BubbleSort() {
    console.log("Starting Bubble Sort");
    let startTime = performance.now(); 

    for (let i = 0; i < arraySize - 1; i++) {
        for (let j = 0; j < arraySize - i - 1; j++) {
            animateArrayBars(barElements[j], barHeights[j], '#FFFF00'); // Yellow for comparison
            animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FFFF00');
            await new Promise(resolve => setTimeout(resolve, delayTime));

            if (barHeights[j] > barHeights[j + 1]) {
                // Swap bars
                [barHeights[j], barHeights[j + 1]] = [barHeights[j + 1], barHeights[j]];
                // playNote(200+barHeights[j]*500);
                // playNote(200+barHeights[j+1]*500);

                // Show swap effect
                animateArrayBars(barElements[j], barHeights[j], '#FF0000'); // Red for swap
                animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FF0000');
                await new Promise(resolve => setTimeout(resolve, delayTime));
            }

            // Restore color after comparison
            animateArrayBars(barElements[j], barHeights[j], '#673AB7'); // Original color
            animateArrayBars(barElements[j + 1], barHeights[j + 1], '#673AB7');
            // playNote(200+barHeights[j]*500);
            // playNote(200+barHeights[j+1]*500);
        }
        // Highlight the last sorted element
        animateArrayBars(barElements[arraySize - i - 1], barHeights[arraySize - i - 1], '#4CAF50'); // Green for sorted
        // playNote(200+barHeights[arraySize - i - 1]*500);
       
    }

    // Final color for all elements
    for (let i = 0; i < arraySize; i++) {
        animateArrayBars(barElements[i], barHeights[i], '#4CAF50');
        // playNote(200+barHeights[i]*500);
        
    }

    let endTime = performance.now(); // End time
    let timeTaken = endTime - startTime;
    setTimeout(() => {
        showAlgorithmDetails("Bubble Sort", timeTaken, "O(n²)", "O(1)");
    }, animationDelay);
    enableButtons();
}

// Selection Sort Algorithm
async function SelectionSort() {
    console.log("Starting Selection Sort");
    let startTime = performance.now(); // Start time

    for (let i = 0; i < arraySize - 1; i++) {
        let minIndex = i;

        // Highlight minIndex
        animateArrayBars(barElements[minIndex], barHeights[minIndex], '#FFFF00');

        for (let j = i + 1; j < arraySize; j++) {
            console.log(`Comparing indices ${minIndex} and ${j}`);
            // Highlight bars being compared
            animateArrayBars(barElements[j], barHeights[j], '#FFFF00');
            animateArrayBars(barElements[minIndex], barHeights[minIndex], '#FFFF00');
            await new Promise(resolve => setTimeout(resolve, delayTime));

            if (barHeights[j] < barHeights[minIndex]) {
                // Update minIndex
                animateArrayBars(barElements[minIndex], barHeights[minIndex], '#673AB7');
                minIndex = j;
                animateArrayBars(barElements[minIndex], barHeights[minIndex], '#FFFF00');
            }

            // Restore color after comparison
            animateArrayBars(barElements[j], barHeights[j], '#673AB7');
        }

        if (minIndex !== i) {
            // Swap
            [barHeights[i], barHeights[minIndex]] = [barHeights[minIndex], barHeights[i]];

            // Update bars to show swap
            animateArrayBars(barElements[i], barHeights[i], '#FF0000');
            animateArrayBars(barElements[minIndex], barHeights[minIndex], '#FF0000');
            await new Promise(resolve => setTimeout(resolve, delayTime));
        }

        // Restore color for sorted element
        animateArrayBars(barElements[i], barHeights[i], '#4CAF50');
    }
    animateArrayBars(barElements[arraySize - 1], barHeights[arraySize - 1], '#4CAF50');

    let endTime = performance.now(); // End time
    let timeTaken = endTime - startTime;

    setTimeout(() => {
        showAlgorithmDetails("Selection Sort", timeTaken, "O(n²)", "O(1)");
    }, animationDelay);
    enableButtons();
}

// Insertion Sort Algorithm
async function InsertionSort() {
    console.log("Starting Insertion Sort");
    let startTime = performance.now(); // Start time

    for (let i = 1; i < arraySize; i++) {
        let key = barHeights[i];
        let j = i - 1;

        animateArrayBars(barElements[i], barHeights[i], '#FFFF00'); // Highlight key

        while (j >= 0 && barHeights[j] > key) {
            console.log(`Shifting index ${j}`);
            // Highlight bars being compared and shifted
            animateArrayBars(barElements[j], barHeights[j], '#FFFF00');
            animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FF0000');

            barHeights[j + 1] = barHeights[j];
            animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FF0000');
            await new Promise(resolve => setTimeout(resolve, delayTime));

            j--;
        }
        barHeights[j + 1] = key;
        animateArrayBars(barElements[j + 1], barHeights[j + 1], '#FF0000');

        await new Promise(resolve => setTimeout(resolve, delayTime));

        // Restore color for sorted portion
        for (let k = 0; k <= i; k++) {
            animateArrayBars(barElements[k], barHeights[k], '#4CAF50');
        }
    }

    let endTime = performance.now(); // End time
    let timeTaken = endTime - startTime;

    setTimeout(() => {
        showAlgorithmDetails("Insertion Sort", timeTaken, "O(n²)", "O(1)");
    }, animationDelay);
    enableButtons();
}

// Quick Sort Algorithm
async function QuickSort() {
    console.log("Starting Quick Sort");
    let startTime = performance.now(); // Start time


    async function partition(low, high) {
        let pivot = barHeights[high];
        animateArrayBars(barElements[high], barHeights[high], '#FFFF00'); // Highlight pivot
        let i = low - 1;

        for (let j = low; j < high; j++) {
            console.log(`Comparing indices ${j} and pivot`);
            animateArrayBars(barElements[j], barHeights[j], '#FFFF00'); // Highlight comparison
            await new Promise(resolve => setTimeout(resolve, delayTime));

            if (barHeights[j] < pivot) {
                i++;
                // Swap
                [barHeights[i], barHeights[j]] = [barHeights[j], barHeights[i]];

                animateArrayBars(barElements[i], barHeights[i], '#FF0000');
                animateArrayBars(barElements[j], barHeights[j], '#FF0000');
                await new Promise(resolve => setTimeout(resolve, delayTime));
            }

            animateArrayBars(barElements[j], barHeights[j], '#673AB7'); // Restore color
        }

        // Swap pivot
        [barHeights[i + 1], barHeights[high]] = [barHeights[high], barHeights[i + 1]];

        animateArrayBars(barElements[i + 1], barHeights[i + 1], '#FF0000');
        animateArrayBars(barElements[high], barHeights[high], '#FF0000');
        await new Promise(resolve => setTimeout(resolve, delayTime));

        return i + 1;
    }

    async function quickSortRecursion(low, high) {
        if (low < high) {
            let pi = await partition(low, high);
            await quickSortRecursion(low, pi - 1);
            await quickSortRecursion(pi + 1, high);
        }
    }

    await quickSortRecursion(0, arraySize - 1);

    // Final color for sorted array
    for (let i = 0; i < arraySize; i++) {
        animateArrayBars(barElements[i], barHeights[i], '#4CAF50');
    }

    let endTime = performance.now(); // End time
    let timeTaken = endTime - startTime;

    setTimeout(() => {
        showAlgorithmDetails("Quick Sort", timeTaken, "O(nlogn)", "O(logn)");
    }, animationDelay);
    enableButtons();
}

// Merge Sort Algorithm
async function MergeSort() {

    console.log("Starting Merge Sort");
    let startTime = performance.now(); // Start time

    async function merge(left, mid, right) {
        let n1 = mid - left + 1;
        let n2 = right - mid;
        let L = [];
        let R = [];

        for (let i = 0; i < n1; i++) L[i] = barHeights[left + i];
        for (let i = 0; i < n2; i++) R[i] = barHeights[mid + 1 + i];

        let i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            animateArrayBars(barElements[k], barHeights[k], "yellow"); // Yellow for comparing
            animateArrayBars(barElements[mid + 1 + j], barHeights[mid + 1 + j], "yellow"); // Yellow for comparing

            if (L[i] <= R[j]) {
                barHeights[k++] = L[i++];
            } else {
                barHeights[k++] = R[j++];
            }
            await new Promise(resolve => setTimeout(resolve, delayTime));
            animateArrayBars(barElements[k - 1], barHeights[k - 1], "red"); // Red for merging
        }

        while (i < n1) {
            barHeights[k++] = L[i++];
            await new Promise(resolve => setTimeout(resolve, delayTime));
            animateArrayBars(barElements[k - 1], barHeights[k - 1], "red"); // Red for merging
        }

        while (j < n2) {
            barHeights[k++] = R[j++];
            await new Promise(resolve => setTimeout(resolve, delayTime));
            animateArrayBars(barElements[k - 1], barHeights[k - 1], "red"); // Red for merging
        }

        for (let i = left; i <= right; i++) {
            animateArrayBars(barElements[i], barHeights[i], "green"); // Green for sorted
        }
    }

    async function mergeSort(left, right) {
        if (left < right) {
            let mid = Math.floor((left + right) / 2);
            await mergeSort(left, mid);
            await mergeSort(mid + 1, right);
            await merge(left, mid, right);
        }
    }

    await mergeSort(0, arraySize - 1);

    let endTime = performance.now(); // End time
    let timeTaken = endTime - startTime;

    setTimeout(() => {
        showAlgorithmDetails("Merge Sort", timeTaken, "O(nlogn)", "O(n)");
    }, animationDelay);
    enableButtons();
}

generateArray(); // Initial array generation

console.log("world");