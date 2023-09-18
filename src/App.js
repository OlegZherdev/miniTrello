import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { NewCard } from "./components/NewCard";

function App() {
  const [currentCard, setCurrentCard] = useState(null);
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "ToDo",
      tasks: [],
      tasks: [
        // { title: "task ToDo", task: "About task", id: 11 },
        // { title: "task ToDo 1", task: "About task", id: 12 },
        // { title: "task ToDo 2", task: "About task", id: 13 },
      ],
    },
    {
      id: 2,
      title: "In Progress",
      tasks: [],
      tasks: [
        // { title: "task In Progress", task: "About task", id: 21 },
        // { title: "task In Progress 1", task: "About task", id: 22 },
        // { title: "task In Progress 2", task: "About task", id: 23 },
      ],
    },
    {
      id: 3,
      title: "Finished",
      tasks: [],
      tasks: [
        // { title: "task Finished", task: "About task", id: 31 },
        // { title: "task Finished 1", task: "About task", id: 32 },
        // { title: "task Finished 2", task: "About task", id: 33 },
      ],
    },
  ]);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);

  const fullState = {
    currentCard,
    setCurrentCard,
    boards,
    setBoards,
    currentBoard,
    setCurrentBoard,
    dropTarget,
    setDropTarget,
  };

  return (
    <div className="App">
      <h1>mini Trello</h1>
      <NewCard boards={boards} setBoards={setBoards} />
      <div className="boards">
        {boards.map((board) => {
          const { id, title } = board;
          return (
            <Board key={id} title={title} board={board} fullState={fullState} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
