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
import { validationRules } from "../../utils/validationRules";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import colors from "../../utils/colors";
import { useState } from "react"

export default function ProductDialog({ open, handleClose, name, edventurePoints, description, productImg }) {
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
                    <div className="flex gap-4">
                        <div className="w-[10rem]">
                            <img src={productImg} alt="cover image" style={{ width: "100%", height: "6rem", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <div>
                                <Typography variant="body1" className="kavoon-font" sx={{ fontWeight: "bold", color: colors.tertiary }}>{name}</Typography>
                                <Typography variant="body2" sx={{ color: colors.tertiary, mt: "0.5rem" }}>{description}</Typography>
                            </div>
                        </div>
                    </div>

                    <Divider sx={{ backgroundColor: colors.secondary, mt: "1rem" }} />

                    <DialogActions sx={{ px: 0, pb: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: colors.tertiary }}>{`PRICE: ${edventurePoints} EVT`}</Typography>

                    <Button size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Buy</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
