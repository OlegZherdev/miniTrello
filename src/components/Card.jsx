import styles from "./Card.module.css";
import {
  dragEndHandler,
  dragLeaveHandler,
  dragOverHandler,
  dropHandler,
} from "./DragnDropHandlers.js";

export const Card = ({ card, board, fullState }) => {
  const { title, task } = card;

  fullState.styleCard = styles.card;

  return (
    <div
      className={styles.card}
      draggable={true}
      onDragStart={(e) => {
        fullState.setCurrentCard(card);
        fullState.setCurrentBoard(board);
      }}
      onDragLeave={(e) => {
        dragLeaveHandler(e);
      }}
      onDragEnd={(e) => {
        dragEndHandler(e);
      }}
      onDragOver={(e) => {
        dragOverHandler(e, fullState);
      }}
      onDrop={(e) => {
        dropHandler(e, card, board, fullState);
      }}
    >
      <h4>{title}</h4>
      <p>{task}</p>
    </div>
  );
};
