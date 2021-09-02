import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar as MaterialUiAppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    links: {
        textDecoration: 'none',
        height: '100%',
        color: theme.palette.background.paper,
    },
    dropLinks: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
    linkButton: {
        padding: '16px 8px',
        color: '#fff'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    MailIcon: {
        color: theme.palette.background.paper,
    }
}));

const AppBar = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'AppBarMenu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Link to='/profile' className={classes.dropLinks}>
                    Профиль
                </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                Выйти
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'AppBarMenu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem>
                <Link to='/chat' className={classes.dropLinks}>
                    <IconButton aria-label="show new mails" color="inherit">
                        <Badge color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <span>Сообщения</span>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <span>Профиль</span>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <MaterialUiAppBar position='static'>
                <Toolbar>
                    <Link to='/' className={classes.links}>
                        <Button className={classes.linkButton}>
                            Главная
                        </Button>
                    </Link>

                    <Link to='/playground' className={classes.links}>
                        <Button className={classes.linkButton}>
                            Playground
                        </Button>
                    </Link>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link to='/chat' className={classes.links}>
                            <IconButton aria-label="show new mails" color="inherit">
                                <MailIcon />
                            </IconButton>
                        </Link>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </MaterialUiAppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};

AppBar.propTypes = {
    to: PropTypes.string.isRequired,
};

export default AppBar;