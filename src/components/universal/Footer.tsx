import styled from "styled-components"
function Footer() {
  const FooterDiv = styled.div`
    background-color: darkblue;
    color: white;
    text-align: center;
    padding: 20px;
  `
  return (
    <FooterDiv>
      <h3>Click the refresh button for 10 new free jokes, on the house</h3>
    </FooterDiv>
  )
}

export default Footer