import React,{useEffect,useState} from 'react'

function Favourite() {
  const [fav,setFav]=useState([]);
  
  //get the total word in the url
  useEffect(() => {
    fetch("https://api.github.com")
      .then(function (response) {
        // The API call was successful!
        return response.text();
        // console.log(response);
      })
      .then(function (html) {
        // This is the HTML from our response as a text string
        console.log(html);
        setFav(html)

        console.log(html.length);
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
  },[]);

  return (
    <div>
      <h1>Favourite</h1>
      {/* please check console */}
    </div>
  )
}

export default Favourite