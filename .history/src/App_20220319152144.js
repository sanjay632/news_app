
import './App.css';


// import React, { Component } from 'react'>>>>>>>>>>>> class base

import React,{useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter,Route,Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
  const App =()=>{

// 74d2dd5553924d7c9adadba75aa5208d
 const pageSize=5;
apiKey=process.env.REACT_APP_NEWS_API


// state = {   ==========>>>>>>>class base
//   progress:0
// }
const [progress, setProgress] = useState(0)

// setProgress =(progress)=>{ ---------------->>>class base
//   setState({progress: progress})
// }
// render() {---------------->class base
  return (
<div>
<BrowserRouter>

<NavBar/>
<LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
    <Routes>
          <Route exact path="/"element=       {<News setProgress={setProgress}apikey={apiKey} key="htt" pageSize={pageSize} country="in"category="general"/>}/>
          <Route exact path="/science"element={<News setProgress={setProgress}apikey={apiKey} key="science" pageSize={pageSize} country="in"category="science"/>}/>
          <Route exact path="/business"element={<News setProgress={setProgress}apikey={apiKey} key="business" pageSize={pageSize} country="in"category="business"/>}/>
          <Route exact path="/entertainment"element={<News setProgress={setProgress}apikey={apiKey} key="entertainment" pageSize={pageSize} country="in"category="entertainment"/>}/>
          <Route exact path="/health"element={<News setProgress={setProgress}apikey={apiKey} key="health" pageSize={pageSize} country="in"category="health"/>}/>
          <Route exact path="/sports"element={<News setProgress={setProgress}apikey={apiKey} key="sports" pageSize={pageSize} country="in"category="sports"/>}/>
          <Route exact path="/technology"element={<News setProgress={setProgress}apikey={apiKey} key="technology" pageSize={pageSize} country="in"category="technology"/>}/>
          <Route exact path="/general"element={<News setProgress={setProgress}apikey={apiKey} key="general" pageSize={pageSize} country="in"category="general"/>}/>

      
         
       
  </Routes>
  
  </BrowserRouter>
  </div>
      )
    }
  
// }