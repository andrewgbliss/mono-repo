import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import Calculator from 'components/Calculator/Calculator';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import * as Firebase from 'services/Firebase';
import Snackbar from '@mui/material/Snackbar';
import Grid from '@mui/material/Grid';
// import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@mui/material/IconButton';

// import defaultTheme from 'themes/default';
// import darkTheme from 'themes/dark';
import background from 'img/background.jpg';
import icon from 'img/icon.png';
// import { useLocalStorage } from 'src/hooks/useLocalStorage';

// const Items = ({ classes, items, addNewItem, removeItem, updateItem }) => {
//   const [newItem, setNewItem] = useState({
//     text: '',
//     hours: 8,
//   });
//   return (
//     <div className={classes.root}>
//       <Typography>
//         Please enter an itemized list of each task. Each task description and an
//         estimate of how many hours it will take to accomplish.
//       </Typography>
//       {items.map((item, index) => {
//         return (
//           <Grid container key={index}>
//             <Grid item xs={7}>
//               <TextField
//                 id="item"
//                 label="Item"
//                 className={classes.textField}
//                 value={item.text}
//                 margin="normal"
//                 fullWidth
//                 onChange={(e) =>
//                   updateItem(index, {
//                     ...item,
//                     text: e.target.value,
//                   })
//                 }
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <TextField
//                 id="hours"
//                 label="Hours"
//                 className={classes.textField}
//                 value={item.hours}
//                 margin="normal"
//                 fullWidth
//                 onChange={(e) =>
//                   updateItem(index, {
//                     ...item,
//                     hours: e.target.value,
//                   })
//                 }
//                 type="number"
//               />
//             </Grid>
//             <Grid item xs={1}>
//               <IconButton
//                 aria-label="Delete"
//                 className={classes.margin}
//                 onClick={() => {
//                   removeItem(index);
//                 }}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </Grid>
//           </Grid>
//         );
//       })}
//       <Grid container>
//         <Grid item xs={7}>
//           <TextField
//             id="newItem"
//             label="New Item"
//             className={classes.textField}
//             value={newItem.text}
//             onChange={(e) =>
//               setNewItem({
//                 ...newItem,
//                 text: e.target.value,
//               })
//             }
//             margin="normal"
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={4}>
//           <TextField
//             id="hours"
//             label="Hours"
//             className={classes.textField}
//             value={newItem.hours}
//             onChange={(e) =>
//               setNewItem({
//                 ...newItem,
//                 hours: e.target.value,
//               })
//             }
//             margin="normal"
//             fullWidth
//             type="number"
//           />
//         </Grid>
//         <Grid item xs={1} />
//       </Grid>
//       <Button
//         variant="contained"
//         color="primary"
//         className={classes.button}
//         onClick={() => {
//           addNewItem({
//             text: newItem.text,
//             hours: newItem.hours,
//           });
//           setNewItem({
//             text: '',
//             hours: 8,
//           });
//         }}
//         disabled={!newItem.text}
//       >
//         Add New Item
//       </Button>
//     </div>
//   );
// };

// let bid = null;
// const parts = window.location.href.split('/');
// const id = parts[parts.length - 1];

