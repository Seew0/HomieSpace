package db

import "github.com/seew0/homiespace/models"

var db = Dbinit()
func InsertHouseIntoDB(house *models.House) {
	db.Create(&models.House{
		ID: house.ID,
		Price: house.Price,
		Location: house.Location,
		BHK: house.BHK,
		Description: house.Description,
		User: models.User{
			ID: house.User.ID,
			Name: house.User.Name,
			Age: house.User.Age,
			Sex: house.User.Sex,
			ContactNo: house.User.ContactNo,
			GoogleAccount: models.GoogleAccount{
				ID: house.User.GoogleAccount.ID,
				UserId: house.User.GoogleAccount.UserId,
				Token: house.User.GoogleAccount.Token,
			},
		},
	},
)
}