import React from 'react';
import PropTypes from 'prop-types';
import CityWeatherCard from './CityWeather';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20
  },
  paper: {
    padding: 5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Weather(props) {

  const { classes } = props;

  const cities = [
    { name: 'Berlin', url: "https://earth.esa.int/documents/257246/1485832/Berlin_monument.jpg" },
    { name: 'London', url: "https://bit.ly/2SIsCOM" },
    { name: 'Tokyo', url: "https://bit.ly/2HY1lXf" }
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify="center">
        {cities.map((city) => (
          < Grid item xs key={city.name}>
            <CityWeatherCard className={classes.paper} city={city}></CityWeatherCard>
          </Grid>
        ))
        }
      </Grid>
    </div>
  )
}

Weather.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Weather);