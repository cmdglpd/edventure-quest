import { Button } from "@mui/material"

export default function ShopHeaderButton({ label }) {
    return <Button onClick={() => setIsAddPost(true)} variant="contained" size="small" fullWidth color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px" }}>{label}</Button>

}