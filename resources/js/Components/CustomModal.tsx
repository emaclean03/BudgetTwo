import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface props {
    isOpen:boolean,
    handleClose: ()=>void,
    handleSave:()=>void,
    title: string,
    subtitle:string,
    children:any
}


const CustomModal = ({isOpen, handleClose, handleSave, title, subtitle, children} : props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
/*
    const handleClose = () => {
        setOpen(false);
    };*/

    return (
        <>
          {/*  <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>*/}
            <Dialog open={isOpen} onClose={handleClose} aria-labeledby={'dialog'}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {subtitle}
                    </DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CustomModal;