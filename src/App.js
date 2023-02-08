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

var checkBoxWidth="150px";
var statWidth="263px";

function App() {
  const sotJSON = new XMLParser().parseFromString(sotData);
  console.log(sotJSON);
  console.log(cardInfo);
  return (
    <div className="App">
      <h1>SoT Editor</h1>
      <div style={{ marginBottom: "20px" }}>
        <FormControl fullWidth>
          <TextField style={{ marginBottom: "20px", width: "320px" }} id="outlined-basic" label="Name" variant="outlined" defaultValue={cardInfo.Name}/> 
          <TextField style={{ marginBottom: "20px", width: "830px" }} id="outlined-multiline-static" label="Description" rows={4} multiline defaultValue={cardInfo.Description}/>
          <div style={{ marginBottom: "20px" }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native-test">Type (other)</InputLabel>
          <NativeSelect defaultValue={cardInfo.Type}
            inputProps={{
              name: 'type',
              id: 'uncontrolled-native-test',
              }}
          >
            <option value={"Creature"}>Creature</option>
            <option value={"Spell"}>Spell</option>
            <option value={"Ability"}>Ability</option>
            <option value={"PickOne"}>PickOne</option>
            <option value={"Weapon"}>Weapon</option>
          </NativeSelect>
          </div>
          <div>
          <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" id="outlined-basic" label="Type" variant="outlined" value={cardInfo.Type}>
            <MenuItem value={"Creature"}>Creature</MenuItem>
            <MenuItem value={"Spell"}>Spell</MenuItem>
            <MenuItem value={"Ability"}>Ability</MenuItem>
            <MenuItem value={"PickOne"}>PickOne</MenuItem>
            <MenuItem value={"Weapon"}>Weapon</MenuItem>
          </Select> 
          <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" id="outlined-basic" label="God" variant="outlined" value={cardInfo.God}>
            <MenuItem value={"Neutral"}>Neutral</MenuItem>
            <MenuItem value={"Death"}>Death</MenuItem>
            <MenuItem value={"War"}>War</MenuItem>
            <MenuItem value={"Light"}>Light</MenuItem>
            <MenuItem value={"Magic"}>Magic</MenuItem>
            <MenuItem value={"Deception"}>Deception</MenuItem>
            <MenuItem value={"Nature"}>Nature</MenuItem>
          </Select>
          <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" id="outlined-basic" label="Set" variant="outlined" value={cardInfo.Set}>
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
          <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" id="outlined-basic" label="Tribe" variant="outlined" value={cardInfo.Tribe}>
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
          <Select style={{ marginBottom: "20px", marginRight: "20px", width: checkBoxWidth }} labelId="demo-simple-select-label" id="demo-simple-select" value={cardInfo.Rarity} label="Rarity">
            <MenuItem value={"Common"}>Common</MenuItem>
            <MenuItem value={"Rare"}>Rare</MenuItem>
            <MenuItem value={"Epic"}>Epic</MenuItem>
            <MenuItem value={"Legendary"}>Legendary</MenuItem>
            <MenuItem value={"Mythic"}>Mythic</MenuItem>
          </Select>
          </div>
          <div>
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" type="number" label="Mana" variant="outlined" value={cardInfo.Mana}/> 
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" type="number" label="Attack" variant="outlined" value={cardInfo.Attack}/> 
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" type="number" label="Health" variant="outlined" value={cardInfo.Health}/> 
          </div>
          <div>
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" label="GlobalID" variant="outlined" value={cardInfo.GlobalID}/> 
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" label="LibraryID" variant="outlined" value={cardInfo.LibraryID}/> 
            <TextField style={{ marginBottom: "20px", marginRight: "20px", width: statWidth }} id="outlined-basic" label="ArtID" variant="outlined" value={cardInfo.ArtID}/> 
          </div>
          <FormGroup style={{ marginRight: "20px", marginLeft: "10px" }}>
            <FormControlLabel control={<CheckBox id="outlined-basic" variant="outlined" value={cardInfo.Live}/>} label="Live" />
            <FormControlLabel control={<CheckBox id="outlined-basic" variant="outlined" value={cardInfo.Released}/>} label="Released" />
            <FormControlLabel control={<CheckBox id="outlined-basic" variant="outlined" value={cardInfo.Packable}/>} label="Packable" />
            <FormControlLabel control={<CheckBox id="outlined-basic" variant="outlined" value={cardInfo.Collectable}/>} label="Collectable" />
          </FormGroup>
        </FormControl>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Button variant="contained">Update</Button>
      </div>
    </div>
  );
}

export default App;
