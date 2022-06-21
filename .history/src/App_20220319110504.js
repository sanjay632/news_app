
import './App.css';


import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter,Route,Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

// 74d2dd5553924d7c9adadba75aa5208d
pageSize=5;
apiKey="74d2dd5553924d7c9adadba75aa5208d";
state = {
  progress:0
}
setProgress =(progress)=>{
  this.setState({progress: progress})
}
render() {
  return (
<div>
<BrowserRouter>

<NavBar/>
<LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
    <Routes>
          <Route exact path="/"element=       {<News setProgress={this.setProgress}apikey={this.apiKey} key="htt" pageSize={this.pageSize} country="in"category="general"/>}/>
          <Route exact path="/science"element={<News setProgress={this.setProgress}apikey={this.apiKey} key="science" pageSize={this.pageSize} country="in"category="science"/>}/>
          <Route exact path="/business"element={<News setProgress={this.setProgress}apikey={this.apiKey} key="business" pageSize={this.pageSize} country="in"category="business"/>}/>
          <Route exact path="/entertainment"element={<News setProgress={this.setProgress}apikey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in"category="entertainment"/>}/>
          <Route exact path="/health"element={<News setProgress={this.setProgress}apikey={this.apiKey} key="health" pageSize={this.pageSize} country="in"category="health"/>}/>
          <Route exact path="/sports"element={<News setProgress={this.setProgress}apikey={this.apiKey} key="sports" pageSize={this.pageSize} country="in"category="sports"/>}/>
          <Route exact path="/technology"element={<News setProgress={this.setProgress}apikey={this.apiKey} key="technology" pageSize={this.pageSize} country="in"category="technology"/>}/>
          <Route exact path="/general"element={<News setProgress={this.setProgress}apikey={this.apiKey} key="general" pageSize={this.pageSize} country="in"category="general"/>}/>

      
         
       
  </Routes>
  
  </BrowserRouter>
  </div>
      )
    }
  
}