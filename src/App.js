import React from 'react';
import logo from './logo.svg';
import './App.css';
import SockJsClient from 'react-stomp';

function App() {
  return (
      <div>
          <h1>test</h1>
		  <SockJsClient url='http://localhost:8080/ws/'
    topics={['/topic/user']}
    onConnect={() => {
        console.log("connected");
    }}
    onDisconnect={() => {
        console.log("Disconnected");
    }}
    onMessage={(msg) => {
        console.log(msg);
    }}
    //ref={(client) => {
      //  this.clientRef = client
//}}
/>	  
      </div>
  )}
export default App;
