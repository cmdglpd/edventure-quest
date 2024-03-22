import { Box, Avatar, Typography, Divider, Button } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import colors from "../../utils/colors"

export default function ShopHeader({ title, subtitle, icon, description, buttons }) {

    return (
        <Box
            component="div"
            sx={{
                bgcolor: "#111111",
                color: "white",
                px: { md: "1rem", lg: "3rem" }
            }}
        >
            <Box
                component="div"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    p: "1rem",
                }}
            >
                <Avatar sx={{ width: 50, height: 50 }} src={icon} alt="avatar" />
                <div>
                    <Typography
                        variant="h6"
                        sx={{
                            display: { xs: "flex", md: "none" },
                            fontWeight: "bold",
                            textAlign: "left",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ display: { xs: "none", md: "flex" }, fontWeight: "bold", textAlign: "left" }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
                        {subtitle}
                    </Typography>
                </div>
            </Box>
            <Box
                component="div"
                sx={{
                    px: "1rem",
                    mb: "1rem",
                }}
            >
                <Typography variant="body1" sx={{ textAlign: "left" }}>{description}</Typography>
            </Box>
            <Divider />
            <Box
                component="div"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    px: "1rem",
                    py: "0.5rem",
                }}
            >
                {buttons.map((btn) => (
                    <Box
                        key={Math.random()}
                        sx={{ width: "inherit"  }}
                    >
                        <Button
                            sx={{ color: "white"}}
                            size="small"
                            variant="text"
                            startIcon={btn.icon}
                            onClick={btn.func}
                        >
                            {btn.name}
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
