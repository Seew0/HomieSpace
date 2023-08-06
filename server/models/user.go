package models

// type User struct {
// 	UserID       uint           `json:"id" gorm:"primary_key"`
// 	Username string         `json:"username,omitempty"`
// 	Email    string         `json:"email,omitempty"`
// 	Password string         `json:"password,omitempty"`
// 	Bookings ArrayofBooking `json:"bookings,omitempty" gorm:"type:json[],foreignkey:UserID"`
// 	Properties ArrayofProperties `json:"properties,omitempty" gorm:"type:json[],foreignkey:UserID"`
// }
type User struct {
    UserID     uint   `json:"user_id" gorm:"primary_key"`
    Username   string `json:"username,omitempty"`
    Email      string `json:"email,omitempty"`
    Password   string `json:"password,omitempty"`
    Bookings   ArrayofBooking `json:"bookings,omitempty"` // Assuming Booking is another struct representing the bookings
    Properties ArrayofProperties `json:"properties,omitempty"` // Assuming Property is another struct representing the properties
}
