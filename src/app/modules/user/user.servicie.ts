import { ServerConfig } from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<IUser> = {};

  // if password is not given, use deafult password
  userData.password = password || (ServerConfig.default_password as string);
  // if (!password) {
  //   password = ServerConfig.default_password as string;
  // } else {
  //   user.password = password;
  // }
  // set student role

  userData.role = 'student';
  //set manually generated it
  userData.id = '2030100001';
  // create a user
  const newResult = await User.create(userData);
  // create a student
  if (Object.keys(newResult).length) {
    //set id, id as user
    studentData.id = newResult.id;
    studentData.user = newResult._id; // reference id
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
