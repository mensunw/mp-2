import { Joke } from "./../../interfaces/Joke.ts";
import JokeCards from "./../ui/JokeCards.tsx";
import { useState, useEffect } from "react";

function AppPage() {
  /* state for storing the jokes in a list */
  const [jokes, setJokes] = useState<Joke[]>([]);

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
  }, [])

  return (
    <>
      {/* display each joke card with JokeCards component */}
      <JokeCards jokes={jokes} />
    </>
  )
}

export default AppPage