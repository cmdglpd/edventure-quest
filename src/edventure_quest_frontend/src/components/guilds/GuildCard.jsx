import { Avatar, Typography, Divider, Button } from "@mui/material"
import colors from "../../utils/colors"

export default function GuildCard({ name, description, guildPoints, guildLogo }) {
    const buttons = [
        {
            name: "assign guildmaster",
            variant: "text",
            color: "brownDark"
        },
        {
            name: "visit",
            variant: "contained",
            color: "brownLight"
        }
    ]
    return <div className="w-full card-theme-light flex flex-col gap-4">
        <div className="w-full flex items-center gap-4">
            <Avatar sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", border: `2px solid ${colors.secondary}` }} />
            <div className="flex flex-col">
                <Typography className="kavoon-font" variant="body1" sx={{ color: colors.tertiary, fontWeight: "bold" }}>{name}</Typography>
                <Typography variant="body2" sx={{ color: colors.tertiary }}>GUILD POINTS: 5426 pts</Typography>
            </div>
        </div>

        <Typography variant="body2" sx={{ color: colors.tertiary }}>{description}</Typography>

        <div className="w-full">
            <Divider sx={{ backgroundColor: colors.secondary, mb: "0.25rem" }} />
            <div className="w-full flex justify-between items-center gap-2">
                <Typography variant="body2" sx={{ color: colors.tertiary, fontWeight: "bold" }}>Guildmaster: Not assigned</Typography>
                <div className="flex gap-2">
                    {buttons.map(btn => <Button key={btn.name} size="small" color={btn.color} variant={btn.variant} sx={{ fontWeight: "bold", color: colors.tertiary, borderRadius: "10px" }}>{btn.name}</Button>)}
                </div>
            </div>
        </div>
    </div>
}