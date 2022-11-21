import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const AddNewUserComponent = ({ newUser }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userStreet, setUserStreet] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userZipcode, setUserZipcode] = useState("");
  const [cancelBtn, setCancelBtn] = useState(false);
  //const [otherDataBtn, setOtherDataBtn] = useState(false)

  const sendNewUser=()=>{
    const newUserObj = {
      name: userName,
      email: userEmail,
      address: { street: userStreet, city: userCity, zipcode: userZipcode },
    };

    newUser(newUserObj);


  }

  return (
    <div>
      <Row>
        <Col></Col>

        {cancelBtn ? null : (
          <Col
            style={{
              border: "1px solid black",
              padding: "10px",
              boxShadow: "1px 1px 1px 1px",
            
            }}
          >
            {/* //! user name */}
            <h3>Add New User</h3> Name:
            <input
              type="text"
              className="mb-2"
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            {/* //!Email */}
            Email:
            <input
              type="text"
              className="mb-2"
              onChange={(e) => setUserEmail(e.target.value)}
            />{" "}
            <br />
            {/* //! address - city */}
            city:
            <input
              type="text"
              className="mb-2"
              onChange={(e) => setUserCity(e.target.value)}
            />
            <br />
            {/* zipcode */}
            Zipcode:
            <input
              type="text"
              className="mb-2"
              onChange={(e) => setUserZipcode(e.target.value)}
            />
            <br />
            Street:
            <input
              type="text"
              className="mb-2"
              onChange={(e) => setUserStreet(e.target.value)}
            />{" "}
            <br />
            <button
              onClick={() => setCancelBtn(!cancelBtn)}
              className="btn btn-danger m-3"
            >
              Cancel
            </button>
            <button onClick={sendNewUser} className="btn btn-primary m-3">
              Add
            </button>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default AddNewUserComponent;
