import{a,w as r,p as n}from"./chunk-EPOLDU6W-BovR89Y_.js";function i(){const[s,e]=a.useState(""),o=async()=>{try{const t=await fetch("https://dogapi.dog/api/v2/facts?limit=1");if(!t.ok)throw new Error("Error occured");const c=await t.json();e(c.data[0].attributes.body)}catch(t){console.error(t)}};return a.useEffect(()=>{o()},[]),[s,e,o]}const l=r(function(){const[e,o,t]=i();async function c(){await t()}return n.jsxs("div",{className:`
                flex flex-col
                items-center
                gap-4
                m-4
                p-4
                h-[calc(100vh-2rem)]
                bg-gray-700
            `,children:[n.jsx("button",{className:`
                    bg-white 
                    text-black 
                    py-1 
                    px-2.5
                    rounded-md
                    hover:bg-gray-300 
                    transition-colors 
                `,onClick:c,children:"Get New Dog Fact"}),n.jsx("br",{}),n.jsx("p",{children:"Dog fact:"}),n.jsx("p",{className:"text-center",children:e})]})});export{l as default};
