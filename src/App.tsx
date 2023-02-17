import { useState } from "react";


import { Card } from "./card.type";
import DownloadFile from "./DownloadFile";
import EditForm from "./EditForm";
import FileSection from "./FileSection";
import { Typography } from "@mui/material";

function App() {
  const [card, setCard] = useState<Card | undefined>(undefined);
  // const [card, setCard] = useState<Card>(cardSample as Card);

  function updateCard(newCard: Card) {
    setCard(newCard as Card);
  }

  if (!card) return <FileSection updateCard={updateCard}></FileSection>;

  return (
    <>
      <Typography variant="h1" component="h2">
        Sot Editor
      </Typography>

      <EditForm card={card} updateCard={updateCard}></EditForm>

      <DownloadFile card={card}></DownloadFile>
    </>
  );
}

export default App;
