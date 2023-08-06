package models

type Booking struct {
    ID         uint   `json:"id" gorm:"primary_key"`
    StartDate  string `json:"start_date,omitempty"`
    EndDate    string `json:"end_date,omitempty"`
    Total      int    `json:"total,omitempty"`
    UserID     uint   `json:"user_id,omitempty"` 
    PropertyID uint   `json:"property_id,omitempty"` 
}
