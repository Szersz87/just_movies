import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";


function PreviewModal({ isOpen, onRequestClose, videoUrl }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube Video"
        allowFullScreen
      ></iframe>
      <button onClick={onRequestClose}>Close</button>
    </ReactModal>
  );
}

PreviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  videoUrl: PropTypes.string.isRequired
};


export default PreviewModal;
