import React, { useState}  from "react";
import Header from './components/Header.js';

import './App.css';

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
    </div>
  
  );
}

export default App;
