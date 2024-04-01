import { Typography, Button } from "@mui/material"
import colors from "../../utils/colors"

export default function LibraryHeader({ title, description }) {
    return <div className="card-theme-light flex flex-col gap-2">
        <div className="card-theme-dark flex flex-col justify-center">
            <Typography className="kavoon-font" variant="h6" sx={{ textAlign: "center", color: colors.textLight }}>{title}</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight }}>{description}</Typography>
        </div>
    </div>
}