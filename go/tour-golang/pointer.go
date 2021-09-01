package main

import "fmt"

func main() {
	i,j:=42,2701

	p:=&i // p tro vao i -> p la dia chi cua i tren bo nho
	fmt.Println(*p) // gia tri ma p dang tro vao <-> gia tri cua i
	*p = 21
	fmt.Println(i)

	p=&j
	*p/=37
	fmt.Println(j)
}