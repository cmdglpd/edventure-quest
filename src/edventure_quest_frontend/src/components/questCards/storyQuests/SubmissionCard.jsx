import { Avatar, Typography, Button, Divider } from "@mui/material"
import colors from "../../../utils/colors"
import { useContext, useEffect, useState } from "react"
import { useSubmissionStatus } from "../../../hooks/useSubmissionStatus"
import { UserContext } from "../../../providers/UserProvider"

export default function SubmissionCard({ name, url, status, questId, submissionId }) {
    const [open, setOpen] = useState(false)
    const currentUser = useContext(UserContext)
    const [submissionStatus, setSubmissionStatus] = useState(null)

    useEffect(() => {
        setSubmissionStatus(status)
    }, [status])

    const acceptSubmission = () => {
        const { error } = useSubmissionStatus(submissionId, currentUser.userId, questId, "accept")

        if (!error) {
            setSubmissionStatus("Accepted")
        }

        setOpen(false)
    }

    const rejectSubmission = () => {
        const { error } = useSubmissionStatus(submissionId, currentUser.userId, questId, "reject")
        if (!error) {
            setSubmissionStatus("Rejected")
        }

        setOpen(false)
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
                    <Button onClick={rejectSubmission} fullWidth variant="outlined" size="small" color="brownDark" sx={{ fontWeight: "bold", color: colors.tertiary }}>Reject</Button>
                    <Button onClick={acceptSubmission} fullWidth variant="contained" size="small" color="brownLight" sx={{ fontWeight: "bold", color: colors.tertiary }}>Accept</Button>
                </div>
            </>
        }
    </div>
}