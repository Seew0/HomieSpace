package models

import (
	"database/sql/driver"
	"encoding/json"
)

type ArrayofBooking []Booking

type ArrayofProperties []Property

// Value Marshal
func (AB ArrayofBooking) Value() (driver.Value, error) {
	return json.Marshal(AB)
}

// Scan Unmarshal
func (AB *ArrayofBooking) Scan(value interface{}) interface{} {
	return value
}

// Value Marshal
func (AP ArrayofProperties) Value() (driver.Value, error) {
	return json.Marshal(AP)
}

// Scan Unmarshal
func (AP *ArrayofProperties) Scan(value interface{}) interface{} {
	return value
}
