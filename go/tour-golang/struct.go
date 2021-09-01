package main

import "fmt"

type Person struct {
	Name string
	Age int
}

func main() {
	
	v:=Person{"Tung",18}
	fmt.Println(v.Name)
}