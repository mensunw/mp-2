import { Joke } from "./../../interfaces/Joke.ts";
import JokeCards from "./../ui/JokeCards.tsx";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Headline from "./../universal/Headline.tsx";
import Footer from "./../universal/Footer.tsx";

function AppPage() {
  /* css */
  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightblue;
  `

  const StyledButton = styled.button`
    padding: 5px;
    margin-bottom: 30px;
  `

  /* state for storing the jokes in a list */
  const [jokes, setJokes] = useState<Joke[]>([]);
  /* state for deciding when to refresh */
  const [refresh, setRefresh] = useState<boolean>(false);

  /* update jokes upon initial render */
  useEffect(() => {
    async function getJokes(): Promise<void> {
      /* call api (and wait for the async fetch to come back) */
      const rawResult = await fetch("https://official-joke-api.appspot.com/jokes/ten");
      /* parse raw result and turn it into json and extract body (and wait for the async .json to come back) */
      const result = await rawResult.json();
      /* set the jokes to the result */
      setJokes(result)
    }
    getJokes()
      .catch((e: Error) => console.log("Error fetching api:", e))
  }, [refresh])

  return (
    <>
      <Headline />
      <StyledDiv>
        {/* display each joke card with JokeCards component */}
        <JokeCards jokes={jokes} />
        {/* button for refreshing jokes */}
        <StyledButton onClick={() => setRefresh(!refresh)}>↻</StyledButton>
      </StyledDiv>
      <Footer />
    </>
  )
}

export default AppPage