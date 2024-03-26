import { Typography } from "@mui/material"
import colors from "../../utils/colors"

export default function StoryQuestHeader({ title, description, type }) {
    return <div className="card-theme-light">
        <div className="card-theme-dark flex flex-col justify-center">
            <Typography variant="h6" sx={{ textAlign: "center", color: colors.textLight }}>{title}</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight }}>{type.toUpperCase()}</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight, mt: "1rem" }}>{description}</Typography>
        </div>
    </div>
}