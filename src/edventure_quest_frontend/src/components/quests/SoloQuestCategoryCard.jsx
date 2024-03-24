import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box,
    Divider,
    Chip,
    LinearProgress
} from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import colors from "../../utils/colors";

const questColors = {
    daily: colors.dailyQuest,
    easy: colors.easyQuest,
    medium: colors.mediumQuest,
    hard: colors.hardQuest
}

export default function SoloQuestCard({ name, type, description, image, questions, character }) {
    return (
        <Card elevation={0} sx={{ bgcolor: "transparent", display: "flex", alignItems: "start", gap: "2rem" }}>
            <img src={image} alt="category image" className="max-w-[10rem] max-h-[10rem]" />
            <Box>
                <CardContent
                    sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                        p: 0,
                        mb: "1rem"
                    }}
                >
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", textAlign: "left" }}
                        >
                            {name}
                        </Typography>
                        <Chip label={type.toUpperCase()} size="small" color={character.toLowerCase() + "Theme"} sx={{ fontWeight: "bold" }} />
                    </Box>
                </CardContent>
                <CardContent sx={{ p: 0, mb: "1rem" }}>
                    <Typography variant="body2" sx={{ textAlign: "left" }}>{description}</Typography>
                </CardContent>

                <LinearProgress color={character.toLowerCase() + "Theme"} variant="determinate" value={33} sx={{ borderRadius: "50px"}} />

                <CardActions
                    sx={{
                        display: "flex",
                    }}
                >
                    <Button
                        size="small"
                        variant="text"
                        color={character.toLowerCase() + "Theme"}
                        startIcon={<ModeCommentOutlinedIcon />}
                        sx={{
                            ml: "auto",
                        }}
                    >
                        <p
                            variant="body2"
                            style={{
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            Details
                        </p>
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
}
