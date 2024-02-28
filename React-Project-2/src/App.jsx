import ListItem from "./components/ListItem";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="Container mx-auto">
      <h5>Shopping List</h5>
      <ShoppingList />
      <ListItem />
    </div>
  );
}

export default App;
