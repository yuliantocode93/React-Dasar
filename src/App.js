import "./App.css";
import { useEffect } from "react";

export default function App() {
  useEffect(function () {
    const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    console.log(getData);
  }, []);

  return <h1>fetch data</h1>;
}
