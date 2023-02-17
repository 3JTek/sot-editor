import { Button } from "@mui/material";
import exportFromJSON from "export-from-json";
import { Card } from "./card.type";

const fieldsAsObjects = {
  Name: "Name",
  Rarity: "Rarity",
  Type: "Type",
  Tribe: "Tribe",
  God: "God",
  Mana: "Mana",
  Attack: "Attack",
  Health: "Health",
  Description: "Description",
  ArtID: "ArtID",
  GlobalID: "GlobalID",
  LibraryID: "LibraryID",
  Packable: "Packable",
  Set: "Set",
  Collectable: "Collectable",
  Live: "Live",
  Released: "Released",
};

type Props = {
  card: Card;
};

const DownloadFile = (props: Props) => {
  const { card } = props;

  function onDownload() {
    const data = card;
    const fileName = "exported";
    let fields = fieldsAsObjects;
    const exportType = "xml";
    exportFromJSON({ data, fileName, fields, exportType });
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <Button variant="contained" onClick={onDownload}>
        Download
      </Button>
    </div>
  );
};

export default DownloadFile;
