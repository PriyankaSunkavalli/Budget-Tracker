import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Root=styled.div`
    margin-bottom: 30px;
    width: 600px;

    
`
const ExpenseList=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;


`
const Text=styled.div``

const Cost=styled.div``

const Expenses = ({expense,setExpense,addToExpense}) => {
    
  return (
    <Root>
        <Row>
            {expense.map((expenseitem)=>
            <ExpenseList lg={12}>
           <Text> {expenseitem.text}</Text>
         <Cost>   ${expenseitem.cost}</Cost>

            </ExpenseList>
            )}
        </Row>
        
    </Root>
  );
}

export default Expenses;
