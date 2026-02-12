import { useIsUserReadyStore } from "../utils/store";

const FrontPage = () => {
  const { SetUserIsReady } = useIsUserReadyStore();
  return (
    <div className="w-screen h-screen bg-zinc-800 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-center">ki haal chal ne</h1>
      <h3 className="text-center">Are you ready to Play the Songs</h3>
      <button onClick={() => SetUserIsReady()} className="h-12 w-24">
        LessGo
      </button>
    </div>
  );
};

export default FrontPage;
