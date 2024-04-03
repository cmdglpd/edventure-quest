import colors from "../../../utils/colors"
import { Typography, Divider, Button } from "@mui/material"
import QuestDialog from "../../dialogs/QuestDialog"
import { useContext, useState } from "react"
import { UserContext } from "../../../providers/UserProvider"
import { useNavigate, useParams } from "react-router-dom"

export default function QuestDetailsCard({ questId, questType, chapterTitle, taskTitle, description, edventurePoints, guildPoints, coverImg, chapter }) {
    const { storyId } = useParams()
    const currentUser = useContext(UserContext)
    const navigate = useNavigate()

    const redirect = () => {
        return navigate(`/quests/story-quest-details/${storyId}/${questId}/submissions`)
    }

    const questButtonFunc = (role) => {
        switch (role) {
            case "guild member":
                return () => setOpen(true)

            case "guild master":
                return redirect

            case "grand council":
                return redirect

            default:
                break;
        }
    }

    const [open, setOpen] = useState(false)

    return <>
        <QuestDialog open={open} handleClose={() => setOpen(false)} questId={questId} questType={questType} title={taskTitle} description={description} edventurePoints={edventurePoints} guildPoints={guildPoints} />

        <div className="card-theme-light flex gap-4">
            <div className="w-[10rem]">
                <img src={coverImg} alt="cover image" style={{ width: "100%", height: "6rem", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
            </div>

            <div className="w-full flex flex-col justify-between">
                <div>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>{`${chapter === "epilogue" ? "EPILOGUE" : "CHAPTER " + chapter}: ${chapterTitle}`}</Typography>
                    <Typography variant="body2" sx={{ color: colors.tertiary }}>{`REWARDS: ${edventurePoints} Edventure points | ${guildPoints} Guild points`}</Typography>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <Divider sx={{ backgroundColor: colors.secondary }} />

                    <QuestButton role={currentUser?.role} func={questButtonFunc(currentUser?.role)} />

                </div>
            </div>
        </div>
    </>
}

function QuestButton({ role, func }) {
    switch (role) {
        case "guild member":
            return <Button onClick={func} size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Quest Details</Button>

        case "guild master":
            return <Button onClick={func} size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Quest Details</Button>

        case "grand council":
            return <Button onClick={func} size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Submissions</Button>

        default:
            break;
    }
}