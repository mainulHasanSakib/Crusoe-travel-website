import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const Addchallenges = () => {
    const { register, handleSubmit,reset  } = useForm();
  const onSubmit = data => {
      axios.post("http://localhost:5000/challenges", data)
      .then(res=>{
          if(res.data.insertedId){
              alert('Challenges Added Successfully')
              reset()
          }
      })
  };

    return (
        <div>
            <h1 className="text-center my-5 py-5 text-success fw-bolder"> ADD A CHALLENGE</h1>
            <form  onSubmit={handleSubmit(onSubmit)}>
     
      <input className="p-3 d-flex w-25 mb-3 m-auto" placeholder="name" {...register("name", { required: true })} />
      <textarea className="p-3 d-flex w-25 mb-3 m-auto" placeholder="description" {...register("description", { required: true })} />
      <input className="p-3 d-flex w-25 mb-3 m-auto" placeholder="img url" {...register("url", { required: true })} />
      
      
      <input className="p-3 d-flex w-25 m-auto " placeholder="place"{...register("place", { required: true })} />
      
      
      
      <input className="my-5 " type="submit" />
    </form>
        </div>
    );
};

export default Addchallenges;