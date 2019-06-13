import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import {MenuItemStyle} from "./MenuItemStyle";
import { Link } from "react-router-dom";


class MenuItems extends Component {
    constructor (props){
        super (props);
        this.state = {
            open: false,
          };
    }

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
      };
    
      handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
          return;
        }
    
        this.setState({ open: false });
      };
    
    render(){
        const { classes} = this.props;
        const { open } = this.state;
        const {name,themes,path} = this.props.item;
        return(
            <div className={classes.menuItem}>
                <div>
                    <Button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        <Link className={classes.link} to={path}>{name}</Link>
                    </Button>

                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >

                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        {
                                            themes.map((th)=> <MenuItem onClick={this.handleClose} key={th.subName}><Link className={classes.link} to={th.subPath}>{th.subName}</Link></MenuItem>)
                                        }
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        )
    }
}

MenuItems.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(MenuItemStyle)(MenuItems);

