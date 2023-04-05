import React, { Component } from 'react'

export default class Fruits extends Component {
  render() {
    return (
      <div className='day4'>
      <div className='rs'>
      <p>Enter the name of favourite fruit:</p>
    <form>
    <br></br>
    <p>name:</p>
    <input type="text" placeholder='enter the name'></input>
    <p>select category:</p>
       <select name="fruit" >
       <input  type='text' placeholder='fruits' ></input>
       <option value="fruits">orange</option>
       <option value="fruits">apple</option>
       <option value="fruits">banana</option>
       <option value="fruits">fig</option>
       <option value="fruits">jack</option>
       
       </select>
    
    </form>
    <button id='button'>SUBMIT</button>
    </div>
      </div>
    )
  }
}