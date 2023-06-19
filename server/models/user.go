package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	ID            uint   `json:"id" gorm:"primary_key"`
	Name          string `json:"name,omitempty"`
	Age           int    `json:"age,omitempty"`
	Sex           string `json:"sex,omitempty"`
	ContactNo     int    `json:"contact_no,omitempty"`
	GoogleAccount GoogleAccount `json:"google,omitempty" gorm:"foreignkey:UserID"`
}

type GoogleAccount struct {
	ID    uint	`json:"gid,omitempty"`
	UserId uint `json:"userid,omitempty"`
	Token  string `json:"token,omitempty"`
}