// const Calculator = () => {
//   const [open, setOpen] = useState(false);
//   const [snackbarMsg, setSnackbarMsg] = useState('');
//   const [options, setOptions] = useState({
//     totalCost: 0,
//     weeks: 0,
//     daysPerWeek: 5,
//     hoursPerDay: 8,
//     rate: 40,
//     estimatedHours: 0,
//   });
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     const estimateOfHours = items.reduce((sum, item) => {
//       return sum + Number(item.hours);
//     }, 0);
//     options.estimatedHours = estimateOfHours;
//     if (
//       options.estimatedHours > 0 &&
//       options.daysPerWeek &&
//       options.hoursPerDay
//     ) {
//       const hoursPerWeek =
//         Number(options.daysPerWeek) * Number(options.hoursPerDay);
//       const totalWeeks = Number(options.estimatedHours) / Number(hoursPerWeek);
//       options.weeks = totalWeeks;
//       options.totalCost = Number(options.estimatedHours) * Number(options.rate);
//     }
//     setOptions({
//       ...options,
//     });
//   }, [options]);
//   const fetchBid = async () => {
//     if (bid || !id) {
//       return;
//     }
//     try {
//       bid = await Firebase.getBidById(id);
//       if (bid) {
//         setItems(bid.items);
//         setOptions({
//           ...bid,
//         });
//       }
//     } catch (e) {
//       console.error(e);
//       if (id) {
//         setTimeout(() => {
//           window.location.reload();
//         }, 1000);
//       }
//     }
//   };
//   useEffect(() => {
//     fetchBid();
//   }, []);
//   const saveBid = async () => {
//     const result = await Firebase.saveBid(id, {
//       items,
//       ...options,
//     });
//     if (result && result.id) {
//       window.location.href = '/' + result.id;
//     }
//     setOpen(true);
//     setSnackbarMsg('Saved Successful');
//   };
//   const addNewItem = (item) => {
//     setItems([...items, item]);
//   };
//   const updateItem = (index, item) => {
//     setItems([...items.slice(0, index), item, ...items.slice(index + 1)]);
//   };
//   const removeItem = (index) => {
//     setItems([...items.slice(0, index), ...items.slice(index + 1)]);
//   };
//   return (
//     <div className={classes.root}>
//       <Items
//         items={items}
//         addNewItem={addNewItem}
//         removeItem={removeItem}
//         updateItem={updateItem}
//       />
//       <TextField
//         id="estimated-hours"
//         label="Estimated Hours"
//         className={classes.textField}
//         value={options.estimatedHours}
//         margin="normal"
//         type="number"
//         fullWidth
//         disabled
//       />
//       <Typography className={classes.margin}>
//         You can estimate how many weeks, days per week, hours per day, and rate,
//         to calculate the total cost.
//       </Typography>
//       <TextField
//         id="days-per-week"
//         label="Days Per Week"
//         className={classes.textField}
//         value={options.daysPerWeek}
//         onChange={(e) => {
//           setOptions({
//             ...options,
//             daysPerWeek: e.target.value,
//           });
//         }}
//         margin="normal"
//         type="number"
//       />
//       <TextField
//         id="hours-per-day"
//         label="Hours Per Day"
//         className={classes.textField}
//         value={options.hoursPerDay}
//         onChange={(e) => {
//           setOptions({
//             ...options,
//             hoursPerDay: e.target.value,
//           });
//         }}
//         margin="normal"
//         type="number"
//       />
//       <TextField
//         id="weeks"
//         label="Weeks To Completion"
//         className={classes.textField}
//         value={options.weeks}
//         onChange={(e) => {
//           setOptions({
//             ...options,
//             weeks: e.target.value,
//           });
//         }}
//         margin="normal"
//         type="number"
//       />
//       <TextField
//         id="rate"
//         label="Rate Per Hour"
//         className={classes.textField}
//         value={options.rate}
//         onChange={(e) => {
//           setOptions({
//             ...options,
//             rate: e.target.value,
//           });
//         }}
//         margin="normal"
//         type="number"
//       />
//       <TextField
//         id="total-cost"
//         label="Total Cost"
//         className={classes.textField}
//         value={options.totalCost}
//         onChange={(e) => {
//           setOptions({
//             ...options,
//             totalCost: e.target.value,
//           });
//         }}
//         margin="normal"
//         type="number"
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         className={classes.button}
//         onClick={saveBid}
//       >
//         Save Bid
//       </Button>
//       <Snackbar
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//         open={open}
//         onClose={() => setOpen(false)}
//         ContentProps={{
//           'aria-describedby': 'message-id',
//         }}
//         message={snackbarMsg}
//         autoHideDuration={3000}
//       />
//     </div>
//   );
// };

const BidCalculator = () => {
  // const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  return (
    <>Bid Calculator</>
    // <MuiThemeProvider theme={darkMode ? darkTheme : defaultTheme}>
    //   <CssBaseline />
    //   <Grid container justify="center">
    //     <Grid item>
    //       <Paper>
    //         <Grid
    //           container
    //           justify="center"
    //           alignItems="center"
    //           direction="column"
    //         >
    //           <Grid item>
    //             <Grid container justify="center" alignItems="center">
    //               <Grid item style={{ marginRight: 5 }}>
    //                 <img src={icon} alt="" />
    //               </Grid>
    //               <Grid item>
    //                 <Typography component="h1" variant="h5">
    //                   child consulting
    //                 </Typography>
    //               </Grid>
    //             </Grid>
    //           </Grid>
    //           <Grid item>
    //             <Typography component="h1" variant="h4">
    //               Bid Calculator
    //             </Typography>
    //           </Grid>
    //           <Grid item>
    //             <Calculator />
    //           </Grid>
    //           <Grid item>
    //             <FormControlLabel
    //               control={
    //                 <Switch
    //                   checked={darkMode}
    //                   onChange={() => setDarkMode(!darkMode)}
    //                 />
    //               }
    //               label="Dark Mode"
    //             />
    //           </Grid>
    //         </Grid>
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </MuiThemeProvider>
  );
};

export default BidCalculator;
