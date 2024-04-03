import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import colors from "../../utils/colors";
import { useContext, useState } from "react"
import { uploadFile } from "../../utils/storage";
import { UserContext } from "../../providers/UserProvider"
import { useNewSubmission } from "../../hooks/useNewSubmission";

export default function QuestDialog({ open, handleClose, questId, questType, title, description, edventurePoints, guildPoints }) {
  const loading = false
  const [selectedFile, setSelectedFile] = useState({})
  const currentUser = useContext(UserContext)

  const handleSetSelectedFile = (item) => {
    setSelectedFile(item.target.files[0])
  }

  const submitQuestFile = async () => {
    let uploadedFile = ""

    try {
      // Awaits the URL returned by the uploadFile function
      uploadedFile = await uploadFile(selectedFile, selectedFile.name)

      const { submissionId, success, message } = await useNewSubmission({
        date: "",
        fileURL: uploadedFile,
        fileName: selectedFile.name,
        questType: questType,
        questId: questId,
        userId: currentUser.userId,
        username: currentUser?.username
      })

      if (!success) {
        // If success is false, throw a new Error with the message from the response, or a default message
        throw new Error(message || 'Submission failed for an unknown reason.');
      }

      handleClose()
    } catch (error) {
      console.log("Error uploading file");
      return; // Stop execution if file upload fails
    }
  }

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ position: "relative" }}>
          <IconButton onClick={handleClose} disabled={loading} size="small" color="brownDark" sx={{ position: "absolute", top: "0.65rem", right: "1rem" }}><CloseRoundedIcon /></IconButton>
          <DialogContentText>
            <Typography className="kavoon-font" variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>{title}</Typography>
            <Typography variant="body2" sx={{ color: colors.tertiary }}>{`REWARDS: ${edventurePoints} Edventure points | ${guildPoints} Guild points`}</Typography>
            <Typography variant="body2" sx={{ color: colors.tertiary, mt: "0.5rem" }}>{description}</Typography>
          </DialogContentText>

          <Divider sx={{ backgroundColor: colors.secondary, mt: "1rem" }} />

          <DialogActions sx={{ px: 0, pb: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="body2" sx={{ color: colors.tertiary }}>Selected file: {selectedFile?.name}</Typography>

            <form action="" className="flex items-center gap-2">
              <label htmlFor="file-upload" className="custom-file-upload">
                UPLOAD FILE
              </label>
              <input id="file-upload" type="file" onChange={(e) => handleSetSelectedFile(e)} />
              <Button onClick={submitQuestFile} size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", color: colors.tertiary, borderRadius: "10px" }}>Submit</Button>
            </form>

          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
