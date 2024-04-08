import { Typography, Button } from "@mui/material"
import colors from "../../utils/colors"

export default function MyBagHeader({ title, description }) {
    return <div className="card-theme-light flex flex-col justify-center gap-2">
        <div className="card-theme-dark flex flex-col justify-center">
            <Typography className="kavoon-font" variant="h6" sx={{ textAlign: "center", color: colors.textLight }}>{title}</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight, mt: "1rem" }}>{description}</Typography>
        </div>
    </div>
}
