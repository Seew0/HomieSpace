package services

import (
	"github.com/seew0/homiespace/models"
)

func GetHashedPassword(dataList models.User) string {
	hashedpass := dataList.Password
	return hashedpass
}
