import React from "react";
import "./index.css";

const Modal = ({
  isOpen,
  onClose,
  event,
  onNext,
  onPrevious,
  isNextDisabled,
  isPrevDisabled,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>

        {/* Image Container */}
        <div className="modal-image-container">
          {/* Previous Button */}
          <button
            className="modal-nav-btn left"
            onClick={onPrevious}
            disabled={isPrevDisabled}
          >
            &#8249;
          </button>

          {/* Image */}
          <img
            src={event.image ? `http://localhost:1337${event.image}` : ""}
            alt={event.title}
            className="modal-image"
          />

          {/* Next Button */}
          <button
            className="modal-nav-btn right"
            onClick={onNext}
            disabled={isNextDisabled}
          >
            &#8250;
          </button>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <h2 className="modal-title playfair-display">{event.title}</h2>
          <p className="modal-date playfair-display">{event.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;