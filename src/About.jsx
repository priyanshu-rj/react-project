import React from "react";
import ReactDOM from 'react-dom';
const About = (props) =>{ 
  console.log(props);
    const shoot = () => {
        alert("Great Shot!");
      } 
      return (<>
       
        <div className="done">
        <input type="text" /> <br />
        <button onClick={shoot}>Take the shot!</button>
        <h3>{props.Name}</h3>
        </div>
        </>
      );
}

ReactDOM.render(<>
  <About
    Name="priyanshu" 
    />
  <About/>
  </>,document.getElementById("root"));
export default About;