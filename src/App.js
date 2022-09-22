import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import BudgetComponent from "./components/BudgetComponent";
import { useState } from "react";
import Expenses from "./components/Expenses";
import AddExpense from "./components/AddExpense";
import Search from "./components/Search";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  const [expense, setExpense] = useState([]);
  const [total, setTotal] = useState(0);

  const [searchText, setSearchText] = useState("");

  const addToExpense = (name, cost) => {
    const newExpense = {
      text: name,
      cost: cost,
    };
    const newExpenses = [...expense, newExpense];

    setExpense(newExpenses);
  };
  return (
    <Root>
      <h1>My Budget Planner</h1>
      <BudgetComponent total={total} setTotal={setTotal} expense={expense} />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Expenses
        expense={expense.filter((item) =>
          item.text.toLowerCase().includes(searchText)
        )}
        total={total}
        setTotal={setTotal}
        setExpense={setExpense}
        addToExpense={addToExpense}
      />
      <AddExpense addToExpense={addToExpense} />
    </Root>
  );
}

export default App;
