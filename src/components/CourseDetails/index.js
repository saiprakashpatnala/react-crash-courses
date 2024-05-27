import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";



const CourseDetails=()=>{
    const {id}=useParams()
    const[obj,setObj]=useState({})

    useEffect(()=>{
     const getData=async()=>{
        try{
            let response=await fetch(`https://apis.ccbp.in/te/courses/${id}`)
            const data=await response.json()
            setObj(data.course_details)
        }
        catch(e){
            console.log(e)
        }
     }
     getData()
    },[id])

    const{name,description,image_url}=obj
    return(
        <div>
            <h1>CourseDetails</h1>
           <h1>{name}</h1>
           <img src={image_url} alt={name}/>
           <p>{description}</p>
        </div>
    )
}

export default CourseDetails