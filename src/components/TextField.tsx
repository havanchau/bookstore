import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Id {
  id: string;
  content: string;
  width: number;
}

const FullWidthTextField: React.FC<Id> = ({ id, content, width }) => {
  return (
    <Box
      sx={{
        width: width,
        maxWidth: "100%",
        marginTop: 2,
      }}
    >
      <TextField fullWidth label={content} id={id} />
    </Box>
  );
};

export default FullWidthTextField;
