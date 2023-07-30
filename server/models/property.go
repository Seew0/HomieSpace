package models

type Property struct {
	ID          uint      `json:"id" gorm:"primary_key"`
	HouseTitle  string    `json:"house-title,omitempty"`
	Description string    `json:"desc,omitempty"`
	RentPerDay  int       `json:"rentperday,omitempty"`
	Location    string    `json:"location,omitempty"`
	Rooms       int       `json:"rooms,omitempty"`
	Bathrooms   int       `json:"bathrooms,omitempty"`
	MaxGuests   int       `json:"max_guests,omitempty"`
	Amenities   []string  `json:"amenities,omitempty" gorm:"type:text[]"`
	OwnerID     uint      `json:"ownerid,omitempty"`
	Owner       User      `json:"owner,omitempty" gorm:"foreignKey:OwnerID"`
	Bookings    []Booking `json:"bookings,omitempty" gorm:"type:json[]"`
}
