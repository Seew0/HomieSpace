import React, { useState } from "react";
import { Box,Grid, TextField,Autocomplete,Button} from "@mui/material";
import Image from "mui-image";
import Background from "../../img/listwallpaper.jpg";
import axios from "axios";
const Form = () => {
    const [houseTitle, setHouseTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rentPerDay, setRentPerDay] = useState("");
    const [location, setLocation] = useState("");
    const [rooms, setRooms] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [maxGuests, setMaxGuests] = useState("");
    const [amenities, setAmenities] = useState([]);
    const [image, setImage] = useState("");
    const [imageName, setImageName] = useState("");
    const amenitiesArray = [
      "Fridge",
      "Skin Care",
      "Air Conditioner",
      "Bathrob",
      "Kitchen",
    ];
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
      let filePath = e.target.value;
      const parts = filePath.split("\\");
      const filename = parts[parts.length - 1];
      setImageName(filename)
    };
    const handleSubmit = async () =>{
      const amenitiesarr = {amenities}
      console.log({
        houseTitle,
        description,
        rentPerDay,
        location,
        rooms,
        bathroom,
        maxGuests,
        amenitiesarr
        ,image,imageName
      })
      let response = await axios.post("http://localhost:4000/api/addlisting",{
        houseTitle,
        description,
        rentPerDay,
        location,
        rooms,
        bathroom,
        maxGuests,
        amenitiesarr,
        image,
        imageName
      })

    } 
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} columns={16}>
              <Grid xs={9}>
                <Image src={Background} duration={0} height="100vh" />
              </Grid>
              <Grid xs={7}>
                <div className=" flex items-center justify-center flex-wrap flex-col h-full">
                  <p className=" pt-2 text-white font-semibold text-2xl">
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
                    className=" bg-white text-black  w-[25vw] "
                    onChange={(e) => setHouseTitle(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="description"
                    label="Description"
                    type="text"
                    id="description"
                    autoComplete="description"
                    className=" bg-white text-black w-[25vw]"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="rentperday"
                    label="Rent Per Day"
                    type="text"
                    id="rentperday"
                    autoComplete="rentperday"
                    className=" bg-white text-black w-[25vw]"
                    onChange={(e) => setRentPerDay(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="location"
                    label="Location"
                    type="text"
                    id="location"
                    autoComplete="location"
                    className=" bg-white text-black w-[25vw]"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="Room"
                    label="Number of rooms"
                    type="number"
                    id="Room"
                    autoComplete="Room"
                    className=" bg-white text-black w-[25vw]"
                    onChange={(e) => setRooms(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="bathrooms"
                    label="Number of bathrooms"
                    type="number"
                    id="bathrooms"
                    autoComplete="bathrooms"
                    className=" bg-white text-black w-[25vw]"
                    onChange={(e) => setBathroom(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="max guests"
                    label="Max Guests"
                    type="number"
                    id="max-guests"
                    autoComplete="max-guests"
                    className=" bg-white text-black w-[25vw]"
                    onChange={(e) => setMaxGuests(e.target.value)}
                  />
                  <div className="flex flex-row items-center justify-center">
                    <Autocomplete
                      multiple
                      options={amenitiesArray}
                      className="w-[25vw]"
                      getOptionLabel={(option) => option}
                      getOptionSelected={(option, value) =>
                        option === value.value
                      }
                      value={amenities}
                      onChange={(event, newValue) => {setAmenities(newValue);}}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Amenities"
                          margin="normal"
                          variant="outlined"
                          className="bg-white text-black w-[25vw]"
                        />
                      )}
                    />
                  </div>
                  <div>
                    {image && (
                      <img
                        src={image}
                        alt="Preview"
                        style={{ width: "100px", height: "50px" }}
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="mt-4 bg-white p-4 w-[25vw]"
                    />
                  </div>
                  <button
                  type="submit"
                  className="mt-5 mb-2 w-[10vw] p-2 rounded-sm bg-blue-700/90 hover:bg-transparent hover:ease-in text-white font-semibold"
                  onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </>
    );
}

export default Form;