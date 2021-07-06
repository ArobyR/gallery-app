import Card from "./Card";
import Loading from "./Loading";
import FormData from "./FormData";
import useFetchImages from "../hooks/useFetchImages";

const Cards = () => {
  const [images, isLoading, handleSubmit] = useFetchImages();

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
