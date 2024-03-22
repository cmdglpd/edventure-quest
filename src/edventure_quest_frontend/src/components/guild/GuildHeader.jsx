import {
    Card,
    CardContent,
    Box,
    Button,
    Typography,
    Avatar,
    Divider,
} from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import colors from "../../utils/colors";

export default function GuildHeader({
    name,
    description,
    image,
    memberCount,
}) {

    return (
        <Card
            elevation={0}
            sx={{ borderRadius: 0 }}
        >
            <Card
                elevation={0}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    borderRadius: 0,
                }}
            >
                <img src={image} alt="poster" style={{ width: "100%" }} />
            </Card>
            <CardContent sx={{ mx: { xs: 0, lg: "3rem" } }}>
                <div className="flex gap-5">
                    <div className="p-1 border-2 rounded-full">
                        <Avatar sx={{ width: 50, height: 50 }} src={image} alt="avatar" />
                    </div>
                    <div>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {name}
                        </Typography>
                        <Typography variant="body2">{memberCount} guild members</Typography>
                    </div>
                </div>
                <Typography sx={{ my: "1rem" }}>{description}</Typography>
            </CardContent>
            <Divider />
            <div className={`bg-[${colors.secondaryBackground}] mx-[1rem] md:mx-4 lg:mx-16 my-3 flex flex-col gap-3`}>
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        gap: 2
                    }}
                >
                    <Avatar src={""} />
                    <Card
                        variant="outlined"
                        sx={{
                            py: "0.5rem",
                            px: "1rem",
                            borderRadius: 10,
                            bgcolor: colors.navBackground,
                            border: "none",
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography>Write a post...</Typography>
                    </Card>
                </Box>
            </div>

        </Card>
    );
}
