package models

type User struct {
	ID        uint   `json:"id" gorm:"primary_key"`
	FirstName string `json:"first_name,omitempty"`
	LastName  string `json:"last_name,omitempty"`
	Age       int    `json:"age,omitempty"`
	Sex       string `json:"sex,omitempty"`
	UserName  string `json:"username,omitempty"`
	Email     string `json:"email,omitempty"`
	Password  string `json:"-"`
}
