import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { Fragment } from "react";
import styles from "../../style.module.css";

export default function TodoDetails({
    todoDetails, openDialog, setOpenDialog, setTodoDetails
}){
    return <Fragment>
        <Dialog onClose={()=>setOpenDialog(false)}   open={openDialog}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <button className={styles.closeButton} onClick={()=>{
                    setTodoDetails(null);
                    setOpenDialog(false);
                }}>Close</button>
            </DialogActions>
        </Dialog>
    </Fragment>
}
