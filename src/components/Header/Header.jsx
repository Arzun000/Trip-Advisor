import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = () => {

    const classes= useStyles();

  return (
    <AppBar position='static'style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <Toolbar className={classes.Toolbar}>
            <Typography variant="h5" className={classes.title}>
                Travel Advisor
            </Typography>
        </Toolbar>
        <Box display="flex">
            <Typography variant="h6" className={classes.title} style={{display:'flex', flexDirection:'row',height:'30px', margin:'20px auto auto auto'}} >
                Explore New Places
                {/* <Autocomplete> */}
                    <div className={classes.search} >
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search . . ." classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                    </div>
                {/* </Autocomplete> */}
            </Typography>
        </Box>
    </AppBar>
  );
}

export default Header;
