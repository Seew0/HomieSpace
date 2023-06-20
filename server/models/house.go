package models

import (
	"time"

	"gorm.io/gorm"
)

type House struct {
	gorm.Model
	CreatedAt time.Time      `gorm:"default:CURRENT_TIMESTAMP" json:"-"`
	UpdatedAt time.Time      `gorm:"default:CURRENT_TIMESTAMP" json:"-"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
	ID          uint    `json:"id" gorm:"primary_key"`
	Price       float64 `json:"price,omitempty"`
	Location    string  `json:"location,omitempty"`
	BHK         int     `json:"bhk,omitempty"`
	Description string  `json:"description,omitempty"`
	UserID      uint    `json:"-" gorm:"foreignKey:UserID"`
	User        User    `json:"user,omitempty" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
