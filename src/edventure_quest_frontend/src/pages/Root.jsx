import { Box, AppBar, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from "react-router-dom";
import colors from "../utils/colors";

export default function Root({ }) {

    return <>
        <AppBar position="static">
            <Toolbar variant="dense" sx={{ backgroundColor: colors.primary, px: { xs: "0.5rem", sm: "1rem", md: "4rem", lg: "5rem" } }}>
                {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button> */}
                <Typography className="kavoon-font" variant="h6" component="div" sx={{ color: colors.tertiary, mx: "auto" }}>Edventure Quest</Typography>
            </Toolbar>
        </AppBar>
        <Box sx={{ px: { xs: "0.5rem", sm: "1rem", md: "4rem", lg: "5rem" }, py: { xs: "0.5rem", sm: "1rem", md: "2rem", lg: "3rem", xl: "4rem" } }}>
            <Outlet />
        </Box>
    </>
}