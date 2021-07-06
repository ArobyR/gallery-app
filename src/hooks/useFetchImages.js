import { useCallback, useEffect, useState } from "react";
import { accesKey, defaultRoute } from '../config/urls'

const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(true);

  const fetchImages = useCallback(async () => {

    let route = `${defaultRoute}${accesKey}`;

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
    setImages([])
  };

  return [images, isLoading, handleSubmit];
};

export default useFetchImages;
