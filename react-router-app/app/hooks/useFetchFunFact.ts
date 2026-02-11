import { useState, useEffect } from 'react';

export type FunFactHookType = [
    string, 
    React.Dispatch<React.SetStateAction<string>>, 
    ()=>void
];

export default function useFetchFunFact(): FunFactHookType {
    const [funFact, setFunFact] = useState<string>('');
    
    const getDogFact = async () => {
        try {
            const response = await fetch("https://dogapi.dog/api/v2/facts?limit=1");
            if (!response.ok) throw new Error('Error occured');
            const JSONResponse = await response.json();
            setFunFact(JSONResponse.data[0].attributes.body)
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {getDogFact()}, []);

    return [funFact, setFunFact, getDogFact];
}