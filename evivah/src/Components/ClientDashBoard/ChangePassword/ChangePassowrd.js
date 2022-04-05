import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ChangePassword() {
    const [open, setOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const submitHandler = () => {
        
        if (oldPassword.length === 0 || newPassword.length === 0) {
            toast.warning('Password Cannot be empty')
        }
        else if (newPassword === oldPassword) {
            toast.warning('You have entered same password')
        }

        else {
            const email=sessionStorage.email

            const body = {
                email,
                oldPassword,
                newPassword
            }

            const url = `http://localhost:8080/user/changePassword`
            axios.put(url,body).then((response)=>{
                const result=response.data
                
                setOpen(false)
                if(result["status"]==="success"){
                    toast.success("Password Changed Successfully")
                }
                else{
                    toast.error("Password updation Failed")
                }
            })
        }
    }

    return (
        <div>
            <button onClick={handleOpen}
                style={{ borderRadius: "5px", background: "rgb(0, 0, 111)" }} className="p-2" >
                Change Password
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        fullWidth
                        id="standard-number"
                        label="Old Password"
                        type="text"
                        variant="standard"
                        onChange={(e) => setOldPassword(e.target.value)}
                        sx={{
                            marginBottom: "20px"
                        }}
                    />
                    <TextField
                        fullWidth
                        id="standard-number"
                        label="New Password"
                        type="text"
                        variant="standard"
                        onChange={(e) => setNewPassword(e.target.value)}
                        sx={{
                            marginBottom: "20px"
                        }}
                    />
                    <div style={{ textAlign: "center" }} >
                        <button onClick={submitHandler}
                            style={{ borderRadius: "5px", background: "rgb(0, 0, 111)" }} className="p-2" >
                            Change Password
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default ChangePassword