import React, { useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import '../CSS/vidioHomeCss.css'; // קובץ סגנון CSS של הקומפוננטה
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function VidioHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  function createData(name, family, adress, poghn, drone,yes,no) {
    return { name, family, adress, poghn, drone,yes,no};
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const [fullName, setFullName] = useState("");
  const [Mail, setMail] = useState("");

  return (<>
   <div className="component-container">
      {/* תוכן הקומפוננטה */}
      {/* #c98a45 */}
    <Box sx={{ backgroundcolor:'#c98a45', display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             <img src={"/13234.png"} style={{ height: "100px", borderRadius: "100px" }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      
      <Button variant="outlined" sx={{padding:"20px", margin:"50px",border: "2px solid white" ,color:"white"}} onClick={handleClickOpen3}>
        אישור כניסת משתמשים
      </Button>
      <Button variant="outlined" sx={{padding:"20px",margin:"50px",border: "2px solid white",color:"white"}} onClick={handleClickOpen2}>
חדר בקרה בזמן אצת      </Button>
      <Button sx={{padding:"20px", margin:"50px",border: "2px solid white",color:"white"}}  onClick={handleClickOpen1}>        שליחת קריאה
           </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      */}
    </Box> 

    


    <Dialog open={open1} onClose={handleClose1}>
        <DialogTitle>:פרטי שליחת הקריאה</DialogTitle>
        <DialogContent>
        <TextField
          sx={{
            marginTop: 3,
            borderRadius: "30px",
          }}
         
          id="FullName-basic"
          label="נקודת ציון"
          variant="outlined"
          onChange={(e) => {setFullName(e.target.value) }}
        />
        <br/>
        <TextField
          sx={{
            marginTop: 3,
            borderRadius: "15px",
          }}
          id="Mail-basic"
          label="רדיוס"
          variant="outlined"
          onChange={(e) => {setMail(e.target.value)}}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>שליחה</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen
        open={open2}
        onClose={handleClose2}
  
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose2}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              חדר בקרה
            </Typography>
            
          </Toolbar>
        </AppBar>
        
      </Dialog>

      <Dialog
        fullScreen
        open={open3}
        onClose={handleClose3}
  
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose3}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose3}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell> לאשר</TableCell>
          <TableCell>לא לאשר</TableCell>
            <TableCell>מספר פלאפון</TableCell>
            <TableCell align="right">מייל</TableCell>
            <TableCell align="right">פלאפון</TableCell>
            <TableCell align="right">משפחה</TableCell>
            <TableCell align="right">שם</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell> <Button variant="outlined"  onClick={handleClickOpen3}>
        אשר
        </Button></TableCell>
        <TableCell> <Button variant="outlined"  onClick={handleClickOpen3}>
        מחק
      </Button></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.family}</TableCell>
              <TableCell align="right">{row.adress}</TableCell>
              <TableCell align="right">{row.poghn}</TableCell>
              <TableCell align="right">{row.drone}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Dialog> </div>
    </>
    
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
//};

export default VidioHome;