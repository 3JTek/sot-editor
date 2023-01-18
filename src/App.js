import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>SoT Editor</h1>
      <div style={{ marginBottom: "20px" }}>
        <TextField id="outlined-basic" label="description" variant="outlined" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Rarity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={1}
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Button variant="contained">Update</Button>
      </div>
    </div>
  );
}

export default App;
