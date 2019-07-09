import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Refresh from '@material-ui/icons/Refresh';
import LocationCity from '@material-ui/icons/LocationCity';
import ArrowRight from '@material-ui/icons/ArrowRight';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import { GetCityWeather } from '../services/api.service';

const styles = theme => ({
  card: {
    display: 'flex',
    padding: 10
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  }
});

function CityWeatherCard(props) {
  const { classes, city } = props;

  const [weather, setWeather] = useState({ name: '', main: {} });

  useEffect(() => {
    GetCityWeather(city.name).then((response) => {
      setWeather(response);
    });
  }, [city]);

  const refreshWeatherData = () => {
    GetCityWeather(city.name).then((response) => {
      setWeather(response);
    });
  }

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h4">{weather.name}<LocationCity /></Typography>
          <Typography variant="h6" color="textSecondary">
            Temp: {weather.main && weather.main.temp}         
             <IconButton aria-label="Refresh" onClick={refreshWeatherData}> <Refresh />
            </IconButton>
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Min Temp: {weather.main && weather.main.temp_min}         
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Max Temp: {weather.main && weather.main.temp_max}
          </Typography>
        </CardContent>
        <Link to={"/weather/"+city.name}>
          <Button variant="outlined" color="primary" aria-label="Detail" className={classes.button}>
            <ArrowRight className={classes.extendedIcon} />
            Forecast
          </Button>
        </Link>
      </div>
      <CardMedia
        className={classes.cover}
        image={city.url}
        title="Live from space album cover"
      />
    </Card>
  );
}

CityWeatherCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CityWeatherCard);