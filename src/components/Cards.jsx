import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import FormData from "./FormData";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(true);

  const fetchImages = useCallback(async () => {
    const accesKey = "client_id=nIihQyiofsiWqI_unzlKed-Vv4GDR4CogiHd6IykAYU";

    let route = `https://api.unsplash.com/photos/?${accesKey}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${accesKey}`;
    }
    setLoading(true);
    const res = await fetch(route);
    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
    setLoading(false);
  }, [input]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setInput(text);
  };

  return (
    <>
      <FormData handleSubmit={handleSubmit} />
      {isLoading && <Loading />}

      <div className="row row-cols-lg-4 g-4">
        {images.map((img) => (
          <Card
            key={img.id}
            image={img.urls.regular}
            description={img.alt_description}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
