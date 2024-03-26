import { Typography } from "@mui/material"
import colors from "../../utils/colors"

export default function QuestHeader({ title, description }) {
    return <div className="card-theme-light">
        <div className="card-theme-dark flex flex-col justify-center">
            <Typography variant="h6" sx={{ textAlign: "center", color: colors.textLight }}>{title}</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight }}>{description}</Typography>
        </div>
    </div>
}