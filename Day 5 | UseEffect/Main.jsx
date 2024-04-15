import React, { useState, useEffect } from "react";
import "./App.css";
export default function App() {

  let [NewsData, setNewsData] = useState([]);
  let [Search, setSearch] = useState("India");
  let [x, setX] = useState(0);

  useEffect(()=>{
    async function GetData()
    {
      let Data = await fetch(`https://newsapi.org/v2/everything?q=${Search}&apiKey=20fd56da8c1247de82856d2fd80b1211`);
      Data = await Data.json();
      console.log(Data)
      setNewsData(Data.articles);

    }
    GetData();

  },[Search]);

  return (
    <div>
      <nav>
        <h2>Logo</h2>
        <div id="SearchBar">
          <input onChange={(e)=>{
            setSearch(e.target.value);
            console.log(Search);
          }} type="text" />
          <button>Search</button>
        </div>
        <ul>
          <li>Home</li>
          <li>Tech</li>
          <li>Business</li>
          <li>India</li>
        </ul>
        <button onClick={()=>{
            setX(x+1)
            console.log(x)
        }} >Toggle</button>
      </nav>

      <div id="Main">

        {
          NewsData.map((e)=>(
            
        <div className="Card">
        <div className="Image">
          <img src= {e.urlToImage} alt="" />
        </div>
        <div className="Content">
          <h2>{e.title}</h2>
          <h3>{e.description}</h3>
          <p>{e.publishedAt}</p>
          <button>Read More</button>
        </div>
      </div>
          ))
        }



        
      </div>
    </div>
  );
}
