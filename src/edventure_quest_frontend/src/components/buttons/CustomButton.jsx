import { Button } from "@mui/material";
import colors from "../../utils/colors";
import { useNavigate } from "react-router-dom";

export default function CustomButton({ name, route }) {
    const navigate = useNavigate()
    const redirect = (route) => {
        return navigate(route)
    }

    return <Button onClick={() => redirect(route)} color="brown" className="card-theme-neutral kavoon-font" variant="contained" size="small" sx={{ flexGrow: 1, borderRadius: "10px", fontWeight: "bold", width: "100%", color: colors.tertiary }}>{name}</Button>
}