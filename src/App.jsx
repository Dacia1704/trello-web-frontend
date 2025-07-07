import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import SettingsBrightnessOutlined from "@mui/icons-material/SettingsBrightnessOutlined";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useColorScheme } from "@mui/material";
function ModeSelect() {
  const { mode = "light", setMode } = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl size="small" sx={{ height: 0.75 }}>
      <InputLabel id="system-mode-select-label">System Mode</InputLabel>
      <Select
        labelId="system-mode-select-label"
        id="system-mode-select"
        value={mode}
        label="system-mode"
        onChange={handleChange}
      >
        <MenuItem value={"light"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LightModeOutlined sx={{ marginRight: 2 }} />
            Light
          </div>
        </MenuItem>
        <MenuItem value={"dark"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DarkModeOutlined sx={{ marginRight: 2 }} />
            Dark
          </div>
        </MenuItem>
        <MenuItem value={"system"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SettingsBrightnessOutlined sx={{ marginRight: 2 }} />
            System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => theme.trello.appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: (theme) => theme.trello.boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        {" "}
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Content
      </Box>
    </Container>
  );
}

export default App;
