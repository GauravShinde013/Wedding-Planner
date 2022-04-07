import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { PhotoCamera } from '@mui/icons-material';

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
    const [serviceName, setServiceName] = useState("");
    const [imgFile, setImgFile] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const submitHandler = () => {

        let formData = new FormData();

        if (serviceName.length === 0) {
            toast.warning('service name Cannot be empty')
        }
        else if (imgFile && !(imgFile.type.includes("image/"))) {
            toast.error("Invalid Image Type.")
        }
        else if ((imgFile.size / 1000000) > 10) {
            toast.error("File Size Exceeded 10Mb.");
        }


        else {
            formData.append("serviceImg", imgFile)
            

            formData.append('jsonBodyData',
            new Blob(
              [JSON.stringify(
                {
                    "name":serviceName
                })
              ],
              { type: 'application/json' }
            ))

            const url = `http://localhost:8080/masterservice/add`
            axios.post(url, formData).then((response) => {
                const result = response.data

                setOpen(false)
                if (result["status"] === "success") {
                    toast.success("New Category Added Successfully")
                }
                else {
                    toast.error("Category Insertion Failed")
                }
            })
        }
    }

    const uploadHandler = (e) => {
        setImgFile(e.target.files[0])
    }

    return (
        <div>
            <button onClick={handleOpen}
                style={{ borderRadius: "5px", background: "rgb(0, 0, 111)" }} className="p-2" >
                Add New Service
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
                        label="New Category Name"
                        type="text"
                        variant="standard"
                        onChange={(e) => setServiceName(e.target.value)}
                        sx={{
                            marginBottom: "20px"
                        }}
                    />
                    <div className="d-flex align-items-center justify-content-between">

                        <label htmlFor="icon-button-file">
                            Photo:
                            <input
                                onChange={uploadHandler}
                                accept="image/*"
                                style={{ display: "none" }}
                                id="icon-button-file" type="file"
                            />
                            <PhotoCamera color="primary" sx={{ marginLeft: "6px", cursor: "pointer" }} />
                        </label>



                    </div>
                    <div style={{ textAlign: "center" }} >
                        <button onClick={submitHandler}
                            style={{ borderRadius: "5px", background: "rgb(0, 0, 111)" }} className="p-2" >
                            Add
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default ChangePassword