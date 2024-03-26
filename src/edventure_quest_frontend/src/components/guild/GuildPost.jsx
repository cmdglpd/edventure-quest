import {
    Card,
    CardActions,
    CardContent,
    Button,
    Avatar,
    Typography,
    Box,
    Divider,
} from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import colors from "../../utils/colors";

const questColors = {
    daily: colors.dailyQuest,
    easy: colors.easyQuest,
    medium: colors.mediumQuest,
    hard: colors.hardQuest
}

export default function GuildPost({ owner, date, content, image, contentImage }) {
    return (
        <Card elevation={0} sx={{ bgcolor: "rgba(7,7,7,0.5)", borderRadius: { xs: 0, md: 3 } }}>
            <CardContent
                sx={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "center",
                    px: "1rem",
                }}
            >
                <Avatar sx={{ width: 40, height: 40 }} src={image} />
                <Box>
                    <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", textAlign: "left" }}
                    >
                        {owner}
                    </Typography>
                    <Typography variant="caption">{date}</Typography>
                </Box>
            </CardContent>
            <CardContent sx={{ py: "0", px: "1rem", mb: "1rem" }}>
                <Typography variant="body2" sx={{ textAlign: "left" }}>{content}</Typography>
                {contentImage && <img src={contentImage} style={{ width: "100%", marginTop: "1rem", borderRadius: "10px" }} />}
            </CardContent>

            <Divider />

            <CardActions
                sx={{
                    display: "flex",
                    px: "1rem",
                    gap: "0.25rem",
                }}
            >
                <Button
                    size="small"
                    variant="text"
                    startIcon={<ThumbUpOutlinedIcon sx={{ color: "white" }} />}
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
                        Like
                    </p>
                </Button>
                <Button
                    size="small"
                    variant="text"
                    startIcon={<ModeCommentOutlinedIcon sx={{ color: "white" }} />}
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
                        Comment
                    </p>
                </Button>
            </CardActions>
        </Card>
    );
}
