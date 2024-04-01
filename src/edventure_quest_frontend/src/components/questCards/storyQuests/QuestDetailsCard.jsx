import colors from "../../../utils/colors"
import { Typography, Divider, Button } from "@mui/material"
import QuestDialog from "../../dialogs/QuestDialog"
import { useState } from "react"

export default function QuestDetailsCard({ chapterTitle, taskTitle, description, edventurePoints, guildPoints, coverImg, chapter }) {
    const [open, setOpen] = useState(false)
    return <>
    <QuestDialog open={open} handleClose={() => setOpen(false)} title={taskTitle} description={description} edventurePoints={edventurePoints} guildPoints={guildPoints} />

        <div className="card-theme-light flex gap-4">
            <div className="w-[10rem]">
                <img src={coverImg} alt="cover image" style={{ width: "100%", height: "6rem", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
            </div>

            <div className="w-full flex flex-col justify-between">
                <div>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>{`${chapter === "epilogue" ? "EPILOGUE" : "CHAPTER" + chapter}: ${chapterTitle}`}</Typography>
                    <Typography variant="body2" sx={{ color: colors.tertiary }}>{`REWARDS: ${edventurePoints} Edventure points | ${guildPoints} Guild points`}</Typography>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <Divider sx={{ backgroundColor: colors.secondary }} />
                    <Button onClick={() => setOpen(true)} size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Quest Details</Button>
                </div>
            </div>
        </div>
    </>
}