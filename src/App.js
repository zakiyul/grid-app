import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <div>
      <Provider store={store}></Provider>
    </div>
  );
}

export default App;
