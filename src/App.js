import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Provider } from "react-redux"
import Crypto from "./components/Crypto"
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Crypto />
      </div>
    </Provider>
  );
};

export default App;
