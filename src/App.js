import React, { useState } from "react";
import Name from './components/Name'
import SockJsClient from 'react-stomp';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const App = () => {

  const[name, setNameState] = useState("")

  setName = (name) => {
    console.log(name);
    setNameState({name: name})
};

  return(
    <>
      <Name setName={setName}/>
      <div className="align-center">
        <h1>Welcome to Web Sockets</h1>
        <br/><br/>
      </div>
      <div className="align-center">
        User : <p className="title1"> {this.state.name}</p>
      </div>
      <div className="align-center">
        <br/><br/>
        <table>
          <tr>
            <td>
              <TextField id="outlined-basic" label="Enter Message to Send" variant="outlined"
                         onChange={(event) => {
                             this.setState({typedMessage: event.target.value});
                         }}/>
            </td>
            <td>
              <Button variant="contained" color="primary"
                      onClick={this.sendMessage}>Send</Button>
            </td>
          </tr>
        </table>
      </div>
                <br/><br/>
                <div className="align-center">
                    {this.displayMessages()}
                </div>
    </>
  )
}

export default App