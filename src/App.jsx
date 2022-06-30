import Drawer from "./components/drawer";
import Page from "./components/page";

function App() {
  return (
    <div className="flex h-screen scroll-auto">
      <Drawer />
      <Page />
    </div>
  );
}

export default App;
