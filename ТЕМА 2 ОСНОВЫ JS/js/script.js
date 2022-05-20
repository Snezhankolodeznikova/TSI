function getAge(){
	const num = document.querySelector('#num1')
	const res = document.querySelector('#res1')
	let age = Number.parseInt(num.value, 10)
	age++
	res.innerHTML = age	
}

function getRemainder(){
	const num_a = document.querySelector('#num2a')
	const num_b = document.querySelector('#num2b')
	const res = document.querySelector('#res2')
	let a = Number.parseInt(num_a.value, 10)
	let b = Number.parseInt(num_b.value, 10)
	res.innerHTML = a % b
}

function faceControl(){
	const num = document.querySelector('#num3')
	const res = document.querySelector('#res3')
	let age = Number.parseInt(num.value, 10)
	if(age >= 18) res.innerHTML = "Welcome"
	else res.innerHTML = "Отказ"
}

function getNextAge(){
	const num = document.querySelector('#num4')
	const res = document.querySelector('#res4')
	let age = Number.parseInt(num.value, 10)
	age++
	res.innerHTML = age
	if(num.value === ""){
		res.innerHTML = 0
	}
}

function canRide(){
	function heightCheck(height){
		return height >= 140
	}
	const num = document.querySelector('#num5')
	const res = document.querySelector('#res5')
	
	res.innerHTML = heightCheck(num.value)
}