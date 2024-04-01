import { Typography, Divider, Button } from "@mui/material";
import colors from "../../../utils/colors";
import { useNavigate } from "react-router-dom";

export default function StoryQuestCard({ title, coverImg, type, synopsis, storyId }) {
    const navigate = useNavigate()

    const redirect = () => {
        return navigate(`/quests/story-quest-details/${storyId}`)
    }
    
    return <div className="card-theme-light flex flex-col gap-3 p-4">
        <div className="w-full h-[10rem]">
            <img src={coverImg} alt="cover image" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
        </div>

        <div className="flex flex-col px-2">
            <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>{title}</Typography>
            <Typography variant="body2" sx={{ color: colors.tertiary }}>{`${type} Intelligence`}</Typography>
            <Typography variant="body2" sx={{ mt: "1rem", color: colors.tertiary, display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden', textOverflow: 'ellipsis' }}>{synopsis}</Typography>
        </div>
        <Divider sx={{ backgroundColor: colors.secondary }} />
        <Button onClick={redirect} variant="contained" color="brownLight" size="small" sx={{ flexGrow: 1, fontWeight: "bold", color: colors.tertiary, borderRadius: "10px" }}>View Quests</Button>
    </div>
}