import React, { useState, useEffect, useRef } from 'react';
import './SortingAnimation.css';

// Utility function
const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Sorting Algorithms
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

const defaultCompare = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

const partition = (array, left, right, compareFn) => {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }
    if (i <= j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      swaps.push({ firstPostion: i, lastPosition: j });
      i++;
      j--;
    }
  }

  return i;
};

const quick = (array, left, right, compareFn) => {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, compareFn);
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
};

class SortingAlgorithms {
  bubbleSort(array) {
    const swaps = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swaps.push({ firstPostion: j, lastPosition: j + 1 });
        }
      }
    }
    return swaps;
  }

  selectionSort(array) {
    const swaps = [];
    let min;
    for (let i = 0; i < array.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      let temp = array[min];
      array[min] = array[i];
      array[i] = temp;
      swaps.push({ firstPostion: min, lastPosition: i });
    }
    return swaps;
  }

  quickSort(array, compareFn = defaultCompare) {
    swaps = [];
    quick(array, 0, array.length - 1, compareFn);
    return swaps;
  }
}

const SortingAnimation = () => {
  const [nBars, setNBars] = useState(10);
  const [bars, setBars] = useState([]);
  const [barsDivs, setBarsDivs] = useState([]);
  const [algorithmIndex, setAlgorithmIndex] = useState(0);
  const sortingAlgorithms = new SortingAlgorithms();
  const timerRef = useRef(null);

  useEffect(() => {
    start();
    // Set up interval for generating new bars and solving
    timerRef.current = setInterval(async () => {
      start();
      await sleep(1000); // Allow time for bars to render
      solve();
    }, 6000);

    // Clean up interval on component unmount
    return () => clearInterval(timerRef.current);
  }, [nBars]);

  const start = () => {
    let generatedBars = Array(nBars)
      .fill(0)
      .map(() => ({
        width: 20,
        height: Math.floor(Math.random() * 200) + 1,
        position: 0,
      }));
    generatedBars.forEach((bar, i) => (bar.position = i));
    setBars(generatedBars);
    setBarsDivs(generatedBars.map(() => React.createRef()));
  };

  const swapBars = async (i, j) => {
    const temp = barsDivs[i].current.style.left;
    barsDivs[i].current.style.left = barsDivs[j].current.style.left;
    barsDivs[j].current.style.left = temp;

    barsDivs[i].current.classList.add('activate');
    barsDivs[j].current.classList.add('activate');

    await sleep(300);

    barsDivs[i].current.classList.remove('activate');
    barsDivs[j].current.classList.remove('activate');
  };

  const solve = async () => {
    const array = bars.map((el) => el.height);
    const swaps = algorithms[algorithmIndex](array);

    for (let swap of swaps) {
      if (swap.firstPostion !== swap.lastPosition) {
        await swapBars(swap.firstPostion, swap.lastPosition);
      }
    }
  };

  const algorithms = [
    sortingAlgorithms.bubbleSort,
    sortingAlgorithms.selectionSort,
    sortingAlgorithms.quickSort,
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="select-algorithm">
          <select onChange={(e) => setAlgorithmIndex(Number(e.target.value))}>
            <option value="0">Bubble Sort</option>
            <option value="1">Selection Sort</option>
            <option value="2">Quick Sort</option>
          </select>
        </div>
        <div className="generate-new">
          <input
            type="number"
            value={nBars}
            onChange={(e) => setNBars(Number(e.target.value))}
          />
          <button onClick={start}>Generate New</button>
        </div>
        <div className="buttons">
          <button onClick={solve}>Solve</button>
        </div>
      </div>
      <div id="stage" className="stage" style={{ width: `${nBars * 30}px` }}>
        {bars.map((bar, index) => (
          <div
            key={index}
            ref={barsDivs[index]}
            className="bar"
            style={{
              width: `${bar.width}px`,
              height: `${bar.height}px`,
              left: `${5 + index * 30}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingAnimation;
