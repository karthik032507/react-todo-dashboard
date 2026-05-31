import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { Fragment } from "react";

export default function TodoDetails({
    todoDetails, openDialog, setOpenDialog, setTodoDetails
}){
    return <Fragment>
        <Dialog onClose={()=>setOpenDialog(false)}   open={openDialog}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <button  onClick={()=>{
                    setTodoDetails(null);
                    setOpenDialog(false);
                }}>Close</button>
            </DialogActions>
        </Dialog>
    </Fragment>
}