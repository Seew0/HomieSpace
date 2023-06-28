package models

type House struct {
	ID          uint   `json:"id" gorm:"primary_key"`
	Title       string `json:"title,omitempty"`
	Description string `json:"desc,omitempty"`
	RentPerDay  int    `json:"rentperday,omitempty"`
	Location    string `json:"location,omitempty"`
	Bedrooms    int    `json:"bedrooms,omitempty"`
	Bathrooms   int    `json:"bathrooms,omitempty"`
	Size        int    `json:"size,omitempty"`
	PostedBy    User   `json:"posted_by,omitempty" gorm:"foreignkey:UserID"`
	UserID      uint   `json:"-"`
}
