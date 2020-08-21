import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

export default function Layout({ children }) {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Box display="flex" justifyContent="space-between">
            <div>
              <Typography variant="h6">xxlee</Typography>
            </div>
            <div>
              <Typography variant="subtitle1">
                <Link to="/posts/">Posts</Link>
              </Typography>
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      <Box mt={8}>{children}</Box>
    </div>
  );
}
