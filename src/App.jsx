import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, SetUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 100000,
    expectedReturn :10,
    duration : 10,     
}) 

const inputIsValid = userInput.duration >= 1;

function handleChnage(inputIndentifier, newValue){
  SetUserInput(prevUserInput => {
      return{
          ...prevUserInput,
          [inputIndentifier] : + newValue,
      }
  })
}

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange = {handleChnage}/>
    {!inputIsValid && <p className="center">Please Enter a duration greater than Zero</p>}
    {inputIsValid && <Results input ={userInput} />}
    </>
    )
}

export default App
