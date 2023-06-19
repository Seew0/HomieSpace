package models

import "gorm.io/gorm"

type House struct{
	gorm.Model
	ID string `json:"_id,omitempty" gorm:"primary_key"`
	Price int`json:"price,omitempty"` 
	Location string`json:"location,omitempty"` 
	BHK int `json:"bhk,omitempty"`
	Description string 	`json:"desc,omitempty"`
	User User `json:"user,omitempty" gorm:"many2many:house_user"`
}