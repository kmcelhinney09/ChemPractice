import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Breadcrumbs, Link } from '@mui/material';
import { useTheme } from '@material-ui/core/styles';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ChemPractice
                    </Typography>
                    <div>
                        {isMobile ? (
                            <>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={handleMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="main-Menu"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Practice Selection</MenuItem>
                                    <MenuItem onClick={handleClose}>Elemen Editing</MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Breadcrumbs aria-label="breadcrumb" separator="|">
                                    <Link underline="hover" color="text.hint" href="/">
                                        Home
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="text.hint"
                                        href="/HighScore"
                                    >
                                        High Scores
                                    </Link>
                                </Breadcrumbs>
                            </>
                        )}

                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;