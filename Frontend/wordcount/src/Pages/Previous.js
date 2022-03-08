import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Previous() {
  const [prev, setPrev] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((res) => {
      setPrev(res.data);
    });
  }, []);
  //delete url
  const deleteUrl = (id) => {
    alert("deleted");
    Axios.delete(`http://localhost:5000/delete/${id}`);
  };

  // //get the total word in the url
  // useEffect(() => {
  //   fetch("https://api.github.com")
  //     .then(function (response) {
  //       // The API call was successful!
  //       return response.text();
  //       // console.log(response);
  //     })
  //     .then(function (html) {
  //       // This is the HTML from our response as a text string
  //       console.log(html);
  //       console.log(html.length);
  //     })
  //     .catch(function (err) {
  //       // There was an error
  //       console.warn("Something went wrong.", err);
  //     });
  // },[]);
  return (
    <div>
      <h1>Previous</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">URL</th>
          </tr>
        </thead>
        {prev.map((links, key) => {
          return (
            <tbody key={key}>
              <tr>
                <td>{links.linkaddress}</td>
              </tr>
              <tr>
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

export default Previous;
