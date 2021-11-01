import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';


const Booking = () => {
    const { cId  } = useParams();
    const [challenges, setChallenges]=useState([]);
    const { register, handleSubmit,reset  } = useForm();
    const onSubmit = data => {
        console.log(data)
       fetch('https://vast-inlet-04597.herokuapp.com/surviver',{
           method:'post',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(result=>{
           if(result.insertedId){
               alert('Joining Confirmed')
               reset()
           }
       })
    };
    useEffect(()=>{
        fetch("https://vast-inlet-04597.herokuapp.com/challenges")
        .then((res)=>res.json())
        .then((data)=>setChallenges(data))
    } ,[])


    const foundService = challenges.find((challenge)=>challenge._id == cId )
   
   

    
  
    return ( 
        <div className="container">
            <div className="row d-flex  justify-content-center my-5 ">
           
            <div className="col-md-7">
                <h2 className="text-primary fw-bolder my-5">  Challenge: {foundService?.name} </h2>
        <h2 className="text-primary fw-bolder my-5">  Place:  {foundService?.place} </h2>
        
                
                    <img className="w-75 img-fluid border-primary" src={foundService?.url} alt="" />
                    <p className="fw-bold border border-3 border-info p-3 my-5">{foundService?.description}</p>
                </div>
                <div className="col-md-5">
                <h1 className="text-center my-5 py-5 text-success fw-bolder"> Join As Surviver</h1>
            <form  onSubmit={handleSubmit(onSubmit)}>
     
      <input className="p-3 d-flex w-25 mb-3 m-auto" placeholder="name" {...register("name", { required: true })} />
     
      <input className="p-3 d-flex w-25 mb-3 m-auto" placeholder="email" {...register("email", { required: true })} />
      
      
      <input className="p-3 d-flex w-25 m-auto " placeholder="destination"{...register("destination", { required: true })} />
      
      
      
      <input className="my-5 " type="submit" />
    </form>
                </div>
        
        </div> 
        </div>
        
    );
};

export default Booking;