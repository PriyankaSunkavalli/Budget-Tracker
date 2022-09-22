import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Root=styled.div`
padding: 20px;
display: flex;
p{
    margin: 0;
}
    
`
const Budget=styled.div`
    height: 50px;
width: 250px;
background-color: grey;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;


`

const Remaining=styled.div`
height: 50px;
width: 250px;
background-color: lightgreen;
border-radius: 5px;
display: flex;
align-items: center;
padding: 10px;


`
const Spent=styled.div`
    height: 50px;
width: 250px;
background-color: lightblue;
border-radius: 5px;
display: flex;
align-items: center;
padding: 10px;


`

const BudgetComponent = ({total,setTotal,expense}) => {
    const [budget,setBudget]=useState(2000)
    const [budgetEdit,setBudgetEdit]=useState(false)
    const [remain,setRemain]=useState(0)
    useEffect(() => {
        {expense.forEach((expensecost)=>
            {
            setTotal(total+expensecost.cost)
            }
            )}
    }, [expense]);
    useEffect(()=>{
        setRemain(budget-total)

    },[total,budget])

  return (
    <Root>
        <Row>
            <Col lg={4}>
                <Budget>
                    <p>Budget:{budgetEdit?<input type='number' value={budget} onChange={(e)=>setBudget(e.target.value)}></input> :`$${budget}`}</p>
                    <button onClick={()=>setBudgetEdit(!budgetEdit)}>{budgetEdit? 'Save':'Edit'}</button>

                </Budget>
            </Col>
            <Col lg={4}>
                <Remaining>
                <p >Remaining:${remain}</p>
                

                </Remaining>
            </Col>
            <Col lg={4}>
                <Spent>
                <p >Spent:${total}</p>
                </Spent>
            </Col>


        </Row>
      
    </Root>
  );
}

export default BudgetComponent;
