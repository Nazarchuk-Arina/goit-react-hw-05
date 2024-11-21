import Modal from "react-modal";

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  const style = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
