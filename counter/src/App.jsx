import { useState } from "react"

function App() {
  let [counter,setCounter] = useState(15)
  let [counterTwo,setCounterTwo] = useState(15)
  
  const addValue = ()=>{
    setCounter(prev=>prev+1)
  }
  const removeValue = ()=>{
    if (counterTwo>0) {
      setCounterTwo(prev=>prev-1)
    }
  }
  

  return (
    <>
     <div className="main flex justify-center items-center flex-col">
      <h1 className="mt-6 text text-xl bg-slate-400 p-4 border-black border-2 ">Counter</h1>
     <div className="container bg-slate-600 h-[30rem] w-[30rem] mt-14 mx-auto p-8 flex justify-evenly items-center border-4 border-black">
      <div className=" bg-slate-400  text-6xl  h-[10rem] w-[10rem]    flex justify-center items-center border-4 border-black ">{counterTwo}</div>
      <div className="inline-flex mx-7">
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={removeValue}>
    Prev
  </button>
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={addValue}>
    Next
  </button>
</div>
      <div className="card  bg-slate-400 text-6xl h-[10rem] w-[10rem]    flex justify-center items-center border-4 border-black">{counter}</div>
     </div>
     </div>
    </>
  )
}

export default App
