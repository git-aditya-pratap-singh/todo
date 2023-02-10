import React,{useEffect} from "react";
//import todoReducer from "./todoReducer";

 const Storage = () =>{
    const storageData = JSON.parse(localStorage.getItem('lists'));
    return storageData
}
export default Storage;