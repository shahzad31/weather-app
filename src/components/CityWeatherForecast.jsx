import React, { useState, useEffect } from 'react';
import { GetCityWeatherForecast } from '../services/api.service';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: 5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CityWeatherForecast(props) {

  const { classes, match: { params } } = props;


  const [forecast, setForecast] = useState({ name: '', list: [] });

  const [value, setValue] = useState(0);


  useEffect(() => {
    GetCityWeatherForecast(params.cityId).then((response) => {
      setForecast(response);
    });
  }, [params]);


  const handleChange = (event, val) => {
    setValue(val);
  };


  return (
    <div className={classes.root}>
      <Typography variant="h4">{params.cityId} <ArrowForward /> Hourly Forecast</Typography>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} scrollable="true" scrollButtons="auto">
          {
            forecast.list.map((item, ind)=>(
              <Tab key={ind} label={new Date(item.dt_txt).toLocaleTimeString()} />
            ))
          }
        </Tabs>
      </AppBar>
      {
        forecast.list.map((item, ind) => {
          return value === ind ? <TabContainer key={ind}>
            <Paper className={classes.paper}>
              <Typography variant="h6" color="textSecondary">
                Temp: {item.main && item.main.temp}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Min Temp: {item.main && item.main.temp_min}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Max Temp: {item.main && item.main.temp_max}
              </Typography>
            </Paper>
          </TabContainer> : null
        })
      }
    </div>
  );
}

CityWeatherForecast.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityWeatherForecast);
