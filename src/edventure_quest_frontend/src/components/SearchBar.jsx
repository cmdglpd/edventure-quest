import { TextField, Button, Card } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ }) {
    return <Card elevation={0} sx={{ borderRadius: 3, p: "1rem", display: "flex", gap: "1rem" }}>
        <TextField size="small" variant="filled" fullWidth placeholder="Looking for something?" />
        <Button color="blue" variant="contained" size="large" startIcon={<SearchIcon />}>Search</Button>
    </Card>
}