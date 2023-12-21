import './App.css';
import { useState } from 'react';
function App() {
  const [formData,setFormData]=useState( {firstName:"",lastName:"",email:""} );

   console.log(formData.firstName);
  function changeHandler(event){
    setFormData(previousData=>{
      return{
        ...previousData,
        [event.target.name]:event.target.value
      }
    })
  }
  return (
    <div>
       <form >
        <input 
          type='text'
          placeholder='First Name'
          onChange={changeHandler}
          name='firstName'
          className='border'/>

          <br/>
          <br/>
        
          <input 
          type='text'
          placeholder='Last Name'
          onChange={changeHandler}
          name='lastName'
          className='border'/>

          <br/>
          <br/>
        
          <input 
          type='email'
          placeholder='Email'
          onChange={changeHandler}
          name='email'
          className='border'/>

       </form>
    </div>
  );
}

export default App;
