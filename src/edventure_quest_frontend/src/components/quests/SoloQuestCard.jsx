import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box,
    Divider,
} from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import colors from "../../utils/colors";

const questColors = {
    daily: colors.dailyQuest,
    easy: colors.easyQuest,
    medium: colors.mediumQuest,
    hard: colors.hardQuest
}

export default function SoloQuestCard({ questName, difficulty, description, points, status, isDaily }) {
    return (
        <Card elevation={0} sx={{ borderRadius: 3 }}>
            <CardContent
                sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    px: "1rem",
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        p: "1rem",
                        width: "4rem",
                        height: "4rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundImage: `linear-gradient(${questColors[isDaily ? "daily" : difficulty.toLowerCase()]}, #111111)`,
                        borderColor: "#111111",
                        borderRadius: 3,
                    }}
                >
                    <p className="text-lg font-bold text-white">
                        {points}
                    </p>
                    <p className="text-xs text-white">
                        POINTS
                    </p>
                </Card>
                <Box>
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", textAlign: "left" }}
                    >
                        {questName}
                    </Typography>
                    <Typography variant="body2">Difficulty: {difficulty}</Typography>
                </Box>
            </CardContent>
            <CardContent sx={{ py: "0", px: "1rem", mb: "1rem" }}>
                <Typography sx={{ textAlign: "left" }}>{description}</Typography>
            </CardContent>

            <Divider />

            <CardActions
                sx={{
                    display: "flex",
                    px: "1rem",
                    pb: "1rem",
                    gap: "0.25rem",
                }}
            >
                {status && (
                    <Typography
                        variant="subtitle2"
                        sx={{ fontStyle: "italic", mr: "auto", color: "gray" }}
                    >
                        Completed
                    </Typography>
                )}

                <Button
                    size="small"
                    variant="text"
                    startIcon={<ModeCommentOutlinedIcon sx={{ color: colors.primary }} />}
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
        </Card>
    );
}
