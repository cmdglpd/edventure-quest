import { Card, Box, Avatar, Typography, Divider, Button, TextField } from "@mui/material";
import colors from "../../utils/colors";

export default function GuildHeader({ title, subtitle, icon, description, backgroundImg }) {

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
                        {`${title} Guild`}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ display: { xs: "none", md: "flex" }, fontWeight: "bold", textAlign: "left" }}
                    >
                        {`${title} Guild`}
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
                <Typography variant="body2" sx={{ textAlign: "left" }}>{description}</Typography>
            </Box>

            <Divider/>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    gap: 2,
                    px: "1rem",
                    mt: "1rem"
                }}
            >
                <Avatar src={""} />
                <Card
                    variant="outlined"
                    sx={{
                        py: "0.5rem",
                        px: "1rem",
                        borderRadius: 10,
                        bgcolor: "rgba(7, 7, 7, 0.5)",
                        border: "none",
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography>Write a post...</Typography>
                </Card>
            </Box>
        </Box>
    );
}

