import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import { Card, God, Rarity, Set, Type, Tribe } from "./card.type";

const checkBoxWidth = "150px";
const statWidth = "263px";

type Props = {
  card: Card;
  updateCard: (card: Card) => void;
};

const EditForm = (props: Props) => {
  const { card, updateCard } = props;

  function handleTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const statName = event.target.name;

    const newCard = { ...card, [statName]: event.target.value };

    updateCard(newCard as Card);
  }

  function handleSelectChange(
    event: SelectChangeEvent<God | Type | Rarity | Set | Tribe>
  ) {
    const statName = event.target.name;

    const newCard = { ...card, [statName]: event.target.value };

    updateCard(newCard as Card);
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;

    const newCard = { ...card, [name]: checked };

    updateCard(newCard as Card);
  }

  return (
    <FormControl fullWidth>
      <TextField
        style={{ marginBottom: "20px", width: "320px" }}
        label="Name"
        name="Name"
        variant="outlined"
        value={card.Name}
        onChange={handleTypeChange}
      />
      <TextField
        style={{ marginBottom: "20px", width: "830px" }}
        id="outlined-multiline-static"
        label="Description"
        name="Description"
        rows={4}
        multiline
        value={card.Description}
        onChange={handleTypeChange}
      />
      <div>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            style={{
              marginBottom: "20px",
              marginRight: "20px",
              width: checkBoxWidth,
            }}
            labelId="demo-simple-select-label"
            name="Type"
            label="Type"
            variant="outlined"
            value={card.Type}
            onChange={handleSelectChange}
          >
            <MenuItem value={"Creature"}>Creature</MenuItem>
            <MenuItem value={"Spell"}>Spell</MenuItem>
            <MenuItem value={"Ability"}>Ability</MenuItem>
            <MenuItem value={"PickOne"}>PickOne</MenuItem>
            <MenuItem value={"Weapon"}>Weapon</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">God</InputLabel>
          <Select
            style={{
              marginBottom: "20px",
              marginRight: "20px",
              width: checkBoxWidth,
            }}
            labelId="demo-simple-select-label"
            name="God"
            label="God"
            variant="outlined"
            value={card.God}
            onChange={handleSelectChange}
          >
            <MenuItem value={"Neutral"}>Neutral</MenuItem>
            <MenuItem value={"Death"}>Death</MenuItem>
            <MenuItem value={"War"}>War</MenuItem>
            <MenuItem value={"Light"}>Light</MenuItem>
            <MenuItem value={"Magic"}>Magic</MenuItem>
            <MenuItem value={"Deception"}>Deception</MenuItem>
            <MenuItem value={"Nature"}>Nature</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Set</InputLabel>
          <Select
            style={{
              marginBottom: "20px",
              marginRight: "20px",
              width: checkBoxWidth,
            }}
            labelId="demo-simple-select-label"
            name="Set"
            label="Set"
            variant="outlined"
            value={card.Set}
            onChange={handleSelectChange}
          >
            <MenuItem value={"Core"}>Core</MenuItem>
            <MenuItem value={"Genesis"}>Genesis</MenuItem>
            <MenuItem value={"Etherbot"}>Etherbot</MenuItem>
            <MenuItem value={"Mythic"}>Mythic</MenuItem>
            <MenuItem value={"Promo"}>Promo</MenuItem>
            <MenuItem value={"Trial"}>Trial</MenuItem>
            <MenuItem value={"Order"}>Order</MenuItem>
            <MenuItem value={"Tutorial"}>Tutorial</MenuItem>
            <MenuItem value={"Mortal"}>Mortal</MenuItem>
            <MenuItem value={"Verdict"}>Verdict</MenuItem>
            <MenuItem value={"Wander"}>Wander</MenuItem>
            <MenuItem value={"Wolf"}>Wolf</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Tribe</InputLabel>
          <Select
            style={{
              marginBottom: "20px",
              marginRight: "20px",
              width: checkBoxWidth,
            }}
            labelId="demo-simple-select-label"
            name="Tribe"
            label="Tribe"
            variant="outlined"
            value={card.Tribe}
            onChange={handleSelectChange}
          >
            <MenuItem value={"Viking"}>Viking</MenuItem>
            <MenuItem value={"Amazon"}>Amazon</MenuItem>
            <MenuItem value={"Aether"}>Aether</MenuItem>
            <MenuItem value={"Atlantean"}>Atlantean</MenuItem>
            <MenuItem value={"Olympian"}>Olympian</MenuItem>
            <MenuItem value={"Nether"}>Nether</MenuItem>
            <MenuItem value={"Anubian"}>Anubian</MenuItem>
            <MenuItem value={"Dragon"}>Dragon</MenuItem>
            <MenuItem value={"Wild"}>Wild</MenuItem>
            <MenuItem value={"Mystic"}>Mystic</MenuItem>
            <MenuItem value={"Structure"}>Structure</MenuItem>
            <MenuItem value={"Guild"}>Guild</MenuItem>
            <MenuItem value={"Blessing"}>Blessing</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Rarity</InputLabel>
          <Select
            style={{
              marginBottom: "20px",
              marginRight: "20px",
              width: checkBoxWidth,
            }}
            labelId="demo-simple-select-label"
            name="Rarity"
            id="demo-simple-select"
            value={card.Rarity}
            label="Rarity"
            onChange={handleSelectChange}
          >
            <MenuItem value={"Common"}>Common</MenuItem>
            <MenuItem value={"Rare"}>Rare</MenuItem>
            <MenuItem value={"Epic"}>Epic</MenuItem>
            <MenuItem value={"Legendary"}>Legendary</MenuItem>
            <MenuItem value={"Mythic"}>Mythic</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField
          style={{
            marginBottom: "20px",
            marginRight: "20px",
            width: statWidth,
          }}
          type="number"
          name="Mana"
          label="Mana"
          variant="outlined"
          value={card.Mana}
          onChange={handleTypeChange}
        />
        <TextField
          style={{
            marginBottom: "20px",
            marginRight: "20px",
            width: statWidth,
          }}
          type="number"
          name="Attack"
          label="Attack"
          variant="outlined"
          value={card.Attack}
          onChange={handleTypeChange}
        />
        <TextField
          style={{
            marginBottom: "20px",
            marginRight: "20px",
            width: statWidth,
          }}
          type="number"
          name="Health"
          label="Health"
          variant="outlined"
          value={card.Health}
          onChange={handleTypeChange}
        />
      </div>
      <div>
        <TextField
          style={{
            marginBottom: "20px",
            marginRight: "20px",
            width: statWidth,
          }}
          name="GlobalID"
          label="GlobalID"
          variant="outlined"
          value={card.GlobalID}
          onChange={handleTypeChange}
        />
        <TextField
          style={{
            marginBottom: "20px",
            marginRight: "20px",
            width: statWidth,
          }}
          id="outlined-basic"
          name="LibraryID"
          label="LibraryID"
          variant="outlined"
          value={card.LibraryID}
          onChange={handleTypeChange}
        />
        <TextField
          style={{
            marginBottom: "20px",
            marginRight: "20px",
            width: statWidth,
          }}
          id="outlined-basic"
          name="ArtID"
          label="ArtID"
          variant="outlined"
          value={card.ArtID}
          onChange={handleTypeChange}
        />
      </div>
      <FormGroup style={{ marginRight: "20px", marginLeft: "10px" }}>
        {["Live", "Released", "Packable", "Collectable"].map((propertyName) => (
          <FormControlLabel
            control={
              <Checkbox
                name={propertyName}
                checked={card[propertyName as keyof Card] as boolean}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label={propertyName}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default EditForm;
