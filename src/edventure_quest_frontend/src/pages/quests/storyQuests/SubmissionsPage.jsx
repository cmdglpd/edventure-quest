import SubmissionCard from "../../../components/questCards/storyQuests/SubmissionCard"
import { TextField, Button } from "@mui/material"
import colors from "../../../utils/colors"
import { useParams } from "react-router-dom"
import { useStoryQuest } from "../../../hooks/useStoryQuest"
import { useSubmissions } from "../../../hooks/useSubmissions"

export default function SubmissionsPage({ }) {
    const { questId } = useParams()
    const {storyQuest, error: storyQuestError, loading: storyQuestLoading} = useStoryQuest(questId)
    const {submissions, error: submissionError, loading: submissionLoading} = useSubmissions(questId)

    if(storyQuestLoading || submissionLoading){
        return <p>Fetching submissions</p>
    }

    return <div className="w-full flex flex-col gap-4">
        <div className="card-theme-neutral flex items-end gap-4">
            <TextField variant="standard" size="small" color="brownDark" fullWidth placeholder="Search..." sx={{ color: colors.tertiary }} />
            <Button variant="contained" size="small" color="brownLight" sx={{ fontWeight: "bold", color: colors.tertiary }}>Search</Button>
        </div>

        <div className="w-full flex flex-col gap-4 mt-3">
            {submissions.map(submission => <SubmissionCard key={submission.submissionId} submissionId={submission.submissionId} questDetails={storyQuest} status={submission.status} name={submission.username} url={submission.fileURL} />)}
        </div>
    </div>
}