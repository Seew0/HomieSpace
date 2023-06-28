package models

type Rent struct {
	ID          uint   `json:"id" gorm:"primary_key"`
	House       House  `json:"house,omitempty" gorm:"foreignkey:HouseID"`
	HouseID     uint   `json:"-"`
	StartDate   string `json:"start_date,omitempty"`
	EndDate     string `json:"end_date,omitempty"`
	TotalAmount int    `json:"total_amount,omitempty"`
}
