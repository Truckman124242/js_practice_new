let origin_val = 265700
let car_year = 2018
let car_run = 80000
let has_climat_control = true
let safe_pack = false
let electric = false

let year_calc = car_year >= 2019 && car_year <= 2022
let run_calc = car_run >= 50000 && car_run <= 100000

let val_percent = origin_val/100
let year_perc = val_percent * 10
let run_perc = val_percent * 5
let climat_perc = val_percent * 7
let safe_pack_perc =  val_percent * 8
let electric_perc =  val_percent * 15

if (year_calc == true && run_calc == false && has_climat_control == false && safe_pack == false && electric == false) {
    console.log(`1: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc}$`)
}

else if (year_calc == true && run_calc == true && has_climat_control == false && safe_pack == false && electric == false) {
    console.log(`2: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc - run_perc }$`)
}

else if (year_calc == false && run_calc == true && has_climat_control == false && safe_pack == false && electric == false) {
    console.log(`3: Original car cost is ${origin_val}$ while the final cost is ${origin_val - run_perc }$`)
}

else if (year_calc == false && run_calc == true && has_climat_control == true && safe_pack == false && electric == false) {
    console.log(`4: Original car cost is ${origin_val}$ while the final cost is ${origin_val - run_perc + climat_perc + climat_perc}$`)
}

else if (year_calc == true && run_calc == true && has_climat_control == true && safe_pack == false && electric == false) {
    console.log(`5: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc - run_perc + climat_perc }$`)
}

else if (year_calc == false && run_calc == true && has_climat_control == true && safe_pack == true && electric == false) {
    console.log(`6: Original car cost is ${origin_val}$ while the final cost is ${origin_val - run_perc + climat_perc + safe_pack_perc}$`)
}

else if (year_calc == false && run_calc == false && has_climat_control == true && safe_pack == true && electric == false) {
    console.log(`7: Original car cost is ${origin_val}$ while the final cost is ${origin_val + climat_perc + safe_pack_perc}$`)
}

else if (year_calc == true && run_calc == false && has_climat_control == true && safe_pack == true && electric == false) {
    console.log(`8: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc + climat_perc + safe_pack_perc}$`)
}

else if (year_calc == true && run_calc == false && has_climat_control == true && safe_pack == true && electric == true) {
    console.log(`9: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc + climat_perc + safe_pack_perc + electric_perc}$`)
}

else if (year_calc == true && run_calc == true && has_climat_control == false && safe_pack == true && electric == true) {
    console.log(`10: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc - run_perc + safe_pack_perc + electric_perc}$`)
}

else if (year_calc == true && run_calc == true && has_climat_control == false && safe_pack == false && electric == true) {
    console.log(`11: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc - run_perc + electric_perc}$`)
}

else if (year_calc == true && run_calc == true && has_climat_control == true && safe_pack == true && electric == false) {
    console.log(`12: Original car cost is ${origin_val}$ while the final cost is ${origin_val}$ while the final cost is ${origin_val + year_perc - run_perc + climat_perc + safe_pack_perc}$`)
}

else if (year_calc == true && run_calc == true && has_climat_control == true && safe_pack == true && electric == true) {
    console.log(`13: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc - run_perc + climat_perc + safe_pack_perc + electric_perc}$`)
}

else if (year_calc == true && run_calc == true && has_climat_control == true && safe_pack == false && electric == true) {
    console.log(`14: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc - run_perc + climat_perc + electric_perc}$`)
}

else if (year_calc == true && run_calc == true && has_climat_control == false && safe_pack == true && electric == false) {
    console.log(`15: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc - run_perc + safe_pack_perc}$`)
}

else if (year_calc == false && run_calc == true && has_climat_control == false && safe_pack == true && electric == false) {
    console.log(`16: Original car cost is ${origin_val}$ while the final cost is ${origin_val - run_perc + safe_pack_perc}$`)
}

else if (year_calc == true && run_calc == false && has_climat_control == false && safe_pack == true && electric == false) {
    console.log(`17: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc + safe_pack_perc}$`)
}

else if (year_calc == false && run_calc == false && has_climat_control == false && safe_pack == true && electric == false) {
    console.log(`18: Original car cost is ${origin_val}$ while the final cost is ${origin_val + safe_pack_perc}$`)
}

else if (year_calc == false && run_calc == false && has_climat_control == false && safe_pack == false && electric == true) {
    console.log(`19: Original car cost is ${origin_val}$ while the final cost is ${origin_val + electric_perc}$`)
}

else if (year_calc == false && run_calc == false && has_climat_control == true && safe_pack == true && electric == true) {
    console.log(`20: Original car cost is ${origin_val}$ while the final cost is ${origin_val + climat_perc + safe_pack_perc + electric_perc}$`)
}

else if (year_calc == false && run_calc == false && has_climat_control == false && safe_pack == true && electric == true) {
    console.log(`21: Original car cost is ${origin_val}$ while the final cost is ${origin_val + safe_pack_perc + electric_perc}}$`)
}

else if (year_calc == false && run_calc == false && has_climat_control == false && safe_pack == true && electric == false) {
    console.log(`22: Original car cost is ${origin_val}$ while the final cost is ${origin_val + safe_pack_perc}}$`)
}

else if (year_calc == false && run_calc == true && has_climat_control == true && safe_pack == true && electric == true) {
    console.log(`23: Original car cost is ${origin_val}$ while the final cost is ${origin_val - run_perc + climat_perc + safe_pack_perc + electric_perc}$`)
}

else if (year_calc == true && run_calc == false && has_climat_control == true && safe_pack == true && electric == true) {
    console.log(`24: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc + climat_perc + safe_pack_perc + electric}$`)
}

else if (year_calc == false && run_calc == false && has_climat_control == true && safe_pack == false && electric == false) {
    console.log(`25: Original car cost is ${origin_val}$ while the final cost is ${origin_val + climat_perc}$`)
}

else if (year_calc == false && run_calc == true && has_climat_control == true && safe_pack == true && electric == false) {
    console.log(`26: Original car cost is ${origin_val}$ while the final cost is ${origin_val - run_perc + climat_perc + safe_pack_perc}$`)
}

else if (year_calc == true && run_calc == false && has_climat_control == true && safe_pack == true && electric == false) {
    console.log(`27: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc + climat_perc + safe_pack_perc}$`)
}

else if (year_calc == true && run_calc == false && has_climat_control == true && safe_pack == false && electric == false) {
    console.log(`28: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc + climat_perc}$`)
}

else if (year_calc == true && run_calc == false && has_climat_control == false && safe_pack == false && electric == true) {
    console.log(`29: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc + electric_perc}$`)
}

else if (year_calc == true && run_calc == false && has_climat_control == false && safe_pack == true && electric == true) {
    console.log(`30: Original car cost is ${origin_val}$ while the final cost is ${origin_val + year_perc + safe_pack_perc + electric_perc}$`)
}

else if (year_calc == false && run_calc == true && has_climat_control == false && safe_pack == true && electric == true) {
    console.log(`31: Original car cost is ${origin_val}$ while the final cost is ${origin_val - run_perc + safe_pack_perc + electric_perc}$`)
}

else if (year_calc == false && run_calc == true && has_climat_control == false && safe_pack == false && electric == true) {
    console.log(`32: Original car cost is ${origin_val}$ while the final cost is ${origin_val - run_perc + electric_perc}$`)
}

else {
    console.log(`Car cost will be ${origin_val}`)
}