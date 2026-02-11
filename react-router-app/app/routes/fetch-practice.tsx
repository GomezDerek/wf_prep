import { useEffect, useState } from 'react'

// type ChildType = {text: string}
// function Child({text}: ChildType) {
//   useEffect(()=>{
//     console.log('child useEffect()');
//   });
//   return <p>{text}</p>
// }

export default function FetchRoute({defaultDog="200"}) {
  // goal: fetch from the http dogs API
  /**
   *  in React, we fetch APIs in useEffect()
   *    useEffect() -> after onMount, (when a dep arr var is updated), before unMount (clean-up)
   *    
   *    1. make the request
   *    2. update state with request response
   *    
   *    
   *    fetch after break, and integrate custom hook
   */

  // const response = await fetch("https://http.dog/", Request());
  // const [httpDog, setHttpDog] = useState<string>(defaultDog);\
  interface Post {
    userId: string, 
    id: string, 
    title: string,
    body: string,
  }

  const [post, setPost] = useState<Post>({userId: "", id: "", title: "", body: ""});

  useEffect(()=>{
    const getPost = async () => {
      try {
        // const response = await fetch("https://http.cat/status/404");
        // const response = await fetch("https://http.dog/200");
        // const response = await fetch('https://corsproxy.io?' + encodeURIComponent('https://http.dog/200'));
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log('response: ', response);
        if (!response.ok) throw new Error("Error occurred");

        const JSONresponse = await response.json();
        console.log(JSONresponse);
        
        setPost(JSONresponse);
      }
      catch(error) {
        console.error(error);
      }
    }
    getPost();
  },[]);

  return (
    <>
      <h1>FetchRoute</h1>
      <h2>{"title: " + post.title}</h2>
      <p>{"body: "+ post.body}</p>
      {/* <Child text={httpDog} /> */}
      {/* <button onClick={()=>setHttpDog(httpDog + " ")}>rerender</button> */}
    </>
  )
}
