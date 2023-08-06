import React from "react";
import { Box,Grid } from "@mui/material";
const MainSection = () =>{
    return (
      <div className="flex items-center justify-center h-screen">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} columns={16}>
            <Grid xs={9}>
                <div className=" flex items-center justify-center flex-wrap flex-col h-screen bg-slate-900">
                    sda
                </div>
            </Grid>
            <Grid xs={7}>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
}

export default MainSection;