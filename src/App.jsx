import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-12 mb-7">
        Course Registration
      </h2>
      <div className="flex gap-6">
        <Cards></Cards>
        <Cart></Cart>
      </div>
    </>
  );
}

export default App;
