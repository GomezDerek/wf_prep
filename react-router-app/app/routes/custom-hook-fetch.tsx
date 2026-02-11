import useFetchFunFact from "~/hooks/useFetchFunFact";

export default function CustomHookFetchRoute() {
  //no need to type it since useFetchFunFact is type it is inferred here
  const [funFact, getDogFact] = useFetchFunFact();

  // doesn't need to be async as getDogFact is async already and will wait there.
  function handleClick() {
    getDogFact();
  }

  return (
    <div className="flex flex-col items-center gap-4 m-4 p-4 h-[calc(100vh-2rem)]bg-gray-700">
      <button className="bg-white text-black py-1 px-2.5 rounded-md hover:bg-gray-300 transition-colors" onClick={handleClick}>
        Get New Dog Fact
      </button>
      <br />
      <p>Dog fact:</p>
      <p className="text-center">{funFact}</p>
    </div>
  );
}
