import { useEffect, useState } from "react";
import { getMergeSortAnimations } from "../Algorithm/MergeSort";
import { getBubbleSortAnimations } from "../Algorithm/BubbleSort";
import { getInsertionSortAnimations } from "../Algorithm/InsertionSort";
import { getQuickSortAnimations } from "../Algorithm/QuickSort";
import { getSelectionSortAnimations } from "../Algorithm/SelectionSort";
import { Fragment } from "react";
import ArrayBar from "./ArrayBar/ArrayBar";
import classes from "./Visual.module.css";
const UNSORTED_COLOR = "rgb(155, 9, 223)";
const UNSORTED_BORDER_COLOR = "rgb(155, 9, 223)";
const ACTIVE_COLOR = "white";
const Visual = () => {
  const [array, setArray] = useState([]);
  const [number, setNumber] = useState(50);
  const [ANIMATION_SPEED_MS, setTime] = useState(7);
  const [change, setChange] = useState(false);
  const InputHandler = (event) => {
    setChange(false);
    let n = event.target.value;
    if (n > 200) {
      n = 200;
    } else if (n < 20) {
      n = 20;
    }
    setTime(8 - Math.floor(n / 100));
    setNumber(n);
  };
  let screen = (window.screen.width / 100) * 75;
  let w = Math.floor(screen / number) - 3;
  useEffect(() => {
    screen = (window.screen.width / 10) * 8;
    w = Math.floor(screen / number) - 3;
  }, [change]);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < number; i++) {
      array.push(randomNumber(5, 700));
    }
    setChange(true);
    setArray(array);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        let color = i % 3 === 0 ? ACTIVE_COLOR : UNSORTED_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.marginTop = `${700 - newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (arrayBars[barOneIdx] || arrayBars[barTwoIdx]) {
          console.log(animations[i]);
        }
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        let color = i % 3 === 0 ? ACTIVE_COLOR : UNSORTED_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.marginTop = `${700 - newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };
  const insertionSort = () => {
    const animations = getInsertionSortAnimations(array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        let color = i % 3 === 0 ? ACTIVE_COLOR : UNSORTED_COLOR;
        let color1 = i % 3 === 0 ? ACTIVE_COLOR : UNSORTED_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color1;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.marginTop = `${700 - newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };
  const SelectionSort = () => {
    const animations = getSelectionSortAnimations(array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        let color = i % 3 === 0 ? ACTIVE_COLOR : UNSORTED_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.marginTop = `${700 - newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };
  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        let color = i % 3 === 0 ? ACTIVE_COLOR : UNSORTED_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.marginTop = `${700 - newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  return (
    <Fragment>
      <div className={classes.clear}>
        <div className={classes.clearIn}>
          <h1 className={classes.head}>Invalid screen Ratio</h1>
          <h3>Use Laptop or personal Computer for Best Experience</h3>
        </div>
      </div>
      <div className={classes.arrayContainer}>
        <div className={classes.Bars}>
          {change &&
            array.map((value, idx) => {
              return (
                <ArrayBar
                  key={idx}
                  value={value}
                  unsortedColor={UNSORTED_COLOR}
                  border={UNSORTED_BORDER_COLOR}
                  width={w}
                  class="array-bar"
                  style={{ verticalAlign: "bottom" }}
                />
              );
            })}
        </div>
        <div className={classes.sideBar}>
          <h1 className={classes.font}>Sorting</h1>
          <h2 className={classes.font}>Algorithm</h2>
          <h2
            style={{ borderBottom: "2px solid rgb(155, 9, 223)" }}
            className={classes.font}
          >
            Visualizer
          </h2>
          <h5
            style={{
              marginLeft: "10px",
              marginTop: "20px",
              marginBottom: "-10px",
              color: "rgb(155, 9, 223)",
            }}
          >
            Number of Bars:
          </h5>
          <input
            type="number"
            max="200"
            min="20"
            onChange={InputHandler}
            className={classes.Input}
            placeholder={number}
          ></input>
          <h6
            style={{
              marginLeft: "10px",
              marginTop: "-10px",
              color: "rgb(155, 9, 223)",
            }}
          >
            (min:20 max:200)
          </h6>
          <button
            style={{
              margin: "20px 0",
              boxShadow: "none",
              borderBottom: "1px solid pink",
              borderTop: "1px solid pink",
              fontSize: "120%",
              cursor: "pointer"
            }}
            className={classes.Button}
            onClick={resetArray}
          >
            Generate New Array
          </button>
          <h3
            style={{
              marginLeft: "10px",
              marginBottom: "1px",
              color: "rgb(155, 9, 223)",
            }}
          >
            Algorithms:
          </h3>
          <button className={classes.Button} onClick={() => quickSort()}>
            Quick Sort
          </button>
          <button className={classes.Button} onClick={mergeSort}>
            Merge Sort
          </button>
          <button className={classes.Button} onClick={() => insertionSort()}>
            Insertion Sort
          </button>
          <button className={classes.Button} onClick={() => SelectionSort()}>
            Selection Sort
          </button>
          <button className={classes.Button} onClick={() => bubbleSort()}>
            Bubble Sort
          </button>
        </div>
      </div>
    </Fragment>
  );
};

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
export default Visual;
