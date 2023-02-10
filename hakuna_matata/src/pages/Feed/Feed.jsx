import { Link } from "react-router";
import Modal from "react-modal";
import { useState } from "react";
import FeedModal from "../../components/FeedModal/FeedModal";
import posts from "../../dummy_db";
import PostCard from "../../components/PostCard/postCard";

function Feed({ favArr }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);

  const modalOpen = (post) => {
    setModalContent(<FeedModal post={post} />);
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
      <img id="square-logo" />
      <input type="text" name="city" id="city" />
      <input type="number" name="miles" id="miles" min={0} step={5} />
      <img id="gear-icon" />
      <h3>Offers Near You</h3>
      {posts.map((post) => {
        return <PostCard post={post} favArr={favArr} onClick={modalOpen(post)} />
      })}
    </div>
  );
}

export default Feed;
