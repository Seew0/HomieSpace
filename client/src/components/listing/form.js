import React, { useState } from "react";
import { Box,Grid, TextField } from "@mui/material";
import Image from "mui-image";
import Background from "../../img/listwallpaper.jpg";
// HouseTitle    
// 	Description   
// 	RentPerDay         
// 	Location      
// 	Rooms              
// 	Bathrooms          
// 	MaxGuests          
// 	Amenities   

const Form = () => {
    const [houseTitle, setHouseTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rentPerDay, setRentPerDay] = useState("");
    const [location, setLocation] = useState("");
    const [rooms, setRooms] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [maxGuests, setMaxGuests] = useState("");
    const [amenities, setAmenities] = useState([]);
    return (
      <>
        <div className="flex items-center justify-center h-auto">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} columns={16}>
              <Grid xs={9}>
                <Image src={Background} duration={0} height="92.6vh" />
              </Grid>
              <Grid xs={7}>
                <div className=" flex items-center justify-center flex-wrap flex-col">
                  <p className=" p-4 text-white font-semibold text-2xl">
                    Add Details About Your Property
                  </p>
                  <TextField
                    margin="normal"
                    id="House Detail"
                    label="House Detail"
                    name="House Detail"
                    type="text"
                    autoComplete="House Detail"
                    autoFocus
                    className=" bg-white text-black "
                    onChange={(e) => setHouseTitle(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="description"
                    label="Description"
                    type="text"
                    id="description"
                    autoComplete="description"
                    className=" bg-white text-black"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="rentperday"
                    label="Rent Per Day"
                    type="text"
                    id="rentperday"
                    autoComplete="rentperday"
                    className=" bg-white text-black"
                    onChange={(e) => setRentPerDay(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="location"
                    label="Location"
                    type="text"
                    id="location"
                    autoComplete="location"
                    className=" bg-white text-black"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="Room"
                    label="Number of rooms"
                    type="number"
                    id="Room"
                    autoComplete="Room"
                    className=" bg-white text-black"
                    onChange={(e) => setRooms(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="bathrooms"
                    label="Number of bathrooms"
                    type="number"
                    id="bathrooms"
                    autoComplete="bathrooms"
                    className=" bg-white text-black"
                    onChange={(e) => setBathroom(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="max guests"
                    label="Max Guests"
                    type="number"
                    id="max-guests"
                    autoComplete="max-guests"
                    className=" bg-white text-black"
                    onChange={(e) => setMaxGuests(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="description"
                    label="Description"
                    type="description"
                    id="description"
                    autoComplete="description"
                    className=" bg-white text-black"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </>
    );
}

export default Form;