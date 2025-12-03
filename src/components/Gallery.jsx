import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Gallery({ images }) {
  const itemsPerPage = 20;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  useEffect(() => {
    setSearchParams({ page: currentPage });
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [searchParams, currentPage]);

  const start = (currentPage - 1) * itemsPerPage;
  const currentImages = images.slice(start, start + itemsPerPage);
  console.log(currentImages);

  function next(e) {
    e.preventDefault();
    setCurrentPage((p) => Math.min(p + 1, totalPages));
  }

  function previous(e) {
    e.preventDefault();
    setCurrentPage((p) => Math.max(p - 1, 1));
 
  }

  return (
    <>
      <div className="grid col-4-by-1">
        {images ? (
          currentImages?.map((image) => (
            <img src={image} alt="Imatinations Photography"  loading="lazy"/>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination-button">
          <button onClick={previous} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={next} disabled={currentPage == totalPages}>
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;
