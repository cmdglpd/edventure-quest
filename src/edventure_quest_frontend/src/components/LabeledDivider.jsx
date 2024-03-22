import { Divider, Typography } from "@mui/material";
import colors from "../utils/colors";

export default function LabeledDivider({ label, withDivider = false }) {
  return (
    <div className="xs:mx-0 md:mx-4 lg:mx-16 mt-2 md:mt-3">
      {withDivider && <Divider sx={{ mt: "1rem" }} />}

      <div className={`w-fit px-3 py-2 bg-gradient-to-r from-[#151E51] to-[#2F45B7] rounded-b-xl`}>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {label}
        </Typography>
      </div>
    </div>
  );
}
