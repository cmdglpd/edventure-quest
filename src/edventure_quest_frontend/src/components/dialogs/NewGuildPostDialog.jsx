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
    IconButton,
  } from "@mui/material";
  import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
  import colors from "../../utils/colors";
  import {useState} from "react"
  
  export default function NewGuildPostDialog({ open, handleClose, title, description, edventurePoints, guildPoints }) {
    const loading = false
    const [selectedFile, setSelectedFile] = useState({})
  
    const handleSetSelectedFile = (item) => {
      console.log(item.target.files[0].name);
      setSelectedFile(item.target.files[0])
    }
  
    return (
      <Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent sx={{ position: "relative" }}>
            <IconButton onClick={handleClose} disabled={loading} size="small" color="brownDark" sx={{ position: "absolute", top: "0.65rem", right: "1rem" }}><CloseRoundedIcon /></IconButton>
            <DialogContentText>
              <TextField multiline></TextField>
            </DialogContentText>
  
            <Divider sx={{ backgroundColor: colors.secondary, mt: "1rem" }} />
  
            <DialogActions sx={{ px: 0, pb: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography variant="body2" sx={{ color: colors.tertiary }}>Uploaded File: {selectedFile?.name}</Typography>
  
              <form action="">
                <label htmlFor="file-upload" className="custom-file-upload">
                  UPLOAD FILE
                </label>
                <input id="file-upload" type="file" onChange={(e) => handleSetSelectedFile(e)} />
              </form>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Box>
    );
  }
  