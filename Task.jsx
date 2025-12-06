import { useEffect, useState } from "react";

function Task() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then(res => res.json())
      .then(data => {
        setQuotes(data.quotes.slice(0, 10)); 
      });
  }, []);

  return (
    <div className="block">
      {quotes.map(q => (
        <h1 key={q.id}>{q.quote}</h1>
      ))}
    </div>
  );
}

export default Task;