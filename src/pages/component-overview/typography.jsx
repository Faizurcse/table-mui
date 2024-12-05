import React, { useState } from 'react';
import {
  Container,
  Box,
  Checkbox,
  Avatar,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  TablePagination
} from '@mui/material';
import { SearchOutlined, FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { FormControl, MenuItem, Select, OutlinedInput } from '@mui/material';
import { PiCaretUpDownFill } from 'react-icons/pi';
import AddTaskModal from './AddTaskModal';

const columns = [
  { id: 'title', label: 'Title', align: 'center', minWidth: 170, icon: PiCaretUpDownFill },
  { id: 'description', label: 'Description', align: 'center', minWidth: 170, icon: PiCaretUpDownFill },
  { id: 'createdDate', label: 'Created Date', align: 'center', minWidth: 170, icon: PiCaretUpDownFill },
  { id: 'createdBy', label: 'Created By', align: 'center', minWidth: 170, icon: PiCaretUpDownFill },
  { id: 'assignedTo', label: 'Assigned To', align: 'center', minWidth: 170, icon: PiCaretUpDownFill },
  { id: 'followUpDate', label: 'Follow Up Date', align: 'center', minWidth: 170, icon: PiCaretUpDownFill },
  { id: 'status', label: 'Status', align: 'center', minWidth: 170, icon: PiCaretUpDownFill },
  { id: 'priority', label: 'Priority', align: 'center', minWidth: 170, icon: PiCaretUpDownFill },
  { id: 'comments', label: 'Comments', align: 'center', minWidth: 170, icon: PiCaretUpDownFill }
];

function createData(id, title, description, createdDate, createdBy, assignedTo, followUpDate, status, priority, comments) {
  return { id, title, description, createdDate, createdBy, assignedTo, followUpDate, status, priority, comments };
}

const rows = [
  createData(1, 'Task 1', 'Description 1', '2024-12-05', 'John Doe', 'https://i.pravatar.cc/150?img=5', '2024-12-10', 'Pending', 'High', 'Some comments here'),
  createData(2, 'Task 2', 'Description 2', '2024-12-06', 'Jane Smith', 'https://i.pravatar.cc/150?img=6', '2024-12-11', 'In Progress', 'Medium', 'More comments'),
  createData(3, 'Task 3', 'Description 3', '2024-12-07', 'Alex Brown', 'https://i.pravatar.cc/150?img=7', '2024-12-12', 'Completed', 'Low', 'Additional notes'),
  createData(4, 'Task 4', 'Description 4', '2024-12-08', 'Lucy Green', 'https://i.pravatar.cc/150?img=8', '2024-12-13', 'Pending', 'High', 'Some more comments'),
  createData(1, 'Task 1', 'Description 1', '2024-12-05', 'John Doe', 'https://i.pravatar.cc/150?img=5', '2024-12-10', 'Pending', 'High', 'Some comments here'),
  createData(2, 'Task 2', 'Description 2', '2024-12-06', 'Jane Smith', 'https://i.pravatar.cc/150?img=6', '2024-12-11', 'In Progress', 'Medium', 'More comments'),
  createData(3, 'Task 3', 'Description 3', '2024-12-07', 'Alex Brown', 'https://i.pravatar.cc/150?img=7', '2024-12-12', 'Completed', 'Low', 'Additional notes'),
  createData(4, 'Task 4', 'Description 4', '2024-12-08', 'Lucy Green', 'https://i.pravatar.cc/150?img=8', '2024-12-13', 'Pending', 'High', 'Some more comments'),
  createData(1, 'Task 1', 'Description 1', '2024-12-05', 'John Doe', 'https://i.pravatar.cc/150?img=5', '2024-12-10', 'Pending', 'High', 'Some comments here'),
  createData(2, 'Task 2', 'Description 2', '2024-12-06', 'Jane Smith', 'https://i.pravatar.cc/150?img=6', '2024-12-11', 'In Progress', 'Medium', 'More comments'),
  createData(3, 'Task 3', 'Description 3', '2024-12-07', 'Alex Brown', 'https://i.pravatar.cc/150?img=7', '2024-12-12', 'Completed', 'Low', 'Additional notes'),
  createData(4, 'Task 4', 'Description 4', '2024-12-08', 'Lucy Green', 'https://i.pravatar.cc/150?img=8', '2024-12-13', 'Pending', 'High', 'Some more comments'),
  createData(1, 'Task 1', 'Description 1', '2024-12-05', 'John Doe', 'https://i.pravatar.cc/150?img=5', '2024-12-10', 'Pending', 'High', 'Some comments here'),
  createData(2, 'Task 2', 'Description 2', '2024-12-06', 'Jane Smith', 'https://i.pravatar.cc/150?img=6', '2024-12-11', 'In Progress', 'Medium', 'More comments'),
  createData(3, 'Task 3', 'Description 3', '2024-12-07', 'Alex Brown', 'https://i.pravatar.cc/150?img=7', '2024-12-12', 'Completed', 'Low', 'Additional notes'),
  createData(4, 'Task 4', 'Description 4', '2024-12-08', 'Lucy Green', 'https://i.pravatar.cc/150?img=8', '2024-12-13', 'Pending', 'High', 'Some more comments'),
  createData(1, 'Task 1', 'Description 1', '2024-12-05', 'John Doe', 'https://i.pravatar.cc/150?img=5', '2024-12-10', 'Pending', 'High', 'Some comments here'),
  createData(2, 'Task 2', 'Description 2', '2024-12-06', 'Jane Smith', 'https://i.pravatar.cc/150?img=6', '2024-12-11', 'In Progress', 'Medium', 'More comments'),
  createData(3, 'Task 3', 'Description 3', '2024-12-07', 'Alex Brown', 'https://i.pravatar.cc/150?img=7', '2024-12-12', 'Completed', 'Low', 'Additional notes'),
  createData(4, 'Task 4', 'Description 4', '2024-12-08', 'Lucy Green', 'https://i.pravatar.cc/150?img=8', '2024-12-13', 'Pending', 'High', 'Some more comments'),
];

export function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
        sx={{
          maxHeight: 440,
          overflow: 'auto', // Enable scrolling
          '&::-webkit-scrollbar': {
            width: '8px', // Scrollbar width
            height: '8px' // Scrollbar height
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888', // Scrollbar thumb color
            borderRadius: '4px', // Rounded corners for thumb
            '&:hover': {
              backgroundColor: '#555' // Darker color on hover
            }
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1', // Scrollbar track color
            borderRadius: '4px' // Rounded corners for track
          }
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                padding="checkbox"
                align="center"
                style={{
                  backgroundColor: 'rgb(154 174 209 / 18%)',
                  borderRight: 'none'
                }}
              >
                <Checkbox size="small" />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: 'rgb(154 174 209 / 18%)',
                    borderRight: 'none'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {column.icon && (
                      <column.icon
                        style={{
                          marginRight: '5px',
                          fontSize: '1rem'
                        }}
                      />
                    )}
                    {column.label}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                <TableCell padding="checkbox" align="center">
                  <Checkbox size="small" />
                </TableCell>
                {columns.map((column) => {
                  const value = row[column.id];

                  // Apply background color only to the status and priority columns
                  let cellStyle = {};
                  if (column.id === 'status') {
                    cellStyle = {
                      backgroundColor:
                        value === 'Pending'
                          ? '#ffcccc' // Light red for "Pending"
                          : value === 'In Progress'
                            ? '#fff4cc' // Light yellow for "In Progress"
                            : value === 'Completed'
                              ? '#ccffcc' // Light green for "Completed"
                              : 'inherit', // Default background

                      padding: '5px',

                      borderRadius: '10px'
                    };
                  } else if (column.id === 'priority') {
                    cellStyle = {
                      backgroundColor:
                        value === 'High'
                          ? '#f8d7da' // Light red for "High"
                          : value === 'Medium'
                            ? '#fff3cd' // Light yellow for "Medium"
                            : value === 'Low'
                              ? '#d4edda' // Light green for "Low"
                              : 'inherit', // Default background

                      padding: '5px',

                      borderRadius: '10px'
                    };
                  }

                  return (
                    <TableCell key={column.id} align="center">
                      {/* If the column is "assignedTo", render an Avatar */}
                      {column.id === 'assignedTo' ? (
                        <Avatar  sx={{marginLeft:"60px"}}  alt={row.createdBy} src={value} />
                      ) : column.id === 'status' || column.id === 'priority' ? (
                        <Box sx={{marginLeft:"25px"}} component="span" align="center" style={cellStyle}>
                          {value}
                        </Box>
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}



const App = () => {
  // State to control the modal's visibility
  const [open, setOpen] = useState(false);

  // Functions to open and close the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedOption, setSelectedOption] = useState('All');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 3, flexWrap: 'wrap' }}>
        {/* Search Input */}
        <Grid item xs={12} sm={5}>
          <OutlinedInput
            sx={{ backgroundColor: 'rgb(154 174 209 / 18%)' }}
            id="search-task"
            type="text"
            placeholder="Search for tasks and items"
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlined style={{ fontSize: '1.2rem' }} />
              </InputAdornment>
            }
            fullWidth
          />
        </Grid>

        {/* Date Range Input */}
        <Grid item xs={12} sm={2}>
          <OutlinedInput
            sx={{ backgroundColor: 'rgb(154 174 209 / 18%)' }}
            id="date-range"
            type="text2"
            placeholder="Select date range"
            fullWidth
          />
        </Grid>

        {/* Dropdown Menu */}
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth>
            <Select
              sx={{ backgroundColor: 'rgb(154 174 209 / 18%)' }}
              value={selectedOption}
              onChange={handleChange}
              displayEmpty
              fullWidth
              inputProps={{ 'aria-label': 'Filter by programming language' }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="java">Java</MenuItem>
              <MenuItem value="python">Python</MenuItem>
              <MenuItem value="javascript">JavaScript</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Filter Button */}
        <Grid item>
          <Button variant="contained" startIcon={<FilterOutlined />}>
            Filters
          </Button>
        </Grid>

        {/* Add Task Button */}
        <Grid item>
          <Button variant="contained" onClick={handleOpen} startIcon={<PlusOutlined />}>
            Add Task
          </Button>
        </Grid>
      </Grid>

      {/* table render here */}
      <StickyHeadTable />
      {/* end */}

      <AddTaskModal  open={open} handleClose={handleClose} />
   
    </Container>
    
  );
};

export default App;

