import React from 'react';
import './styles/App.css';
import Contact from './components/Contact';
import InfoAdded from './components/InfoAdded';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      contactInfo: null,
      editMode: false,
    }
  }

  handleSubmit = (obj) => {
    //console.log('App component got: ', obj);
    this.setState({
      contactInfo: obj
    })
  }

/*
  enableEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    }, ()=> console.log(this.state.editMode))
  }
*/

  render(){
  return (
    <div className="App">
      <h1>CV Application</h1>
      <Contact handleSubmit={obj => this.handleSubmit(obj)} />

      {/*<button onClick={this.enableEdit}>Edit</button>*/}
      {/*  <p>{JSON.stringify(this.state.contactInfo, null, 2)}</p>*/}

      { this.state.contactInfo !== null ? <InfoAdded data={this.state.contactInfo} /> : "" }
    </div>
  );
  }
}
export default App;
