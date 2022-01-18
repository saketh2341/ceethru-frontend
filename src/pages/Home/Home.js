import React from 'react'
import {useState, useContext} from 'react'
import {Redirect} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

export default function Home() {
    const [FileName,setFileName]=useState("");
    const navigate = useNavigate();
    const {  SelectedFile,dispatch } = useContext(AuthContext)
 const  handleSubmit=(event)=> {
    alert('A name was submitted: ' + FileName);
    event.preventDefault();
  }
  const getca =()=>{
    dispatch({ type: "Create_FileName", payload: {FileName:FileName,SelectedFile:SelectedFile} })
     const data={
       path:FileName
     }
     fetch("http://localhost:8080/getFileJson",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
        localStorage.setItem('myStorage', JSON.stringify(data));
        navigate('/Diagram')
      console.log('Success:', data);
    })
    
 

  }
    return (
        <div >
            <form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" value={FileName} onChange={(e)=>{
      setFileName(String(e.target.value))
      console.log(e.target.value)
      e.preventDefault()
    }}/>
  </label>
  <button onClick={getca} type='submit'>generate</button>
  {/* <input type="submit" value="Submit" onClick={getca} /> */}
</form>
        </div>
    )
}
