import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useField } from 'formik';
import InputFormik from '../input/InputFormik';
import RadioFormik from '../radio/RadioFormik';
import DropdownFormik from '../dropdown/DropdownFormik';
import CheckboxFormik from '../checkbox/CheckboxFormik';

const dropdownData = [
	{
		id: 1,
		value: 'teacher',
		text: 'Teacher',
	},
	{
		id: 2,
		value: 'developer',
		text: 'Developer',
	},
	{
		id: 3,
		value: 'doctor',
		text: 'Doctor',
	},
	{
		id: 4,
		value: 'constructor',
		text: 'Constructor',
	},
];

const RegisterFormik = () => {
	return (
		<Formik
			initialValues={{
				username: '',
				email: '',
				password: '',
				gender: 'male',
				job: '',
				term: false,
			}}
			validationSchema={yup.object({
				username: yup.string().required('Please enter your usename'),
				email: yup
					.string()
					.email('Please valid email')
					.required('Please enter your email address'),
				password: yup
					.string()
					.min(8, 'Your password must be at least 8 characters or greater')
					.matches(
						/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
						{
							message:
								'Your password must have at least 1 uppercase, 1 lowercase, 1 special character',
						}
					)
					.required('Please enter your password'),
				gender: yup
					.string()
					.required('Please option your gender')
					.oneOf(['male', 'female'], 'You can only select male or female'),
				job: yup.string().required('Please select your job'),
				term: yup
					.boolean()
					.oneOf([true], 'Please accept the terms and conditions'),
			})}
			onSubmit={(values, { resetForm, setSubmitting }) => {
				setTimeout(() => {
					console.log(JSON.stringify(values, null, 2));
					// console.log('🚀 ~ RegisterFormik ~ values', values);
					setSubmitting(false);
					resetForm({
						username: '',
						email: '',
						password: '',
						gender: 'male',
						job: '',
						term: false,
					});
				}, 5000);
			}}
		>
			{(formik) => {
				// console.log('🚀 ~ RegisterFormik ~ formik', formik);

				const watchGender = formik.values.gender;

				return (
					<form
						onSubmit={formik.handleSubmit}
						className="max-w-[400px] mx-auto my-10 "
						autoComplete="off"
					>
						<InputFormik
							label="Username"
							name="username"
							placeholder="Enter your username"
							type="text"
							id="username"
						></InputFormik>

						<InputFormik
							label="Email Address"
							name="email"
							id="email"
							placeholder="Enter your email"
							type="email"
						></InputFormik>

						<InputFormik
							label="Password"
							name="password"
							id="password"
							placeholder="Enter your password"
							type="password"
						></InputFormik>

						<div className="flex flex-col gap-3 mb-5">
							<label className="cursor-pointer">Gender</label>

							<div className="flex items-center gap-5">
								<RadioFormik
									label="Male"
									name="gender"
									value="male"
									checked={watchGender == 'male'}
								></RadioFormik>
								<RadioFormik
									label="Female"
									name="gender"
									value="female"
									checked={watchGender == 'female'}
								></RadioFormik>
							</div>
							{/* {formik.errors.gender ? (
							<div className="text-md text-red-500">{formik.errors.gender}</div>
						) : null} */}
						</div>

						<DropdownFormik
							dropdownLabel="Select your job"
							name="job"
							label="Are you"
							data={dropdownData}
							setValue={formik.setFieldValue}
						></DropdownFormik>

						<CheckboxFormik id="term" name="term">
							I accept the terms and conditions
						</CheckboxFormik>

						<button
							className={`w-full p-5 mt-5 font-semibold cursor-pointer text-white bg-blue-500 rounded-lg ${
								formik.isSubmitting ? 'opacity-50' : ''
							}`}
							type="submit"
							disabled={formik.isSubmitting}
						>
							{formik.isSubmitting ? (
								<div className="w-5 h-5 mx-auto border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
							) : (
								'Submit'
							)}
						</button>
					</form>
				);
			}}
		</Formik>
	);
};

export default RegisterFormik;
