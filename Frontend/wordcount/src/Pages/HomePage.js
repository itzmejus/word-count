import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/HomePage.css";

function HomePage() {
  const [text,setText]= useState('')
  const [fav,setFav]=useState(false)
  const createText=()=>{
    console.log(text);
  }
  const makeFav=()=>{
    setFav(true)
    console.log(fav);
  }
  return (
    <div className="searchbar">
      <Container>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter the Site URL "
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e)=>setText(e.target.value)}
          />
          <button
            class="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            onClick={createText}
          >
            Count Words
          </button>
        </div>
      </Container>
      <div className="result-table">
      <Container>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Domain Name</th>
              <th scope="col">WordCount</th>
              <th scope="col">favourite</th>
              <th scope="col">Web-Links</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{text}</td>
              <td>{text.length}</td>
              <td onClick={makeFav}>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </Container>
      </div>
    </div>
  );
}

export default HomePage;
