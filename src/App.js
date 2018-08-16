import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        username : '',
        password:'',
        description:'',
        gender:0,
        chooseLang:'en',
        status: true
    };
  }

  //user mutiple input
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value === 'checkbox' ? target.checked : target.value ;
    this.setState({
      [name]: value
    })
    
  }

  onHandleSubmit = (event) =>{
    event.preventDefault(); 
    console.log(this.state);
  }


  render() {

    return (
      <div className="container">

      <form onSubmit={this.onHandleSubmit}>
        <legend>Form title</legend>
  
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" name="username" onChange={this.onHandleChange} value={this.state.username} />
        </div>
  
        <div className="form-group">
          <label>password</label>
          <input type="password" className="form-control" name="password" onChange={this.onHandleChange} value={this.state.password}
          />
        </div>
  
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" rows="3" required="required" name="description" onChange={this.onHandleChange}>
          </textarea>
        </div>
  
        <div className="form-group">
          <label > Gender </label>
          <select  name="gender" onChange={this.onHandleChange} >
            <option value={0} defaultValue={this.state.gender===0 }> Male </option>
            <option value={1} defaultValue={this.state.gender===1 }> Female </option>
          </select>
        </div>

        <div className="radio">
          <label>
              <input type="radio" className="mr-1"   name="chooseLang" value="en" onChange={this.onHandleChange} checked={this.state.chooseLang === "en"} />
              English
          </label><br />
          <label>
              <input type="radio" className="mr-1" name="chooseLang" value="de"  onChange={this.onHandleChange}  checked={this.state.chooseLang === "de"}/>
              German
          </label>
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" name="status" className="mr-1" value={true}  onChange={this.onHandleChange} checked={this.state.status === true} />
            status
          </label>
        </div>


        <br />
  
        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        <button type="reset" className="btn btn-warning text-white">Reset</button>
      </form>
  
    </div>
    );
  }
}

export default App;
