import { Box } from "@mui/system";
import React from "react";

const Image = () => {
  return (
    <Box>
      <img
        src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
        style={{
          maxWidth: "600px",
          backgroundPosition: "absolute",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          pt: "-20px",
          zIndex: -1
          //   maxHeight: "400px",
        }}
      />
    </Box>
  );
};

export default Image;
