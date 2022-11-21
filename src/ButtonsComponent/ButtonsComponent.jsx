import { React, useState } from "react";
import { Button } from "react-bootstrap";
import "../Users/UsersComponent.css"

const ButtonsComponent = ({
  user,
  updateUser,
  name,
  email,
  getUserAndDelete,
  addUserBtn,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [city, setCity] = useState(user.address.city);
  const [street, setStreet] = useState(user.address.street);
  const [zipcode, setZipcode] = useState(user.address.zipcode);

  const [updatedUser, setUpdatedUser] = useState({});

  const getUpdatedData = () => {
    const obj = {
      ...user,
      name: name,
      email: email,
      address: { street: street, city: city, zipcode: zipcode },
    };
    setUpdatedUser({ updatedUser });
    updateUser(obj);

    alert("Updated");
  };

  const deleteUser = () => {
    getUserAndDelete(user.id);
  };
  return (
    <div>
      <Button
        style={{ float: "left" }}
        onMouseOver={() => setIsOpen(true)}
        onClick={() => setIsOpen(false)}
        className="otherData"
      >
        Other Data
      </Button>
      {isOpen ? (
        <div>
          <br /> <br />
          <span className="display-7">Street:</span>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="input"
          />
          <br />
          <span>City:</span>{" "}
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input"
          />
          <br />
          <span>zipcode:</span>
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            className="input"
          />
        </div>
      ) : null}

      <Button onClick={getUpdatedData}>Update</Button>
      <Button
        style={{ float: "right" }}
        onClick={deleteUser}
        className="btn-danger"
      >
        Delete
      </Button>
    </div>
  );
};

export default ButtonsComponent;
