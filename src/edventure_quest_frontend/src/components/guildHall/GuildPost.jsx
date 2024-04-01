import { Avatar, Typography, Divider, Button } from "@mui/material"
import colors from "../../utils/colors"

export default function GuildPost({ user, contentText, contentImg, date }) {
    const buttons = [
        {
            name: "Like"
        }
    ]
    return <div className="w-full card-theme-light flex flex-col gap-4">
        <div className="w-full flex items-start gap-2">
            <Avatar sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", border: `2px solid ${colors.secondary}` }} />
            <div className="flex flex-col">
                <Typography variant="body2" sx={{ color: colors.tertiary, fontWeight: "bold" }}>{user}</Typography>
                <Typography variant="caption" sx={{ color: colors.tertiary }}>{date}</Typography>
            </div>
        </div>

        {contentText && <Typography variant="body2" sx={{ color: colors.tertiary }}>{contentText}</Typography>}
        {contentImg && <img src={contentImg} className="rounded-lg w-full" />}

        <div className="w-full">
            <Divider sx={{ backgroundColor: colors.secondary, mb: "0.25rem" }} />
            <div className="w-full flex justify-between items-center gap-2">
                <Typography variant="caption" sx={{ color: colors.tertiary }}>147 Likes</Typography>
                {buttons.map(btn => <Button key={btn.name} size="small" color="brownDark" variant="text" sx={{borderRadius: "10px"}}>{btn.name}</Button>)}
            </div>
        </div>
    </div>
}