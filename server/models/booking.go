package models

type Booking struct {
	ID         uint     `json:"id" gorm:"primary_key"`
	StartDate  string   `json:"start_date,omitempty"`
	EndDate    string   `json:"end_date,omitempty"`
	Total      int      `json:"total,omitempty"`
	UserID     uint     `json:"userid,omitempty"`
	User       User     `json:"user,omitempty" gorm:"foreignKey:UserID"`
	PropertyID uint     `json:"propertyid,omitempty"`
	Property   	ArrayofProperties `json:"property,omitempty" gorm:"type:json[]"`
}
