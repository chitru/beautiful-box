import React, { useState } from "react";
import StatesDropdown from "./States";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
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

  let data = [
    {
      title: "Name",
      name: fields.name
    },
    {
      title: "Email",
      name: fields.email
    },
    {
      title: "Phone",
      name: fields.phone
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

  const handleSubmit = e => {
    e.preventDefault();
    const val = [...fields];
    setFields(val);
    console.log("Fields.value", fields);

    // return (
    //   <div className="table">
    //     <DataTable title="Personal Information" columns={columns} data={data} />
    //   </div>
    // );
  };

  const handleChange = (idx, e) => {
    const values = [...fields];
    switch (e.target.name) {
      case "name":
        values[idx].name = e.target.value;
        break;
      case "email":
        values[idx].email = e.target.value;
        break;
      case "phone":
        values[idx].phone = e.target.value;
        break;
      case "dob":
        values[idx].dob = e.target.value;
        break;
      case "street":
        values[idx].street = e.target.value;
        break;
      case "city":
        values[idx].city = e.target.value;
        break;
      case "zip":
        values[idx].zip = e.target.value;
        break;
      case "stateName":
        values[idx].stateName = e.target.value;
        break;
      case "country":
        values[idx].country = "Australia";
        break;
      default:
        throw new Error();
    }
    setFields(values);
    console.log(values);
  };

  const handleAdd = e => {
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
                  onChange={e => handleChange(idx, e)}
                  name="country"
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
          <button type="submit" className="btn" onClick={e => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
      <div className="table">
        <DataTable title="Personal Information" columns={columns} data={data} />
      </div>
    </>
  );
};

export default App;
