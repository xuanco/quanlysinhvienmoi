const studentList = [
    {
        id: 1,
        name: 'Nguyễn Danh Ca',
        phone: '0925273689',
        email: 'danhca@gmail.com'
    },
    {
        id: 2,
        name: 'Nguyễn la va',
        phone: '0126584447',
        email: 'lavanguyen@gmail.com'
    },
    {
        id: 3,
        name: 'Nguyễn Văn A',
        phone: '0912345678',
        email: 'ngoctrai@gmail.com'
    }
  ]
  export function getAllStudent() {
        return studentList;
    }
    
    export function addNewStudent(student) {
    // kết nối API để thêm mới
        studentList.push(student);
    } 
    export function getStudentById(id) {
        for (let i = 0; i <studentList.length ; i++) {
            if (studentList[i].id==id){
                return studentList[i];
            }
        }
        return null;
    }
    
    // export function editStudentById(id) {
    //     for (let i = 0; i <studentList.length ; i++) {
    //         if (studentList[i].id==id){
    //             studentList.splice(i,1);
    //             break;
    //         }
    //     }
    // }
    // export function searchByName(name){
    //     return studentList.filter(student => student.name.includes(name));
    // }
   