import { useState } from "react";
import "./App.css";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SeachBar from "./components/SeachBar";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    // console.log(term, "hello");
    const result = await searchImages(term);
    // console.log(result, "result");
    setImages(result);
  };
  return (
    <div className="App">
      <SeachBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
