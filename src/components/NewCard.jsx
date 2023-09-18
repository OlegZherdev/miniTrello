import { v4 as uuidv4 } from "uuid";
import styles from "./Card.module.css";

export const NewCard = ({ boards, setBoards }) => {
  const addNewCard = () => {
    const newTask = {
      title: prompt("Enter Title:"),
      task: prompt("Enter Task:"),
      id: uuidv4(),
    };

    setBoards(
      boards.map((board, index) => {
        if (index === 0) {
          board.tasks.unshift(newTask);
        }
        return board;
      })
    );
  };

  return (
    <div
      className={styles.newCard}
      onClick={(e) => {
        addNewCard();
      }}
    >
      <p>Add new task</p>
    </div>
  );
};
