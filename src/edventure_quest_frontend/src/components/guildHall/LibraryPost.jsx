import { Typography, Divider, Button } from "@mui/material"
import colors from "../../utils/colors"

export default function LibraryPost({ title, type, synopsis, coverImg }) {
    return <div className="card-theme-light flex gap-4">
        <div className="w-[10rem] h-[6rem]">
            <img src={coverImg} alt="cover image" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
        </div>

        <div className="w-full flex flex-col justify-between gap-2">
            <div>
                <Typography variant="body1" className="kavoon-font" sx={{ fontWeight: "bold", color: colors.tertiary, display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</Typography>
                <Typography variant="body2" sx={{ color: colors.tertiary }}>{type}</Typography>
                <Typography variant="body2" sx={{ color: colors.tertiary, mt: "0.5rem", display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden', textOverflow: 'ellipsis' }}>{synopsis}</Typography>
            </div>

            <div className="w-full flex flex-col gap-2">
                <Divider sx={{ backgroundColor: colors.secondary }} />
                <Button size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>View Details</Button>
            </div>
        </div>
    </div>
}