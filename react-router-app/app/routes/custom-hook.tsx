import { useCounter } from "../hooks/useCounter";

export default function CustomHook() {
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
