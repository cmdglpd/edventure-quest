import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box,
    Divider,
    Chip,
    Avatar,
    LinearProgress
} from "@mui/material";
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import { useNavigate } from "react-router-dom";

import colors from "../../utils/colors";

const questColors = {
    daily: colors.dailyQuest,
    easy: colors.easyQuest,
    medium: colors.mediumQuest,
    hard: colors.hardQuest
}

export default function SoloQuestCategoryCard({ name, type, description, image, withButton, character, icon, withIcon }) {
    const navigate = useNavigate()

    const redirect = () => {
        return navigate(`/solo-quests/quests`)
    }

    return (
        <Card elevation={0} sx={{ bgcolor: "transparent", display: "flex", alignItems: "start", gap: "2rem", borderRadius: 3 }}>
            <img src={image} alt="category image" className="max-w-[10rem] max-h-[10rem] w-[20%] h-[20%]" />
            <Box>
                <CardContent
                    sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "start",
                        p: 0,
                        mb: "1rem"
                    }}
                >
                    {withIcon && <Avatar src={icon} sx={{ width: 45, height: 45 }} />}
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", textAlign: "left" }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="overline"
                            sx={{ fontWeight: "bold", textAlign: "left" }}
                        >
                            {type.toUpperCase()}
                        </Typography>
                        {/* <Chip label={type.toUpperCase()} size="small" color={character.toLowerCase() + "Theme"} sx={{ fontWeight: "bold", fontSize: "0.75rem" }} /> */}
                    </Box>
                </CardContent>
                <CardContent sx={{ p: 0, mb: "1rem" }}>
                    <Typography variant="body2" sx={{ textAlign: "left", color: colors.whiteTextContrast }}>{description}</Typography>
                </CardContent>

                <LinearProgress color={character.toLowerCase() + "Theme"} variant="determinate" value={33} sx={{ borderRadius: "50px" }} />

                {withButton && <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        px: 0
                    }}
                >
                    <Typography variant="body2">10 quests</Typography>
                    <Button
                        size="small"
                        variant="text"
                        color={character.toLowerCase() + "Theme"}
                        startIcon={<SailingOutlinedIcon />}
                        sx={{
                            ml: "auto",
                        }}
                        onClick={redirect}
                    >
                        <p
                            variant="body2"
                            style={{
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            View Quests
                        </p>
                    </Button>
                </CardActions>}
            </Box>
        </Card>
    );
}
