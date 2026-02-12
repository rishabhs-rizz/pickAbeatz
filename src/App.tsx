import "./App.css";
import FrontPage from "./components/FrontPage";
import { useIsUserReadyStore } from "./utils/store";

function App() {
  const { ready } = useIsUserReadyStore();
  return (
    <>
      {!ready && <FrontPage />}
      {ready && (
        <div className="w-screen h-screen bg-zinc-800 flex flex-col gap-3 items-center justify-center">
          <h1 className="text-center">Swaad la ditta baabe </h1>
          <h3 className="text-center">
            hude ji bajata mai Mooosewallaaaaaa......
          </h3>
        </div>
      )}
    </>
  );
}

export default App;
