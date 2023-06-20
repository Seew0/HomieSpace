package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID        uint           `json:"id" gorm:"primary_key"`
	Name      string         `json:"name,omitempty"`
	Age       int            `json:"age,omitempty"`
	Sex       string         `json:"sex,omitempty"`
	ContactNo int            `json:"contact_no,omitempty"`
	UserName  string         `json:"username,omitempty"`
	Email     string         `json:"email,omitempty"`
	Password  string         `json:"-"`
	CreatedAt time.Time      `gorm:"default:CURRENT_TIMESTAMP" json:"-"`
	UpdatedAt time.Time      `gorm:"default:CURRENT_TIMESTAMP" json:"-"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}
