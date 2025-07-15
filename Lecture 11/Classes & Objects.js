const student = {
    fullname : "Mohammad Tahbib Ullah",
    marks : 85.74,

    printMarks : function() {
        console.log("MARKS : ",this.marks);

    },
    
};

const teacher = {
    fullname : "Siam Masud",
    marks : 78.74,

    printMarks () {
        console.log("MARKS : ",marks);

    },
    
};

const employee = {
    printTAX() {
        console.log("TAX is 70%");

    },   
};

const employee1 = {
    salary : 78000,
    
    printSalary(){
        console.log("Salary is : ",salary);
    },
};

const employee2 = {
    salary : 78009,
    
    printSalary(){
        console.log("Salary is : ",salary);
    },
};

const employee3 = {
    salary : 78045,
    
    printSalary(){
        console.log("Salary is : ",salary);
    },
};

employee1.__proto__ = employee;
employee2.__proto__ = employee;
employee3.__proto__ = employee;