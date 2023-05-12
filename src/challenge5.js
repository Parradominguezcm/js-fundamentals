class Student {
    student = null;
    constructor (student) {
        this.student = student
    }
    capitalisedName() {
        let firstChar = this.student[0].toUpperCase();
        return firstChar + this.student.slice(1);
    }
}
let student = new Student("asia")
console.log(student.capitalisedName()) // "Asia"
