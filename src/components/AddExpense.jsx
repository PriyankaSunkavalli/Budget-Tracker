import React, { useState } from 'react';
import styled from 'styled-components';

const Root=styled.div`
button{
    margin-top: 20px;
}
input{
    text-decoration: none;
}
`
const InputField=styled.div``

const AddExpense = ({addToExpense}) => {
    const [name,setName]=useState('')
    const [cost,setCost]=useState()

    const handleSave=()=>{
        addToExpense(name,cost)
        setName('')
        setCost('')

        
    }
  return (
    <Root>
        <h2>Add Expense</h2>
        <InputField>
        <p>Name</p>
        <input type='text' value={name} onChange={(n)=>setName(n.target.value)}></input>
        <p>Cost</p>
        <input type='number' value={cost} onChange={(c)=>setCost(c.target.valueAsNumber)}></input>
        </InputField>
        <button onClick={handleSave}>Save</button>
      
    </Root>
  );
}

export default AddExpense;
