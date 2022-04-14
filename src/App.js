import React, { useState}  from "react";
import Header from './components/Header.js';

import './App.css';
import Management from "./components/Management.js";


function App() {
  // const [view, setView] = useState('Login')
  // if (view == 'Management') {
  //   return(
  //     <Layout>
  //       <Header setView={setView}/>
  //       <TimeSheet/>
  //     </Layout>

  //   )
  // }
  return (
    <div>
      <Header/>
      <Management/>
    </div>
  
  );
}

export default App;
