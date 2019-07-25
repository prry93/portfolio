import React from "react";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      input: '',
      submit: this.state.input
    })
  }
  render() {
    return (
      <div>
      
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} placeholder="name"></input>
          <button type="submit">Submit</button>
        </form>
        
      </div>
    )
  }
}

export default Contact;
