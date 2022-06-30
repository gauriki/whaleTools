import Left from "./leftTrending";
import Right from "./rightTrending";
import ListHere from "./listHere";
import ActivePair from "./activePair";
const Main = () => {
  return (
    <main className="ml-6">
      <div className="flex">
        <Left />
        <Right />
        <ListHere />
      </div>
      <ActivePair />
    </main>
  );
};

export default Main;
