import { MenuItem } from '@mui/material'
import { TextField } from '@mui/material'
import React from 'react'

const selectOption = (theme) => ({
    margin: "7px 0",
    borderRadius: "25px"
})

const ServiceDetails = ({ formData, setFormData,services }) => {
    

    const handleState = (e) => {
        setFormData({ ...formData, serviceName: e.target.value })
    }


    return (
        <div>
            <>
                <TextField
                    sx={selectOption}
                    id="filled-select-state"
                    select
                    label="Select Service"
                    value={formData.serviceName}
                    helperText="Please select your Service"
                    fullWidth
                    onChange={(e) => handleState(e)}
                >
                    {
                        services.map((service) => {
                            return (
                                <MenuItem key={service.id} value={service.serviceName}>
                                    {service.serviceName}
                                </MenuItem>
                            )
                        })}
                </TextField>




                <TextField
                    id="brandName"
                    label="Brand Name"
                    variant="outlined"
                    placeholder="Enter Your Service Brand Name"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    value={formData.brandName}
                />
                <TextField
                    id="specification"
                    label="Specification"
                    variant="outlined"
                    placeholder="Enter Specification of Your Service"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setFormData({ ...formData, specification: e.target.value })}
                    value={formData.specification}
                />
                <TextField
                    id="details"
                    label="Service Details"
                    variant="outlined"
                    placeholder="Enter Detailed Information About Your Service"
                    fullWidth
                    margin="normal"
                    name="country"
                    rows={2}
                    multiline
                    onChange={(e) => setFormData({ ...formData, serviceDetails: e.target.value })}
                    value={formData.serviceDetails}
                />
                <TextField
                    id="price"
                    label="Price"
                    variant="outlined"
                    placeholder="Enter Full Price"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    value={formData.price}

                />
            </>

        </div>
    )
}

export default ServiceDetails