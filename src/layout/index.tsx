import { Box, Drawer } from "@mui/material";
import React, { ReactNode } from "react";

function Layout({ main, sidebar }: { main: ReactNode; sidebar: ReactNode }) {
  const drawerWidth = 320;
  return (
    <Box display={'flex'} width={'100%'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        width={"100%"}
        height={"100vh"}
      >
        {main}
      </Box>

      <Drawer
        anchor="right"
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            overflow: 'visible',
            boxSizing: "border-box",
          },
        }}
      >
        <Box>{sidebar}</Box>
      </Drawer>
    </Box>
  );
}

export default Layout;
