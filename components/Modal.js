import PodcastPlayer from "./PodcastPlayer";

const Modal = props => {
  const { clip, onClose } = props;
  console.log(clip);
  return (
    <div className="modal">
      <PodcastPlayer clip={clip} onClose={onClose} />
    </div>
  );
};

const styles = (
  <style jsx>{`
    .modal {
      position: fixed;
      z-index: 999;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(90, 90, 190, 0.6);
    }
  `}</style>
);

export default Modal;
