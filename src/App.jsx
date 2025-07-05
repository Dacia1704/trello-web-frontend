import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AccessAlarm } from "@mui/icons-material";
import { ThreeDRotation } from "@mui/icons-material";
import { HomeRepairService } from "@mui/icons-material";

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
    </>
  );
}

export default App;
