import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";


function PreviewModal({ isOpen, onRequestClose, videoUrl }) {
  console.log("Is modal open?", isOpen);
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <iframe
        src={videoUrl}
        title="YouTube Video"
        allowFullScreen
      ></iframe>
      <button onClick={onRequestClose}>Close</button>
   
    </ReactModal>
  );
}

PreviewModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  videoUrl: PropTypes.string.isRequired
};


export default PreviewModal;
