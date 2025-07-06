import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AccessAlarm } from "@mui/icons-material";
import { ThreeDRotation } from "@mui/icons-material";
import { HomeRepairService } from "@mui/icons-material";
import { useColorScheme } from "@mui/material";

function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  const toggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Button variant="contained" onClick={toggle}>
      Chuyển sang {mode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

function App() {
  return (
    <>
      <div>Dacia</div>

      <Typography variant="body2" color="text.secondary">
        123
      </Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <br />
      <AccessAlarm />
      <ThreeDRotation />
      <HomeRepairService color="primary" />

      <br />
      <ThemeToggle />
    </>
  );
}

export default App;
