import { Joke } from "../../interfaces/Joke.ts";
import styled from "styled-components";

function JokeCards(props: { jokes: Joke[] }) {
  /* css */
  const StyledJokeUl = styled.ul`
    display: flex;
    flex-direction: column;
    width: 50vw;
  `

  const StyledJokeLi = styled.li`
    list-style-type: none;
    background-color: skyblue;
    padding: 10px;
    margin: 10px;
    border: 2px blue solid;
  `

  const StyledSpan = styled.span`
    text-align: center;
    text-transform: uppercase;
  `
  return (
    <StyledJokeUl>
      {/* map each joke to a container */}
      {props.jokes.map((joke: Joke) => (
        <StyledJokeLi key={joke.id}>
          <StyledSpan><h3>{joke.type} (#{joke.id})</h3></StyledSpan>
          <h4>Q: {joke.setup}</h4>
          <p>A: {joke.punchline}</p>
        </StyledJokeLi>
      ))}
    </StyledJokeUl>
  )
}

export default JokeCards