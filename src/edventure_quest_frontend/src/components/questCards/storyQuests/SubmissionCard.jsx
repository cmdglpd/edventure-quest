import { Avatar, Typography, Button } from "@mui/material"
import colors from "../../../utils/colors"

export default function SubmissionCard({ name }) {
    return <div className="card-theme-light w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Avatar sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", border: `2px solid ${colors.secondary}` }} />
            <div>
                <Typography variant="body1" className="kavoon-font" sx={{ color: colors.tertiary }}>{name}</Typography>
                <Typography variant="body2" sx={{ color: colors.tertiary }}>{`SUBMITTED ON: February 10, 2024`}</Typography>
            </div>
        </div>
        <Button variant="contained" size="small" color="brownLight" sx={{ fontWeight: "bold", color: colors.tertiary }}>Download</Button>
    </div>
}