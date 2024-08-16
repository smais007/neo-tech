import React from "react";

const Pagination = ({
  products,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
    >
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        style={{
          margin: "0 10px",
          width: "100px",
          padding: "10px 20px",
          backgroundColor: "transparent",
          color: "#323232",
          border: "0.6px solid #ccc",
          borderRadius: "5px",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={{
          margin: "0 10px",
          width: "100px",

          padding: "10px 20px",
          backgroundColor: "transparent",
          color: "#323232",
          border: "0.6px solid #ccc",
          borderRadius: "5px",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
