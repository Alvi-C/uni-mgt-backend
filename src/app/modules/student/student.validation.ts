import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First name is required' })
    .max(20, { message: 'First name cannot exceed 20 characters' }),
  middleName: z
    .string()
    .trim()
    .max(20, { message: 'Middle name cannot exceed 20 characters' })
    .optional(),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last name is required' })
    .max(20, { message: 'Last name cannot exceed 20 characters' }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, { message: 'Father name is required' }), // Use min with a value of 1
  fatherOccupation: z
    .string()
    .trim()
    .min(1, { message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, { message: 'Father contact no is required' }),
  motherName: z.string().trim().min(1, { message: 'Mother name is required' }),
  motherOccupation: z
    .string()
    .trim()
    .min(1, { message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .trim()
    .min(1, { message: 'Mother contact no is required' }),
});

const localGuardianValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Local guardian name is required' }),
  occupation: z
    .string()
    .trim()
    .min(1, { message: 'Local guardian occupation is required' }),
  contactNo: z
    .string()
    .trim()
    .min(1, { message: 'Local guardian contact no is required' }),
  address: z
    .string()
    .trim()
    .min(1, { message: 'Local guardian address is required' }),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female'], { message: 'Invalid gender' }),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: 'Invalid email' }),
      contactNo: z.string().min(1, { message: 'Contact no is required' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency contact no is required' }),
      bloodGroup: z.enum(['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImage: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
