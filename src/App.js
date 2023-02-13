import Bank from "./components/Bank";
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="md:container mx-auto">
        <Bank />
      </div>
    </Provider>
  );
}

export default App;
