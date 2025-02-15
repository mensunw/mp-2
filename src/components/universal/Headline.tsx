import styled from "styled-components"
function Headline() {
  const HeaderDiv = styled.div`
    background-color: darkblue;
    color: white;
    text-align: center;
    padding: 20px;
  `
  return (
    <HeaderDiv>
      <h1>The Joke Generator</h1>
      <p>note: scroll down for refresh button</p>
    </HeaderDiv>
  )
}

export default Headline