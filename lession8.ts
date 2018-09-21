var caculateSalary = function () {
    return 1000000;
}

// console.log(caculateSalary());

let caculateSalaryArrow = (bonus: number, tax: number) => 2000000 + bonus - tax;

console.log(caculateSalaryArrow(100, 200));