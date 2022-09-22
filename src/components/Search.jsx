import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
input{
    margin-bottom: 30px;
    width: 600px;
    padding: 0px 20px;
}
    
`

const Search = ({searchText,setSearchText}) => {

  return (
    <Root>
      <h1>Expenses</h1>
      <input type='text' placeholder='Search' onChange={(e)=>{setSearchText(e.target.value)}}></input>
    </Root>
  );
}

export default Search;
