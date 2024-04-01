import SubmissionCard from "../../../components/questCards/storyQuests/SubmissionCard"
import { TextField, Button } from "@mui/material"
import colors from "../../../utils/colors"

const submissions = [
    {
        name: "Carrot Slayer"
    },
    {
        name: "Azazel"
    }
]

export default function SubmissionsPage({ }) {
    return <div className="w-full flex flex-col gap-4">
        <div className="card-theme-neutral flex items-end gap-4">
            <TextField variant="standard" size="small" color="brownDark" fullWidth placeholder="Search..." sx={{color: colors.tertiary}}/>
            <Button variant="contained" size="small" color="brownLight" sx={{ fontWeight: "bold", color: colors.tertiary }}>Search</Button>
        </div>

        <div className="w-full flex flex-col gap-4 mt-3">
            {submissions.map(submission => <SubmissionCard key={submission.name} name={submission.name} />)}
        </div>
    </div>
}