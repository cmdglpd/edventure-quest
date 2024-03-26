import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import CustomButton from "./CustomButton";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#E8CFA6"),
    backgroundColor: "transparent",
    '&:hover': {
        backgroundColor: "#C49A6C",
    },
}));

export default function QuestTypeButtons({ }) {
    const buttons = [
        {
            name: "story quests",
            route: "/quests"
        },
        {
            name: "guild ventures",
            route: "/guild-ventures"
        },
        {
            name: "guild conquests",
            route: "/guild-conquests"
        }
    ]
    return <div className="card-theme-neutral flex items-center justify-between gap-2">
        {/* {buttons.map(btn => {
            return <Button key={btn.name} size="small" variant="contained" sx={{ flexGrow: 1 }}>{btn.name}</Button>
        })} */}

        {/* {buttons.map(btn => {
            return <ColorButton variant="contained" sx={{flexGrow: 1}}>{btn.name}</ColorButton>
        })} */}
        {buttons.map(btn => {
            return <CustomButton key={btn.name} name={btn.name} route={btn.route} />
        })}
    </div>
}