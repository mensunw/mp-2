import { Joke } from "../../interfaces/Joke.ts";

function JokeCards(props: { jokes: Joke[] }) {
  return (
    <ul>
      {props.jokes.map((joke: Joke) => (
        <li key={joke.id}>
          Joke id: {joke.id}
        </li>
      ))}
    </ul>
  )
}

export default JokeCards