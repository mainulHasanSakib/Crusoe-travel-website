import React, { useEffect, useState } from 'react';

const Manage = () => {
    const[clients, setClients]=useState([]);
    useEffect(() => {
        fetch('https://vast-inlet-04597.herokuapp.com/surviver')
            .then(res => res.json())
            .then(data => setClients(data));
        }, []);
        const handleDelete= id =>{
            const url=`https://vast-inlet-04597.herokuapp.com/surviver/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount){const remaining = clients.filter(client => client._id !==id)
                setClients(remaining)
                alert("Want to delete?")}
                
            })
        }
    return (
        <div className="container">
            <h1 className="text-center my-5 py-5 text-success fw-bolder"> Manage Surviver</h1>
<div className="row d-flex">
    {
        clients.map(client=> <div className="col-md-3 fw-bold m-3 p-5 shadow border border-info border-3 rounded">
            <h3 >Name :{client.name}</h3>
            <h3 >Email :{client.email}</h3>
            <h3 >Destination :{client.destination}</h3>
            <button onClick={()=>handleDelete(client._id)} className="btn-warning">Delete</button>
            <button  className="btn-warning">Update</button>
        </div>
             )
    }
</div>
        </div>
    );
};

export default Manage;