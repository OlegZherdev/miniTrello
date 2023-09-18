const deleteCard = (fullState) => {
  const { currentCard, currentBoard } = fullState;
  const currentIndex = currentBoard.tasks.indexOf(currentCard);
  currentBoard.tasks.splice(currentIndex, 1);
};

const updateBoards = (board, fullState) => {
  const { boards, currentBoard, setBoards } = fullState;
  setBoards(
    boards.map((b) => {
      if (b.id === board.id) return board;
      if (b.id === currentBoard.id) return currentBoard;
      return b;
    })
  );
};

const dragEndHandler = (e) => {
  e.preventDefault();
  e.target.style.boxShadow = "none";
};

const dragLeaveHandler = (e) => {
  e.target.style.boxShadow = "none";
};

const dragOverHandler = (e, fullState) => {
  e.preventDefault();

  const { styleCard, styleBoard } = fullState;

  if (e.target.className === styleCard || styleBoard)
    e.target.style.boxShadow = "0 5px 5px #bbbb6f";
};

const dropHandler = (e, card, board, fullState) => {
  e.preventDefault();
  e.target.style.boxShadow = "none";

  const { currentCard, setDropTarget } = fullState;

  setDropTarget("card");
  deleteCard(fullState);

  const dropIndex = board.tasks.indexOf(card);

  board.tasks.splice(dropIndex, 0, currentCard);
  updateBoards(board, fullState);
};

const dropCardHandler = (e, board, fullState) => {
  e.target.style.boxShadow = "none";
  if (e.target.id) {
    board.tasks.push(fullState.currentCard);
    deleteCard(fullState);
  }
  updateBoards(board, fullState);
};

export {
  // dragStartHandler,
  dragEndHandler,
  dragLeaveHandler,
  dragOverHandler,
  dropHandler,
  dropCardHandler,
};
