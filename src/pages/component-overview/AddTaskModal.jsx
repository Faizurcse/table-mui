import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    body1: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '0.875rem',
      color: '#555',
    },
  },
});

const AddTaskModal = ({ open, handleClose }) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ backgroundColor: '#e0f7fa' }}>Add Task</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            {/* Task Title */}
            <TextField label="Task Title" variant="outlined" fullWidth />

            {/* Task Description */}
            <TextField
              label="Task Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
            />

            {/* Created Date */}
            <TextField
              label="Created Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            {/* Created By */}
            <TextField label="Created By" variant="outlined" fullWidth />

            {/* Assign To */}
            <Box>
              <Typography variant="h6" gutterBottom>
                Assigned To
              </Typography>
              <FormControl component="fieldset">
                <Box display="flex" alignItems="center" gap={1}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Box display="flex" alignItems="center" gap={1}>
                      <Avatar src="https://i.pravatar.cc/150?img=5" alt="Emily Johnson" />

                      <Typography variant="subtitle1">James Forbes</Typography>
                    </Box>}
                  />
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Box display="flex" alignItems="center" gap={1}>
                      <Avatar src="https://i.pravatar.cc/150?img=8" alt="Daniel Brown" />
                      <Typography variant="subtitle1">John Robles</Typography>
                    </Box>}
                  />
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Box display="flex" alignItems="center" gap={1}>
                     <Avatar src="https://i.pravatar.cc/150?img=7" alt="Sophia Lee" />
                      <Typography variant="subtitle1">Mary Gant</Typography>
                    </Box>}
                  />
                </Box>
              </FormControl>
            </Box>

            {/* Follow-up Date */}
            <TextField
              label="Follow-up Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            {/* Status */}
            <FormControl fullWidth>
              <Select defaultValue="" displayEmpty>
                <MenuItem value="" disabled>
                  Status
                </MenuItem>
                <MenuItem value="Not Started">Not Started</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>

            {/* Priority */}
            <FormControl fullWidth>
              <Select defaultValue="" displayEmpty>
                <MenuItem value="" disabled>
                  Priority
                </MenuItem>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>

            {/* Comments */}
            <TextField
              label="Comments"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Close
          </Button>
          <Button variant="contained" color="success">
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default AddTaskModal;
