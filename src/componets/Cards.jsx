import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState({
    urls: {
      regular: "",
    },
  });

  const fetchImages = async () => {
    const res = await fetch(
      "https://api.unsplash.com/photos/random/?client_id=nIihQyiofsiWqI_unzlKed-Vv4GDR4CogiHd6IykAYU"
    );
    const data = await res.json();
    console.log(data);
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  //   if (images.length === 0) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <>
      <Card image={images.urls.regular} />
      <Card image={images.urls.regular} />
      <Card image={images.urls.regular} />
    </>
  );
};

export default Cards;
