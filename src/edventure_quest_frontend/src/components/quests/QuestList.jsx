import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Card, Chip, Avatar, CardContent, Typography, Box, Divider, CardActions, Button } from '@mui/material';
import colors from '../../utils/colors';
import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined';

export default function QuestList({ quests, character, icon }) {
    return (
        <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
            },
            p: 0
        }}>
            {quests && quests.map((quest, index) => {
                return <TimelineItem key={index}>
                    <TimelineSeparator>
                        <Avatar src={icon} sx={{ width: 30, height: 30 }} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ pr: 0 }}>
                        <Card elevation={0} sx={{ bgcolor: "transparent", borderRadius: 3, mb: "1rem" }}>
                            <CardContent
                                sx={{
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "center",
                                    pt: 0
                                }}
                            >
                                {/* <Card
                                    variant="outlined"
                                    sx={{
                                        width: "4rem",
                                        height: "4rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderColor: "white",
                                        bgcolor: "transparent",
                                        borderRadius: 3,
                                    }}
                                >
                                    <p className="text-lg font-bold text-white">
                                        {quest.points}
                                    </p>
                                    <p className="text-xs text-white">
                                        POINTS
                                    </p>
                                </Card> */}
                                <Box>
                                    <Typography
                                        variant="body1"
                                        sx={{ textAlign: "left" }}
                                    >
                                        {quest.title}: {quest.subtitle}
                                    </Typography>
                                    <div>
                                        <Chip label={`${quest.points} points`} size="small" color={character.toLowerCase() + "Theme"} sx={{ fontWeight: "bold", fontSize: "0.75rem" }} />
                                        <Typography variant="caption"> {quest.difficulty.toUpperCase()} Difficulty</Typography>
                                    </div>
                                </Box>
                            </CardContent>
                            <CardContent sx={{ py: "0", mb: "1rem" }}>
                                <Typography variant="body2" sx={{ textAlign: "left", color: colors.whiteTextContrast }}>{quest.questDetails}</Typography>
                            </CardContent>

                            <Divider />

                            <CardActions
                                sx={{
                                    display: "flex",
                                    gap: "0.25rem",
                                    px: "1rem"
                                }}
                            >
                                {true && (
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ fontStyle: "italic", mr: "auto", color: "gray", fontWeight: "bold" }}
                                    >
                                        Completed
                                    </Typography>
                                )}

                                <Button
                                    size="small"
                                    variant="text"
                                    sx={{
                                        ml: "auto",
                                    }}
                                    startIcon={<DetailsOutlinedIcon sx={{ color: "white" }} />}
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
                    </TimelineContent>
                </TimelineItem>
            })}
        </Timeline>
    );
}