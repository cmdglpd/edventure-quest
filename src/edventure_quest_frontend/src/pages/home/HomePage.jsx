import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import colors from "../../utils/colors";

export default function HomePage({}) {
  return (
    <>
      <Box component="div" sx={{backgroundColor: colors.secondaryBackground }}>
        <Outlet />
      </Box>
    </>
  );
}
