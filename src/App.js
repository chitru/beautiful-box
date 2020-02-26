import React, { useState } from "react";
import StatesDropdown from "./States";
// import DatePicker from "react-datepicker";
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

const App = () => {
  const [fields, setFields] = useState([
    {
      name: "",
      email: "",
      phone: "",
      dob: "",
      street: "",
      city: "",
      zip: "",
      stateName: "",
      country: "Australia"
    }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Fields", fields);
    let data = [
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

    let columns = [
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

    return (
      <div className="table">
        <DataTable title="Personal Information" columns={columns} data={data} />
      </div>
    );
  };

  const handleChange = e => {
    console.log("Fields", fields);
    // console.log(evt.target.name);
    setFields("fields");
    // const values = [...fields];
    // if(e.target.name === "name"){

    // }
    // e.target.name = e.target.value;
  };

  const handleAdd = () => {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  };

  const handleRemove = i => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };

  return (
    <>
      <div className="top">
        <h2 style={headText}>Hey there, Let's get started</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          {fields.map((fields, idx) => (
            <div key={`${fields}-${idx}`}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={fields.name}
                  onChange={e => handleChange(idx, e)}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="John@gmail.com"
                  value={fields.email}
                  onChange={e => handleChange(idx, e)}
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="0449797987"
                  value={fields.phone}
                  onChange={e => handleChange(idx, e)}
                />
              </div>
              <div>
                <label>DOB</label>
                <input
                  name="dob"
                  value={fields.dob}
                  placeholder="09/09/1999"
                  onChange={e => handleChange(idx, e)}
                />
              </div>
              <div>
                <label>Street</label>
                <input
                  type="text"
                  name="street"
                  placeholder="Victoria St"
                  value={fields.street}
                  onChange={e => handleChange(idx, e)}
                />
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Legend"
                  value={fields.city}
                  onChange={e => handleChange(idx, e)}
                />
              </div>
              <div>
                <label>Zip</label>
                <input
                  type="number"
                  name="zip"
                  placeholder="9100"
                  value={fields.zip}
                  onChange={e => handleChange(idx, e)}
                />
              </div>
              <div>
                <StatesDropdown
                  label="State"
                  name="stateName"
                  value={fields.stateName}
                  onChange={e => handleChange(idx, e)}
                />
              </div>
              <div>
                <label>Country</label>
                <input
                  type="text"
                  value={fields.country}
                  name="country"
                  disabled
                />
              </div>
              <div>
                <button
                  className="btn"
                  type="button"
                  onClick={() => handleAdd()}
                >
                  Add a Person
                </button>
                <button
                  className="btn"
                  type="button"
                  onClick={() => handleRemove()}
                >
                  Remove Personal
                </button>
              </div>
            </div>
          ))}
        </div>
      </form>
      {/* <div className="table">
        <DataTable title="Personal Information" columns={columns} data={data} />
      </div> */}
    </>
  );
  // }
};

export default App;
