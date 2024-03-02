let base_price = 265700
let car_year = 2011
let car_run = 60088
let has_climate_control = true
let safe_pack = true
let electric = false

let result = base_price

if (car_year >= 2019 && car_year <= 2022) {
    result += base_price * 0.1
    console.log (`Including the year ${car_year}, car price is $${result} now `)
}

if (car_run >= 50000 && car_run <= 100000) {
    result -= base_price * 0.05
    console.log (`Including the car having ${car_run} km, car price is $${result} now `)
}

if (has_climate_control) {
    result += base_price * 0.07
    console.log (`Including the climate control presence is ${has_climate_control}, car price is $${result} now `)
}

if (safe_pack) {
    result += base_price * 0.08
    console.log (`Including the safe pack presence is ${safe_pack}, car price is $${result} now `)
}

if (electric) {
    result += base_price * 0.15
    console.log (`Including the car being electric is ${electric}, car price is $${result} now `)
}

console.log(`Base car price is $${base_price} while the final price is $${result}. The change in price is $${result - base_price}.`)