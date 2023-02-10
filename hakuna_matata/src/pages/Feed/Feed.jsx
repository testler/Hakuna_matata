import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState, FeedModal } from "react";

function Feed({ favArr }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);

  const modalOpen = (e) => {
    e.preventDefault();
    setModalContent(
      <FeedModal
        post={{
          timeframe: "Post Timeframe",
          title: "Post Title",
          description: "Post Description",
          sold_out: "false",
          image: "",
        }}
      />
    );
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal className="modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
      </Modal>
      <button onClick={modalOpen}>open modal</button>
    </div>
  );
}

export default Feed;
