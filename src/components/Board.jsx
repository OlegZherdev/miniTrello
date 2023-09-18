import { Card } from "./Card";
import {
  dropCardHandler,
  dragOverHandler,
  dragLeaveHandler,
  dragEndHandler,
} from "./DragnDropHandlers.js";
import styles from "./Board.module.css";

export const Board = ({ title, board, fullState }) => {
  fullState.styleBoard = styles.board;

  return (
    <div
      className={styles.board}
      id={`board_${board.id}`}
      onDragOver={(e) => {
        dragOverHandler(e, fullState);
      }}
      onDragLeave={(e) => {
        dragLeaveHandler(e);
      }}
      onDragEnd={(e) => {
        dragEndHandler(e);
      }}
      onDrop={(e) => {
        dropCardHandler(e, board, fullState);
      }}
    >
      <h3>{title}</h3>
      {board.tasks.map((card) => (
        <Card key={card.id} card={card} board={board} fullState={fullState} />
      ))}
    </div>
  );
};
