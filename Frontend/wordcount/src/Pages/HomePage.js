import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/HomePage.css";
import Axios from "axios";

function HomePage() {
  const [linkaddress, setLinkAddress] = useState("");
  const [linkList, setLinkList] = useState([]);
  // const [fav,setFav]=useState([]);
  //delete url
  const deleteUrl = (id) => {
    Axios.delete(`http://localhost:5000/delete/${id}`);
  };
  //mark as fav
  const markFavorite = () => {
    alert("aaded to fav");
    //  Axios.post("http://localhost:5000/fav", {favUrl: linkaddress});
  };
  //saves link address to db
  const createText = () => {
    Axios.post("http://localhost:5000/insert", { linkaddress: linkaddress });
    alert("data saved ");
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((response) => {
      setLinkList(response.data);
    });
  }, []);
  return (
    <div className="searchbar">
      <Container>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Site URL "
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => setLinkAddress(e.target.value)}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            onClick={createText}
          >
            Count Words
          </button>
        </div>
      </Container>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">URL</th>
            <th scope="col">Word Count</th>
            <th scope="col">Favourite</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        {linkList.map((links, key) => {
          return (
            <tbody key={key}>
              <tr>
                <th scope="row">{links.length}</th>
                <td>{links.linkaddress}</td>
                <td>{links.linkaddress.length}</td>
                <td>
                  <Button
                    variant="outline-success"
                    onClick={() => markFavorite()}
                  >
                    Favourite
                  </Button>
                </td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteUrl(links._id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>  
    </div>
  );
}

export default HomePage;
