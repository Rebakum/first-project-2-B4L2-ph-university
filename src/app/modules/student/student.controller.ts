import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

// import studentValidationSchema from './student.Joi.validation';

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    // res.status(200).json({
    //   success: true,
    //   message: 'Student are retrieved succesfully',
    //   data: result,
    // });
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

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // res.status(200).json({
    //   success: true,
    //   message: 'Student are retrieved succesfully',
    //   data: result,
    // });
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

//for delete
const deletedStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    // res.status(200).json({
    //   success: true,
    //   message: 'student deleted is successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    // res.status(500).json({
    //   success: false,
    //   message: err.message || 'Something went wrong',
    //   data: err,
    // });
    next(err);
  }
};

export const StudentControllers = {
  getAllStudent,
  getSingleStudent,
  deletedStudent,
};
