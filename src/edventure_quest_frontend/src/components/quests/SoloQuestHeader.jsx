import { Box, Avatar, Typography, Divider, Button, TextField } from "@mui/material";

export default function SoloQuestHeader({ title, subtitle, icon, description, buttons, backgroundImg }) {

    return (
        <Box
            component="div"
            sx={{
                color: "white",
                px: { md: "1rem", lg: "3rem" },
                pt: "1rem",
                pb: "1.5rem",
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
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
            <Box
                component="div"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    px: "1rem",
                    py: "0.75rem",
                    mx: "1rem",
                    gap: 2,
                    bgcolor: "rgba(17,17,17,0.5)",
                    borderRadius: 3,
                }}
            >
                <TextField size="small" fullWidth variant="standard" placeholder="Type in something..." />
                <Button variant="outlined" size="small" sx={{flexGrow: 1}}>Search</Button>
            </Box>
        </Box>
    );
}
