var student = require('./student');
var teacher = require('./teacher');


function add(teacherName, students) {
    teacher.add(teacherName);

    for(var i = 0; i < students.length; i++) {
        student.add(students[i]);
    }
}

exports.add = add;