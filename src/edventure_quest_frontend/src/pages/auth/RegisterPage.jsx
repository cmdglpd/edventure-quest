import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function RegisterPage({ }) {

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "1rem",
        minHeight: "100vh",
        alignItems: "center",
        width: { xs: "100%", sm: "50%", md: "40%" },
        mx: "auto",
        mb: "2rem",
      }}
    >
      <div className="w-full">
        <Outlet />
      </div>
    </Box>
  );
}
