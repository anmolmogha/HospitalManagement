import { useRef } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function Appointments() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust the value to control the scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust the value to control the scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const cardsData = [
    {
      title: "Card title 1",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      lastUpdated: "Last updated 3 mins ago",
      imageSrc: "...", // replace with actual image URL
    },
    {
      title: "Card title 2",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      lastUpdated: "Last updated 3 mins ago",
      imageSrc: "...", // replace with actual image URL
    },
    {
      title: "Card title 3",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      lastUpdated: "Last updated 3 mins ago",
      imageSrc: "...", // replace with actual image URL
    },
  ];

  return (
    <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
      <button
        onClick={scrollLeft}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "rgba(255,255,255,0.8)",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem",
        }}
      >
        <FaLongArrowAltLeft />
      </button>
      <button
        onClick={scrollRight}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "rgba(255,255,255,0.8)",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem",
        }}
      >
        <FaLongArrowAltRight />
      </button>
      <div
        ref={scrollContainerRef}
        style={{
          display: "flex",
          overflowX: "auto",
          marginTop: "1.5rem",
          height: "200px",
          maxWidth: "1000px",
          scrollBehavior: "smooth", // Ensures smooth scrolling
        }}
      >
        {cardsData.map((card, index) => (
          <div
            className="card mb-3"
            style={{
              maxWidth: "540px",
              width: "540px",
              flex: "0 0 auto", // Prevents cards from shrinking or growing
              marginRight: "1rem",
            }}
            key={index}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={card.imageSrc}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ whiteSpace: "normal" }}>
                    {card.title}
                  </h5>
                  <p className="card-text" style={{ whiteSpace: "normal" }}>
                    {card.text}
                  </p>
                  <p className="card-text" style={{ whiteSpace: "normal" }}>
                    <small className="text-body-secondary">
                      {card.lastUpdated}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;
