import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.servicie';
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    // const validationInfo = UserValidation.parse(studentData); //for zod validation
    const result = await UserService.createStudentIntoDB(password, studentData);

    // send response
    // res.status(200).json({
    //   success: true,
    //   message: 'Student is created succesfully',
    //   data: result,
    // });
    //or
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const UserCotrollers = {
  createStudent,
};
