import useFetchFunFact, { type FunFactHookType } from "~/hooks/useFetchFunFact";

export default function CustomHookFetchRoute() {
    const [
        funFact, 
        setFunFact, 
        getDogFact
    ]: FunFactHookType = useFetchFunFact();
    
    async function handleClick() {
        await getDogFact();
    }

    return (
        <div 
            style={{
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                margin: '1rem',
                padding: '1rem',
                height: 'calc(100vh - 2rem)',
                backgroundColor: '#333',
            }}
        >
            <h1>CustomHookFetchRoute</h1>
            <button 
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '0.2rem 0.6rem',
                }}
                onClick={handleClick}
            >
                Get Dog Fact
            </button>
            <br />
            <p>Dog fact:</p>
            <p>{funFact}</p>
        </div>
  )
}
