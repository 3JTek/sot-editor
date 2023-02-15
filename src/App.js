import { CheckBox } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  NativeSelect
} from "@mui/material";
import "./App.css";
import cardInfo from "./cardinfo.json";

import sotData from "./sotData.js";
import XMLParser from "react-xml-parser";
import { useState } from "react";

var checkBoxWidth="150px";
var statWidth="263px";

function App() {
  const [card, setCard] = useState(cardInfo);
  const sotJSON = new XMLParser().parseFromString(sotData);
  function handleTypeChange(event){
    console.log("Handle Type");
    const statName = event.target.name;
    const newCard = {...card,  [statName]:event.target.value};
    setCard(newCard);
  }
  function handleCheckboxChange(event){
    console.log(event);
  }
  return (
    <div className="App">
      <h1>SoT Editor</h1>
      <div style={{ marginBottom: "20px" }}>
        <FormControl fullWidth>
          <TextField style={{ marginBottom: "20px", width: "320px" }} id="outlined-basic" label="Name" name="Name" variant="outlined" value={card.Name} onChange={handleTypeChange}/> 
          <TextField style={{ marginBottom: "20px", width: "830px" }} id="outlined-multiline-static" label="Description" name="Description" rows={4} multiline value={card.Description} onChange={handleTypeChange}/>
          <div>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" name="Type" id="outlined-basic" label="Type" variant="outlined" value={card.Type} onChange={handleTypeChange}>
                <MenuItem value={"Creature"}>Creature</MenuItem>
                <MenuItem value={"Spell"}>Spell</MenuItem>
                <MenuItem value={"Ability"}>Ability</MenuItem>
                <MenuItem value={"PickOne"}>PickOne</MenuItem>
                <MenuItem value={"Weapon"}>Weapon</MenuItem>
              </Select> 
              </FormControl>
              <FormControl>
            <InputLabel id="demo-simple-select-label">God</InputLabel>
          <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" name="God" id="outlined-basic" label="God" variant="outlined" value={card.God}  onChange={handleTypeChange}>
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
          <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" name="Set" id="outlined-basic" label="Set" variant="outlined" value={card.Set} onChange={handleTypeChange}>
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
          <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" name="Tribe" id="outlined-basic" label="Tribe" variant="outlined" value={card.Tribe} onChange={handleTypeChange}>
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
          <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" name="Rarity" id="demo-simple-select" value={card.Rarity} label="Rarity"  onChange={handleTypeChange}>
            <MenuItem value={"Common"}>Common</MenuItem>
            <MenuItem value={"Rare"}>Rare</MenuItem>
            <MenuItem value={"Epic"}>Epic</MenuItem>
            <MenuItem value={"Legendary"}>Legendary</MenuItem>
            <MenuItem value={"Mythic"}>Mythic</MenuItem>
          </Select>
          </FormControl>
          </div>
          <div>
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" type="number" name="Mana" label="Mana" variant="outlined" value={card.Mana}  onChange={handleTypeChange}/> 
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" type="number" name="Attack" label="Attack" variant="outlined" value={card.Attack} onChange={handleTypeChange}/> 
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" type="number" name="Health" label="Health" variant="outlined" value={card.Health} onChange={handleTypeChange}/> 
          </div>
          <div>
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" name="GlobalID" label="GlobalID" variant="outlined" value={card.GlobalID} onChange={handleTypeChange}/> 
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" name="LibraryID" label="LibraryID" variant="outlined" value={card.LibraryID} onChange={handleTypeChange}/> 
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" name="ArtID"  label="ArtID" variant="outlined" value={card.ArtID} onChange={handleTypeChange}/> 
          </div>
          {/* <FormGroup style={{ marginRight: "20px", marginLeft: "10px" }}> */}
            <CheckBox id="outlined-basic" checked={true} onChange={handleCheckboxChange}/>
            {/* <FormControlLabel control={<CheckBox id="outlined-basic" variant="outlined" onChange={handleCheckboxChange}/>} name="Released" label="Released" />
            <FormControlLabel control={<CheckBox id="outlined-basic" variant="outlined" onChange={handleCheckboxChange}/>} name="Packable" label="Packable" />
            <FormControlLabel control={<CheckBox id="outlined-basic" variant="outlined" onChange={handleCheckboxChange}/>} name="Collectable" label="Collectable" />
          </FormGroup> */}
        </FormControl>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Button variant="contained">Update</Button>
      </div>
    </div>
  );
}

export default App;
