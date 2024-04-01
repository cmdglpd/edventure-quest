import { Button } from "@mui/material"

export default function NewPostButton({}){
    return <div className="card-theme-neutral">
        <Button variant="contained" size="small" fullWidth color="brown" sx={{fontWeight: "bold", borderRadius: "10px"}}>Add New Post</Button>
    </div>
}