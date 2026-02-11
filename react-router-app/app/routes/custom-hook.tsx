import type { Route } from "./+types/home";
import { useCounter } from "../hooks/useCounter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // const [counter, decrement, increment] = useCounter(0);
  const {counter, decrement, increment} = useCounter(0);

  return ( 
  <>
    <p>Custom hook:</p>
    <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
      <button onClick={decrement}>
        {`<`}
      </button>
      <p style={{margin: '1rem'}}>
        {counter}
      </p>
      <button onClick={increment}>
        {`>`}
      </button>
    </div>
  </>
  )
}
