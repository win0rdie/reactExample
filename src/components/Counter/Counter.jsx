import { useState, useEffect } from "react";
import styles from "./Counter.module.css";
// import { Component } from "react";
// import { useReducer } from "react";

// function countReducer(state, action) {
//   // console.log("action---", action);
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + action.payload };

//     case "decrement":
//       return { ...state, count: state.count - action.payload };

//     default:
//       throw new Error(`Unsupported action type ${action.type}`);
//   }
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(countReducer, {
//     count: 0,
//   });

//   return (
//     <div className={styles.container}>
//       <p className={styles.value}>{state.count}</p>
//       <button
//         className={styles.btn}
//         type="button"
//         onClick={() => dispatch({ type: "increment", payload: 1 })}
//       >
//         Увеличить
//       </button>

//       <button
//         className={styles.btn}
//         type="button"
//         onClick={() => dispatch({ type: "decrement", payload: 1 })}
//       >
//         Уменьшить
//       </button>
//     </div>
//   );
// }

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((prevCount) => prevCount + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB((prevCount) => prevCount + 1);
  };

  // useEffect(() => {
  //   setCounterA((state) => state + 1);
  // }, []);

  // useEffect(() => {
  //   setCounterB((state) => state + 1);
  // }, []);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}

// export default class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

//   componentDidMount() {
//     const { counterA, counterB } = this.state;
//     const totalClicks = counterA + counterB;

//     document.title = `Всего кликнули ${totalClicks} раз`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { counterA, counterB } = this.state;

//     if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//       const totalClicks = counterA + counterB;

//       document.title = `Всего кликнули ${totalClicks} раз`;
//     }
//   }

//   render() {
//     return (
//       <>
//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Кликнули counterA {this.state.counterA} раз
//         </button>

//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Кликнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }
