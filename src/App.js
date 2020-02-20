import React, { Component } from "react";
import StatesDropdown from "./States";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import DataTable from "react-data-table-component";

const headText = {
  textAlign: "center",
  margin: "20px",
  textTransform: "uppercase",
  fontWeight: "bold",
  letterSpacing: "0.566px"
};

const data = [
  {
    id: 1,
    title: "Name",
    name: "James Hetfield"
  },
  {
    id: 2,
    title: "Email",
    name: "james@alltheworld.com"
  }
];

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Information",
    selector: "name",
    sortable: true,
    right: true
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      dob: new Date(),
      street: "",
      city: "",
      zip: "",
      stateName: "",
      country: "Australia"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleChangeDate = date => {
    this.setState({
      dob: date
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleBtnAdd(evt) {
    evt.preventDefault();
    console.log("Adding");
  }

  render() {
    return (
      <>
        <div className="top">
          <h2 style={headText}>Hey there, Let's get started</h2>
        </div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="name"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                onChange={this.handleChange}
                name="email"
                placeholder="John@gmail.com"
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="number"
                onChange={this.handleChange}
                name="phone"
                placeholder="0449797987"
              />
            </div>
            <div>
              <label>DOB</label>
              <DatePicker
                selected={this.state.dob}
                onChange={this.handleChangeDate}
                name="dob"
              />
            </div>
            <div>
              <label>Street</label>
              <input
                type="text"
                value={this.state.street}
                onChange={this.handleChange}
                name="street"
                placeholder="Victoria St"
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                value={this.state.city}
                onChange={this.handleChange}
                name="city"
                placeholder="Legend"
              />
            </div>
            <div>
              <label>Zip</label>
              <input
                type="number"
                value={this.state.zip}
                onChange={this.handleChange}
                name="zip"
                placeholder="9100"
              />
            </div>
            <div>
              <StatesDropdown
                label="State"
                onChange={this.handleChange}
                name="stateName"
              />
            </div>
            <div>
              <label>Country</label>
              <input
                type="text"
                value={this.state.country}
                name="country"
                disabled
              />
            </div>
            <div>
              <input type="submit" value="Submit" className="btn" />
              <br />
              <input
                type="submit"
                onClick={this.handleBtnAdd}
                value="Add a Person"
                className="btn"
              />
            </div>
          </form>
        </div>
        <div className="table">
          <DataTable
            title="Personal Information"
            columns={columns}
            data={data}
          />
        </div>
      </>
    );
  }
}

export default App;
