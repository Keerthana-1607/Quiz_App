import Data from "./data";
import { useEffect, useState } from "react";
import "./index.css";

const Questions = () => {
  const [idx, setIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selected, setSelected] = useState(null);
  const [quizend, setQuizEnd] = useState(false);
  const [score, setScore] = useState(0); // score state

  const cur_Question = Data[idx];

  // TIMER
  useEffect(() => {
    // if (quizend) return; // stop timer if quiz ended

    if (timeLeft === 0) { // go next question by using nextQuestion function
      nextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizend]);

  //next Question
  const nextQuestion = () => {
    setSelected(null);
    setTimeLeft(10);

    setIdx((prev) => {
      if (prev < Data.length - 1) {
        return prev + 1;
      } else {
        setQuizEnd(true); // end quiz
        return prev;
      }
    });
  };

  // When option clicked
  const handleSelect = (key) => {
    setSelected(key);

    // increase score if correct
    if (key === cur_Question.answer) {
      setScore((prev) => prev + 1);
    }

    // move next after 1 second
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  // QUIZ END SCREEN
  if (quizend) {
    return (
      <div className="bg-container">
        <h1>Quiz Completed!</h1>
        <h2>Your Score: {score} / {Data.length}</h2>

        {/* <button
          onClick={() => {
            setIdx(0);
            setSelected(null);
            setTimeLeft(10);
            setQuizEnd(false);
            setScore(0);
          }}
        >
          Restart Quiz
        </button> */}
      </div>
    );
  }

  // NORMAL QUESTION SCREEN
  return (
    <div className="bg-container">
      <h2>Time Left: {timeLeft}s</h2>

      <h3>
        {cur_Question.id}. {cur_Question.question}
      </h3>

      <ul>
        {Object.entries(cur_Question.options).map(([key, value]) => {
          const isCorrect = key === cur_Question.answer;
          const isSelected = key === selected;

          let bg = "lightblue";
          

          // colors logic
          if (selected) {
            if (isCorrect) {
              bg = "green";
              
            } // correct
            else if (isSelected){
              bg = "red"; // wrong selected
            } 
          }

          return (
            <li key={key}>
              <button
                className="options-btn"
                disabled={selected}
                onClick={() => handleSelect(key)}
                style={{
                  backgroundColor: bg,
                  color: "black",
                  margin: "5px",
                  padding: "8px 12px",
                  border: "none",
                  cursor: "pointer",
                  
                }}
              >
                {key}. {value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Questions;

// import Data from "./data";
// import { useEffect, useState } from "react";
// import "./index.css";

// const Questions = () => {
//   const [idx, setIdx] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(10);
//   const [selected, setSelected] = useState(null);
//   const[quizend,setQuizEnd]=useState(false)

//   const cur_Question = Data[idx];

//   // ⏳ TIMER
//   useEffect(() => {
//     if (timeLeft === 0) {
//       handleNext();
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   // 👉 Next Question
//   const handleNext = () => {
//     setSelected(null);
//     setTimeLeft(10);

//     setIdx((prev) => {
//       if (prev < Data.length - 1) {
//         return prev + 1;
//       }
//       else{
//         setQuizEnd(true);
//         return prev;
//         // return 0; // restart or you can stop
//       }
      
//     });
//   };

//   // 👉 When option clicked
//   const handleSelect = (key) => {
//     setSelected(key);

//     // move next after 1 second
//     setTimeout(() => {
//       handleNext();
//     }, 1000);
//   };

//   return (
//     <div className="bg-container">
//       <h2>Time Left: {timeLeft}s</h2>

//       <h3>
//         {cur_Question.id}. {cur_Question.question}
//       </h3>

//       <ul>
//         {Object.entries(cur_Question.options).map(([key, value]) => {
//           const isCorrect = key === cur_Question.answer;
//           const isSelected = key === selected;

//           let bg = "lightgray";

//           // 🎨 colors logic
//           if (selected) {
//             if (isCorrect) bg = "green";
//             else if (isSelected) bg = "red";
//           }

//           return (
//             <li key={key}>
//               <button
//                 disabled={selected} // disable after click
//                 onClick={() => handleSelect(key)}
//                 style={{
//                   backgroundColor: bg,
//                   color: "white",
//                   margin: "5px",
//                   padding: "8px 12px",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 {key}. {value}
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Questions;


// import Data from './data.jsx'
// import {useEffect, useState} from 'react'
// import './index.css'
// const Questions=() => {
//     const[idx,setIdx]=useState(0)
//     const[timeLeft,setTimeLeft]=useState(10)
//     const[selected,setSelected]=useState(null)

//     const cur_Question=Data[idx];
//     useEffect(() =>{
//       setIdx()

//     },1000);

//     return(
//         <div className='bg-container'>
//         <h2>Time Left:{timeLeft}</h2>

//         <h3>
//             {cur_Question.id}. {cur_Question.question}
//         </h3>

//         <ul>
//         {Object.entries(cur_Question.options).map(([key, value]) => {
//           const isCorrect = key === cur_Question.answer;
//           const isSelected = key === selected;

//           return (
//             <li key={key}>
//               <button
//                 onClick={() => setSelected(key)}
//                 style={{
//                   backgroundColor: isCorrect
//                     ? "green"
//                     : isSelected
//                     ? "red"
//                     : "lightgray",
//                   color: "white",
//                   margin: "5px",
//                   padding: "8px 12px",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 {key}. {value}
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//         </div>
        


//     )

// }
// export default Questions;