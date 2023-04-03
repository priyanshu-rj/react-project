import React from "react";
import  JsonData  from "./JsonData.json" 
const Contact = () =>{
    const DisplayData =JsonData.map(
        (props)=>{
            return(
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.city}</td>
                </tr>
            )
        }
    ) 
    return (
     <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
             
        </div>
     )
}; 


export default Contact;