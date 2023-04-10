import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating({ handleRate }) {
  const [value, setValue] = React.useState();

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Rating:</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleRate(value);
        }}
      />
      <br />
      {/* <Typography component="legend">Rate</Typography>
      <Rating name="read-only" value={value} readOnly /> */}
      <p>{value} </p>
    </Box>
  );
}