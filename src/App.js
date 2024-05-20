import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function fetchData() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const response = await request.json();

      setNews(response);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Spaceflight News</h1>
      {loading ? (
        <i>Loading...</i>
      ) : (
        <ul>
          {news.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
