import { Typography } from "@mui/material";
import colors from "../../utils/colors";

export default function PrologueCard({ title, coverImg, synopsis }) {
    return <div className="card-theme-light flex flex-col gap-2 p-4">
        <div className="w-full h-[10rem]">
            <img src={coverImg} alt="cover image" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
        </div>

        <div className="flex flex-col px-2 my-1">
            <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>{`PROLOGUE: ${title}`}</Typography>
            <Typography variant="body2" sx={{ mt: "0.5rem", color: colors.tertiary, display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden', textOverflow: 'ellipsis' }}>{synopsis}</Typography>
        </div>
    </div>
}