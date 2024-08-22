import './App.css';

// import Default from './screens/Default';
// import FilterableProductTable from "./screens/FilterableProductTable";

import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar';


function App() {

  return (
    <div className="App">
      {/* <Default /> */}
      {/* <FilterableProductTable products={PRODUCTS}/> */}

      <NavBar />
      <Outlet/>

    </div>
  );
}

export default App;
