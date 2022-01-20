import React, { useEffect , useState } from "react";
import "./App.css";
import Header from './mainFolder/Header/Header'
import Search from './mainFolder/SearchTitle/search'
import Card from './mainFolder/cardsNews/cards'
import Preloader from "./mainFolder/prefolder/preloader";



function App() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("apple");
  const url = `https://newsapi.org/v2/everything?q=${search || 'apple'}&apiKey=0868b08e02544046a92c71370b8e87a0`;

  useEffect(() => {
    setLoading(true);
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .then(() => setLoading(false));
  }, [url]);

  return (
    <div className="app_container">
      <Header />
      <Search callback={(value) => setSearch(value)} />
      <div>
        {loading ? (
          <Preloader />
        ) : newsData && newsData.length > 0 ? (
          newsData.map((item, i) => <Card news={item} key={i + 1} />)
        ) : (
          <p style={{textAlign: 'center'}}>Ooops! page not found</p>
        )}
      </div>
    </div>
  );
}

export default App;