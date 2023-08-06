package models

type Property struct {
	ID            uint           `json:"id" gorm:"primary_key"`
	HouseTitle    string         `json:"houseTitle,omitempty"`
	Description   string         `json:"description,omitempty"`
	RentPerDay    int            `json:"rentPerDay,omitempty"`
	Location      string         `json:"location,omitempty"`
	Rooms         int            `json:"rooms,omitempty"`
	Bathrooms     int            `json:"bathroom,omitempty"`
	MaxGuests     int            `json:"maxGuests,omitempty"`
	Amenities     []string       `json:"amenitiesarr,omitempty" gorm:"type:text[]"`
	OwnerID       int            `json:"owner" gorm:"foreignKey:UserID"`
	Bookings      ArrayofBooking `json:"bookings" gorm:"type:json[]"`
	Image         []byte         `json:"image,omitempty"`
	ImageFilename string         `json:"imageName,omitempty"`
}
