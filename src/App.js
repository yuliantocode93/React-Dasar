import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const response = await request.json();

      setNews(response);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Spaceflight News</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
