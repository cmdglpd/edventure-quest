import { Typography, Button, TextField } from "@mui/material"
import NewGuildPostDialog from "../dialogs/NewGuildPostDialog"
import colors from "../../utils/colors"
import { useState } from "react"

export default function GuildHallHeader({ title, description }) {
    const [open, setOpen] = useState(false)
    const [selectedFile, setSelectedFile] = useState({})
    const [isAddPost, setIsAddPost] = useState(false)

    const handleSetSelectedFile = (item) => {
        console.log(item.target.files[0].name);
        setSelectedFile(item.target.files[0])
    }

    return <>
        <NewGuildPostDialog open={open} handleClose={() => setOpen(false)} />

        <div className="card-theme-light flex flex-col gap-2">
            {
                !isAddPost &&
                <>
                    <div className="card-theme-dark flex flex-col justify-center">
                        <Typography className="kavoon-font" variant="h6" sx={{ textAlign: "center", color: colors.textLight }}>{title}</Typography>
                        <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight }}>{description}</Typography>
                    </div>

                    <Button onClick={() => setIsAddPost(true)} variant="contained" size="small" fullWidth color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px" }}>Add New Post</Button>
                </>
            }

            {
                isAddPost &&
                <>
                    <form action="">
                        <div className="card-theme-dark flex flex-col justify-center items-end gap-2">
                            <TextField multiline variant="outlined" size="small" color="brownLight" rows={3} fullWidth placeholder="Want to share something?" sx={{ color: colors.tertiary }} />

                            <div className="w-full flex items-center justify-between">
                                <Typography variant="body2">Selected image: {selectedFile?.name}</Typography>

                                <div>
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        UPLOAD IMAGE
                                    </label>
                                    <input id="file-upload" type="file" onChange={(e) => handleSetSelectedFile(e)} /></div>
                            </div>
                        </div>
                    </form>

                    <div className="flex w-full gap-2">
                        <Button onClick={() => setIsAddPost(false)} variant="outlined" size="small" fullWidth color="brownDark" sx={{ fontWeight: "bold", borderRadius: "10px" }}>Cancel</Button>
                        <Button onClick={() => setIsAddPost(false)} variant="contained" size="small" fullWidth color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px" }}>Create Post</Button>
                    </div>
                </>
            }

        </div>
    </>
}