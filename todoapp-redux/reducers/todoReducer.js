//import React, {useState,useEffect} from "react";
const initialData = [];

const todoReducer = (state = initialData, action) => {
      switch(action.type){

        case "ADD_TODO":
            return [...state, action.payload]
            
        case "DELETE_TODO":
            return state.filter((elem)=> elem.id !== action.payload)
           
        default: return state;
      }
      
}

export default todoReducer;