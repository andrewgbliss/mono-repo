// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
// import Header from '../Header/Header';
// import MapContainer from '../../containers/MapContainer/MapContainer';
// import LocationsContainer from '../../containers/LocationsContainer/LocationsContainer';
// import CreateLocationContainer from '../../containers/CreateLocationContainer/CreateLocationContainer';
// import GoogleMapApiKeyContainer from '../../containers/GoogleMapApiKeyContainer/GoogleMapApiKeyContainer';

// const styles = (theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
//   paper: {
//     padding: theme.spacing.unit * 6,
//     [theme.breakpoints.down('xs')]: {
//       padding: theme.spacing.unit * 2,
//     },
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// });

// class CreateLocation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lat: '',
//       long: '',
//       error: '',
//     };
//   }
//   longValueChange(e) {
//     this.setState({
//       long: e.target.value,
//     });
//   }
//   latValueChange(e) {
//     this.setState({
//       lat: e.target.value,
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     const { lat, long } = this.state;
//     if (!Number(lat)) {
//       this.setState({
//         error: 'Latitude must be a number',
//       });
//       return;
//     }
//     if (!Number(long)) {
//       this.setState({
//         error: 'Longitude must be a number',
//       });
//       return;
//     }
//     this.props.addLocation(Number(lat), Number(long));
//     const nextLocationIndex = this.props.locations.length;
//     this.props.selectLocation(nextLocationIndex);
//     this.setState({
//       lat: '',
//       long: '',
//       error: '',
//     });
//   }
//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit.bind(this)}>
//           <TextField
//             id="lat"
//             label="Latitude"
//             className={classes.textField}
//             value={this.state.lat}
//             onChange={this.latValueChange.bind(this)}
//             margin="normal"
//             required
//           />
//           <TextField
//             id="long"
//             label="Longitude"
//             className={classes.textField}
//             value={this.state.long}
//             onChange={this.longValueChange.bind(this)}
//             margin="normal"
//             required
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.button}
//             type="submit"
//           >
//             Add
//           </Button>
//         </form>
//         {this.state.error && (
//           <div className={classes.error}>{this.state.error}</div>
//         )}
//       </div>
//     );
//   }
// }

// import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from 'react-google-maps';

// const GoogleMapWithMarker = ({ lat, long, googleMapApiKey }) => {
//   const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&v=3.exp&libraries=geometry,drawing,places`;
//   const MapWithAMarker = withScriptjs(
//     withGoogleMap(({ lat, long }) => (
//       <GoogleMap defaultZoom={12} defaultCenter={{ lat, lng: long }}>
//         <Marker position={{ lat, lng: long }} />
//       </GoogleMap>
//     ))
//   );
//   return (
//     <div>
//       <MapWithAMarker
//         googleMapURL={GOOGLE_MAP_URL}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//         lat={lat}
//         long={long}
//       />
//     </div>
//   );
// };

// GoogleMapWithMarker.propTypes = {
//   lat: PropTypes.number.isRequired,
//   long: PropTypes.number.isRequired,
//   googleMapApiKey: PropTypes.string.isRequired,
// };

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const styles = theme => ({
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   button: {
//     margin: theme.spacing.unit,
//   },
// });

// class GoogleMapApiKey extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       key: '',
//     };
//   }
//   handleChange(e) {
//     this.setState({
//       key: e.target.value,
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.setGoogleMapApiKey(this.state.key);
//   }
//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit.bind(this)}>
//           <TextField
//             id="key"
//             label="Google Map API Key"
//             className={classes.textField}
//             value={this.state.key}
//             onChange={this.handleChange.bind(this)}
//             margin="normal"
//             required
//             fullWidth={true}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.button}
//             type="submit"
//           >
//             Submit
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

// GoogleMapApiKey.propTypes = {
//   classes: PropTypes.object.isRequired,
//   setGoogleMapApiKey: PropTypes.func.isRequired,
// };

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import IconButton from '@material-ui/core/IconButton';
// import MapMarkerIcon from '@material-ui/icons/Map';
// import DeleteIcon from '@material-ui/icons/Delete';

// const styles = theme => ({
//   root: {
//     cursor: 'pointer',
//     '&:hover': {
//       backgroundColor: '#efefef',
//     },
//   },
//   selected: {
//     backgroundColor: '#efefef',
//   },
// });

// const Location = ({
//   lat,
//   long,
//   onClick,
//   index,
//   classes,
//   selected,
//   onDelete,
// }) => {
//   let className = '';
//   if (selected) {
//     className = classes.selected;
//   }
//   return (
//     <ListItem
//       className={className}
//       classes={{ root: classes.root }}
//       divider
//       onClick={() => onClick(index)}
//     >
//       <ListItemIcon>
//         <MapMarkerIcon />
//       </ListItemIcon>
//       <ListItemText primary={lat + ', ' + long} />
//       <ListItemSecondaryAction>
//         <IconButton aria-label="Delete" onClick={() => onDelete(index)}>
//           <DeleteIcon />
//         </IconButton>
//       </ListItemSecondaryAction>
//     </ListItem>
//   );
// };

// Location.propTypes = {
//   lat: PropTypes.number.isRequired,
//   long: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   index: PropTypes.number.isRequired,
//   selected: PropTypes.bool.isRequired,
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Location);

// import React from 'react';
// import PropTypes from 'prop-types';
// import Location from '../Location/Location';
// import List from '@material-ui/core/List';

// const LocationsList = ({
//   locations,
//   selectedLocationIndex,
//   onClick,
//   onDelete,
// }) => (
//   <List>
//     {locations.map((location, index) => (
//       <Location
//         key={index}
//         {...location}
//         onClick={onClick}
//         onDelete={onDelete}
//         index={index}
//         selected={index === selectedLocationIndex}
//       />
//     ))}
//   </List>
// );

// LocationsList.propTypes = {
//   locations: PropTypes.arrayOf(
//     PropTypes.shape({
//       lat: PropTypes.number.isRequired,
//       long: PropTypes.number.isRequired,
//     }).isRequired
//   ).isRequired,
//   selectedLocationIndex: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default LocationsList;

const GoogleMap = () => {
  return (
    <>Google Map</>
    // <div className={classes.root}>
    //   <Grid container spacing={24} justify="center">
    //     <Grid item xs={12} sm={10} md={8}>
    //       <Paper className={classes.paper}>
    //         <Header />
    //         {!googleMapApiKey && <GoogleMapApiKeyContainer />}
    //         {googleMapApiKey && (
    //           <div>
    //             <MapContainer />
    //             <Divider />
    //             <LocationsContainer />
    //             <CreateLocationContainer />
    //           </div>
    //         )}
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default GoogleMap;
