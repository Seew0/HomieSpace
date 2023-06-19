package helper

import (
	"fmt"
	"reflect"

	"github.com/seew0/homiespace/models"
)

var Mymap = make(map[interface{}]interface{})
func NewHouse() map[interface{}]interface{} {

	var house models.House
	var user models.User

	values := reflect.ValueOf(&house).Elem()
	userValues := reflect.ValueOf(&user).Elem()

	for i := 1; i < values.NumField(); i++ {

		fmt.Printf("Enter %s:\n", values.Type().Field(i).Name)
		fmt.Scanln(values.Field(i).Addr().Interface())

		Mymap[values.Type().Field(i).Name] = values.Field(i).Interface()

		if values.Type().Field(i).Name == "User" {

			for i := 1; i < userValues.NumField(); i++ {

				fmt.Printf("Enter %s:\n", userValues.Type().Field(i).Name)
				fmt.Scan(userValues.Field(i).Addr().Interface())

				Mymap[userValues.Type().Field(i).Name] = userValues.Field(i).Interface()
			}
		}
	}
	return Mymap
}
