package models

type User struct {
	ID       uint           `json:"id" gorm:"primary_key"`
	Username string         `json:"username,omitempty"`
	Email    string         `json:"email,omitempty"`
	Password string         `json:"password,omitempty"`
	Bookings ArrayofBooking `json:"bookings,omitempty" gorm:"type:json[]"`
}
