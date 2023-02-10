import { ReactComponent as GearIcon } from "./setting2.svg";
import Modal from "react-modal";
import { useState } from "react";
import FeedModal from "../../components/FeedModal/FeedModal";
import PostCard from "../../components/PostCard/postCard";
import "./Favorites.css"


function Favorites({ favArr }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(<div />);

    const modalOpen = (post) => {
        setModalContent(<FeedModal post={post} />);
        setIsOpen(true);
    };

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div id="main-feed">
            <Modal className="modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
            <div id="feed-header">
                <img id="square-logo" alt="logo" src={process.env.PUBLIC_URL + "/logo1.svg"} />
                <img src={process.env.PUBLIC_URL + "/icon/pin2.svg"} alt="pin" />
                <input type="text" name="city" id="city" value="Los Angeles" />
                <select name="distance" id="input-distance">
                    <option value="5">5 mi</option>
                    <option value="10">10 mi</option>
                    <option value="15">15 mi</option>
                    <option value="25">25 mi</option>
                </select>
                <GearIcon id="gear-icon" alt="settings gear"></GearIcon>
            </div>
            <h3 id="offer-main-feed-tagline">Favorites List</h3>
            {favArr.map((post) => {
                return <button id="modal-open" onClick={() => { modalOpen(post) }} data={post}><PostCard key={post.title} post={post} favArr={favArr} /></button>
            })}
        </div>
    );
}

export default Favorites;