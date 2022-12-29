package main

import "fmt"

func main(){

	fmt.Printf(sayGo("Daniel"))
} 

func sayGo(arg string) string{
message := fmt.Sprintf("%v is finally going to be a Gopher", arg )
return message
}

/*
*** * and & are pointer operators
"&" operator aka address operator returns the address in whic a variable is stored. 
 "*" operator aka derefrencing operator returns the variable at the address.
*/

func pointers(){
var x int =1
var y int
var z *int //z in initialised as a pointer variable

z = &x // z now stores the address to variable x
y = *z

var pnt = new(int)

*pnt = 3 // when * operator is on the left or before the equals to sign, it is assigning/create a variable. When it is on the right or after the variable, it is retrieving/accessing/dereferencing a an already existing value in memory. as in the case of y=*z above
 
fmt.Print(y, pnt)
}

