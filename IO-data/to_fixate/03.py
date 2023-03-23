reproved_students = []

with open('file.txt', mode='r') as file:
    for line in file:
        student_grade = line
        student_grade = student_grade.split(' ')
        print(student_grade)
        if int(student_grade[1]) < 6:
            reproved_students.append(student_grade[0] + '\n')

with open('reproved_students.txt', mode='w') as reproved_file:
    print(reproved_students)
    reproved_file.writelines(reproved_students)
