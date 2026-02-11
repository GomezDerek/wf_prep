import { useState } from "react";

interface Counter {
    counter: number, 
    increment: ()=>void, 
    decrement: ()=>void
}

// arrow function version
// export const useCounter = (count: number): Counter => {
//         const [counter, setCounter] = useState<number>(count);
        
//         const decrement: ()=>void = () => {
//             setCounter(counter-1);
//         } 
    
//         const increment: ()=>void = () => {
//             setCounter(counter+1);
//         } 
    
//         return {counter, decrement, increment};
// }

// function declaration version
export function useCounter(count: number): Counter {
    const [counter, setCounter] = useState<number>(count);
    
    const decrement: ()=>void = () => {
        setCounter(counter-1);
    } 

    const increment: ()=>void = () => {
        setCounter(counter+1);
    } 

    return {counter, decrement, increment};
}