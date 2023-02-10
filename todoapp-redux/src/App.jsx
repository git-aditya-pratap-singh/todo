import React, { useState} from "react";
import './App.css';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import {addTodo} from "../actions/index";
import {deleteTodo} from "../actions/index";
import {useSelector, useDispatch} from "react-redux";



const App = () =>{  
  const [inputData, setInputData] = useState('');

  const list = useSelector((state)=>state.todoReducer);
  const dispatch = useDispatch();


  return(
    <>
      <div className="w-full mx-auto p-5 items-center mt-5 sm:mt-[5rem]">
          <div className="max-w-[500px] p-5 mx-auto bg-gray-800 rounded-md shadow-md flex flex-col items-center">
                <h1 className="text-2xl font-bold text-white">ToDo App</h1>

                <h1 className="mt-6 w-full bg-gray-500 h-[0.1rem] rouneded-full"></h1>

                <div className="w-full flex flex-row px-2 py-5 items-center justify-between">
                    <input type="text" placeholder="Add Items ..." className="w-full px-4 py-2 bg-gray-800 text-white rounded-md
                    text-[19px] md:text-[17px] outline-0 caret-indigo-500" value={inputData} onChange={(event)=>{setInputData(event.target.value)}} required="required"/>
                    <AddCircleRoundedIcon className="text-white text-green-400 active:text-green-600" 
                    onClick={()=> dispatch(addTodo(inputData),setInputData(''))}/>
                </div>

                {
                  list.map((element)=>{
                      return(
                        <>
                          <div className="w-full flex flex-col gap-y-2 duration-500 " id="list" key={element.id}>
                            <div className="bg-gray-800 px-2 py-2 items-center flex flex-row justify-between rounded-md">
                              <h3 className="text-white md:text-[15px] pl-2">{element.data}</h3>
                              <DeleteForeverRoundedIcon className="text-white text-red-400 active:text-red-600" 
                              onClick={()=> dispatch(deleteTodo(element.id))}/>
                          </div>
                        </div>
                        </>
                      )
                  })
                }

          </div>
      </div>
    </>
  )
}
export default App;