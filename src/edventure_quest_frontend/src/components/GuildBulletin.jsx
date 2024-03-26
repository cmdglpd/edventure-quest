import { Avatar, Typography } from "@mui/material"
import colors from "../utils/colors"

export default function GuildBulletin({ }) {
    return <div className="card-wrapper">
        <div className="w-full card-theme-neutral flex gap-4">
            <Avatar sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", border: `2px solid ${colors.secondary}` }} />
            <div className="flex flex-col w-full">
                <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>Guild Bulletin</Typography>
                <Typography variant="body2" sx={{ color: colors.tertiary }}>Announcements</Typography>
            </div>
        </div>
    </div>
}