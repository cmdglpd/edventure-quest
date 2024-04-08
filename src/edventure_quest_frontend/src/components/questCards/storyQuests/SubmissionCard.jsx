import { Avatar, Typography, Button, Divider } from "@mui/material"
import colors from "../../../utils/colors"
import { useContext, useEffect, useState } from "react"
import { useSubmissionStatus } from "../../../hooks/useSubmissionStatus"
import { UserContext } from "../../../providers/UserProvider"
import { useReward } from "../../../hooks/useReward"

export default function SubmissionCard({ name, url, status, questDetails, submissionId }) {
    const [open, setOpen] = useState(false)
    const currentUser = useContext(UserContext)
    const [submissionStatus, setSubmissionStatus] = useState(null)
    const [currentUserPoints, setCurrentUserPoints] = useState({})
    const [questRewards, setQuestRewards] = useState({})

    useEffect(() => {
        setSubmissionStatus(status)
    }, [status])

    useEffect(() => {
        setCurrentUserPoints({
            edventurePoints: currentUser.edventurePoints,
            expPoints: currentUser.expPoints
        })
    }, [currentUser])

    useEffect(() => {
        setQuestRewards({
            edventurePoints: questDetails.edventurePoints,
            guildPoints: questDetails.guildPoints,
            expPoints: questDetails.expPoints
        })
    }, [questDetails])

    const updateSubmissionStatus = async (newStatus) => {
        if (submissionStatus !== newStatus) {
            const { error: rewardError } = await useReward(
                currentUser.userId,
                currentUser.guildId,
                newStatus,
                submissionStatus,
                currentUserPoints,
                questRewards)

            if (!rewardError) {
                const { error } = await useSubmissionStatus(
                    submissionId,
                    currentUser.userId,
                    questDetails?.storyQuestId,
                    newStatus)

                if (!error) {
                    setSubmissionStatus(newStatus)
                }
            }

            setOpen(false)
        }
        return
    }

    return <div className="card-theme-light w-full">
        <div className="card-theme-light w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Avatar sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", border: `2px solid ${colors.secondary}` }} />
                <div>
                    <Typography variant="body1" className="kavoon-font" sx={{ color: colors.tertiary }}>{name}</Typography>
                    <Typography variant="body2" sx={{ color: colors.tertiary }}>{`${submissionStatus?.toUpperCase()} | February 10, 2024`}</Typography>
                </div>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => setOpen(!open)} fullWidth variant="text" size="small" color="brownDark" sx={{ fontWeight: "bold", color: colors.tertiary }}>Status</Button>
                <Button fullWidth variant="contained" size="small" color="brownLight" sx={{ fontWeight: "bold", color: colors.tertiary }}><a href={url}>Open</a></Button>
            </div>
        </div>


        {
            open &&
            <>
                <Divider sx={{ backgroundColor: colors.secondary }} />

                <div className="w-full flex gap-2 mt-2">
                    <Button onClick={() => updateSubmissionStatus("Rejected")} fullWidth variant="outlined" size="small" color="brownDark" sx={{ fontWeight: "bold", color: colors.tertiary }}>Reject</Button>
                    <Button onClick={() => updateSubmissionStatus("Accepted")} fullWidth variant="contained" size="small" color="brownLight" sx={{ fontWeight: "bold", color: colors.tertiary }}>Accept</Button>
                </div>
            </>
        }
    </div>
}