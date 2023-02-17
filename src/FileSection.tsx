import { Button, Typography } from "@mui/material";
import XMLParser from "react-xml-parser";
import { Card } from "./card.type";

type Props = {
  updateCard: (card: Card) => void;
};

const FileSection = (props: Props) => {
  const { updateCard } = props;

  const fileReader = new FileReader();

  function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];

    fileReader.onloadend = handleFileLoaded;
    fileReader.readAsBinaryString(file);
  }

  function handleFileLoaded() {
    const cardsXML = fileReader.result;
    const cardsObj = new XMLParser().parseFromString(cardsXML);

    const convertedCardsObj = convertSotFile(cardsObj);
    const firstCard = convertedCardsObj[0];

    updateCard(firstCard as Card);
  }

  function convertSotFile(cardsObj: any): any {
    return cardsObj.children.map((child: any) =>
      child.children.reduce((newCardsObj: any, cardProperty: any) => {
        const { name, value } = cardProperty;
        newCardsObj[name] = value;
        return newCardsObj;
      }, {})
    );
  }

  return (
    <>
      <Typography variant="h1" component="h2">
        Choose file
      </Typography>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden onChange={handleFileInputChange} />
      </Button>
    </>
  );
};

export default FileSection;
