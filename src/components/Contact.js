import React from 'react';
import '../styles/Contact.css';

class Contact extends React.Component {
    constructor(){
      super();

      this.state = {
        name: '',
        email: '',
        phoneNumber: '',
        school: '',
        major: 'math',
        completion: 'yes',
        companyName: '',
        position: '',
        mainTasks: '',
        dateFrom: '2018',
        dateEnd: '2021',
      }
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);

    this.setState({
        name: '',
        email: '',
        phoneNumber: '',
        school: '',
        major: 'math',
        completion: 'yes',
        companyName: '',
        position: '',
        mainTasks: '',
        dateFrom: '2018',
        dateEnd: '2021',
    })
  }

  render(){
    return (
      <div>
        <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Contact Info</legend>
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" type="text" placeholder="Full Name" value={this.state.name} onChange={e => this.handleChange(e) } />
            <br />
            <label htmlFor="email">Email:</label>
            <input name="email" id="email" type="email" placeholder="Email Address" value={this.state.email} onChange={e => this.handleChange(e) }  />
            <br />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input name="phoneNumber" id="phoneNumber" type="tel" placeholder="Phone Number" maxLength="9" value={this.state.phoneNumber} onChange={e => this.handleChange(e) }  />
          </fieldset>
          <br />
            <fieldset>
              <legend>Education</legend>
              <label htmlFor="school">University:</label>
              <input name="school" id="school" type="text" placeholder="University" value={this.state.school} onChange={e => this.handleChange(e)} />
              <br />
              <label htmlFor="major">Major:</label>
              <select id="major" name="major" value={this.state.major} onChange={e => this.handleChange(e) }>
                <option value="math">Mathematics</option>
                <option value="computer science">Computer Science</option>
                <option value="economics">Economics</option>
                <option value="physics">Physics</option>
                <option value="biology">Biology</option>
                <option value="philosophy">Philosophy</option>
                <option value="political science">Political Science</option>
              </select>
              <br />
              <label htmlFor="completion">Graduated:</label>
              <select id="completion" name="completion" value={this.state.completion} onChange={e => this.handleChange(e) }>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="in progress">In Progress</option>
              </select>
            </fieldset>
          <br />
          <fieldset>
            <legend>Practical Experience</legend>
            <label htmlFor="companyName">Company Name:</label>
            <input name="companyName" id="companyName" type="text" placeholder="Company Name" value={this.state.companyName} onChange={e => this.handleChange(e) } />
            <br />
            <label htmlFor="position">Position:</label>
            <input name="position" id="position" type="text" placeholder="Position" value={this.state.position} onChange={e => this.handleChange(e) }  />
            <br />
            <label htmlFor="mainTasks">Main Tasks:</label>
            <textarea id="mainTasks" name="mainTasks" placeholder="What were you responsible for?" maxLength="100" value={this.state.mainTasks} onChange={e => this.handleChange(e) } />
            <br />
            <label htmlFor="dateFrom">Started:</label>
            <select id="dateFrom" name="dateFrom" value={this.state.dateFrom} onChange={e => this.handleChange(e) }>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
            <br />
            <label htmlFor="dateEnd">Ended:</label>
            <select id="dateEnd" name="dateEnd" value={this.state.dateEnd} onChange={e => this.handleChange(e) }>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    )
  }
}

export default Contact;
