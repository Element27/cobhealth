package main

// import (
// 	// "fmt"
// )

func main(){
	// mybill := newBill("new tea")
} 


type bill struct {
	name string
	items map[string]float64
	tips float64
}

func newBill(n string) bill {
	b := bill{
		name: n,
		items: map[string]float64{},
		tips:0,
	}

	return b  
}

// func (b bill) format() string{}