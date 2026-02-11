import { useState, useEffect } from "react";

//no need to type the setFunFact
export type FunFactHookType = [string, () => void];

export default function useFetchFunFact(): FunFactHookType {
  const [funFact, setFunFact] = useState<string>("");

  const getDogFact = async () => {
    try {
      const response = await fetch("https://dogapi.dog/api/v2/facts?limit=1");
      if (!response.ok) throw new Error("Error occured");
      const JSONResponse = await response.json();
      setFunFact(JSONResponse.data[0].attributes.body);
    } catch (error) {
      console.error(error);
    }
  };

  //great decision to outsource the getDog Func so you can reuse it on button click
  useEffect(() => {
    getDogFact();
  }, []);

  //no need to export the setFunfact as gotDogFact is using it interally to update the state for the instant
  return [funFact, getDogFact];
}
