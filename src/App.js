import './App.css';
import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Form } from 'react-bootstrap'
class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      password: '',
      username: '',
      ramsize: '',
    });
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <>
        <Col style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Row>
            <Form.Label htmlFor="inputpassword">Password:</Form.Label>
            <Form.Control
              type="password"
              id="inputpassword"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Row>          
          <Row>
            <Form.Label htmlFor="inputusername">Username: </Form.Label>
            <Form.Control
              type="text"
              id="inputusername"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </Row>
          <Row>
            <Form.Label htmlFor="inputramsize">Ram size: </Form.Label>
            <Form.Control
              type="text"
              id="inputramsize"
              name="ramsize"
              value={this.state.ramsize}
              onChange={this.handleInputChange}
            />
          </Row>
        </Col>

      </>
    );
  }
}
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     {/* <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a> */}
//   </header>
// </div>

export default App;
