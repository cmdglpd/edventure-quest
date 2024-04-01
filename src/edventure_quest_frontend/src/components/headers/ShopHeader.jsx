import { Typography } from "@mui/material"
import colors from "../../utils/colors"

export default function ShopHeader({ title, description, type, edventurePoints }) {
    return <div className="card-theme-light">
        <div className="card-theme-dark flex flex-col justify-center">
            <Typography className="kavoon-font" variant="h6" sx={{ textAlign: "center", color: colors.textLight }}>{title}</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight }}>{type.toUpperCase()}</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight, mt: "1rem" }}>{description}</Typography>
        </div>
        <Typography variant="overline" sx={{ fontWeight: "bold", textAlign: "center", color: colors.tertiary, mt: "1rem", mx: "0.5rem" }}>{`Edventure Tokens: ${edventurePoints} EVT`}</Typography>
    </div>
}