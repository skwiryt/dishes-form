import React from 'react';
import PropTypes from 'prop-types';
import { Typography, AppBar, Toolbar, Container } from '@material-ui/core';

// import styles from './MainLayout.module.scss';

const MainLayout = (props) => (
  <div>
    <AppBar>      
      <Container >
        <Toolbar disableGutters>
          <Typography variant="h6" color="inherit" component="div">
            Dishes-Form recruitment task
          </Typography>
        </Toolbar>
      </Container> 
    </AppBar>
    <Container>
      <Toolbar></Toolbar>    
      {props.children}
    </Container>    
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

/*

*/