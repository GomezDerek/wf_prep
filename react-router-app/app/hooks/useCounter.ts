import { useState } from "react";

// type Counter = [number, ()=>void, ()=>void];
interface Counter {
    counter: number, 
    increment: ()=>void, 
    decrement: ()=>void
}

// arrow function 
// export const useCounter = (count: number): Counter => {
//         const [counter, setCounter] = useState<number>(count);
        
//         const decrement: ()=>void = () => {
//             setCounter(counter-1);
//         } 
    
//         const increment: ()=>void = () => {
//             setCounter(counter+1);
//         } 
    
//         // return [counter, decrement, increment];
//         return {counter, decrement, increment};
// }

//
export function useCounter(count: number): Counter {
    const [counter, setCounter] = useState<number>(count);
    
    const decrement: ()=>void = () => {
        setCounter(counter-1);
    } 

    const increment: ()=>void = () => {
        setCounter(counter+1);
    } 

    // return [counter, decrement, increment];
    return {counter, decrement, increment};
}