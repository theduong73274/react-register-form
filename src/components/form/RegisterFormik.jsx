import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useField } from 'formik';
import InputFormik from '../input/InputFormik';
import RadioFormik from '../radio/RadioFormik';

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
			// validationSchema={yup.object({
			// 	username: yup.string().required('Please enter your usename'),
			// 	email: yup
			// 		.string()
			// 		.email('Please valid email')
			// 		.required('Please enter your email address'),
			// 	password: yup
			// 		.string()
			// 		.min(8, 'Your password must be at least 8 characters or greater')
			// 		.matches(
			// 			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
			// 			{
			// 				message:
			// 					'Your password must have at least 1 uppercase, 1 lowercase, 1 special character',
			// 			}
			// 		)
			// 		.required('Please enter your password'),
			// 	gender: yup
			// 		.string()
			// 		.required('Please option your gender')
			// 		.oneOf(['male', 'female'], 'You can only select male or female'),
			// 	job: yup.string().required('Please select your job'),
			// 	term: yup.boolean().required('Please accept the terms and conditions'),
			// })}
			onSubmit={(values, actions) => {
				console.log('🚀 ~ RegisterFormik ~ values', values);
				// setTimeout(() => {
				// 	// actions.setSubmitting(false);
				// 	// actions.resetForm({
				// 	// 	username: '',
				// 	// 	email: '',
				// 	// 	password: '',
				// 	// 	gender: 'male',
				// 	// 	job: '',
				// 	// 	term: false,
				// 	// });
				// }, 5000);
			}}
		>
			{(formik) => {
				// console.log('🚀 ~ RegisterFormik ~ formik', formik);

				return (
					<Form
						// onSubmit={handleSubmit(onSubmitHandler)}
						className="max-w-[400px] mx-auto my-10 "
						autoComplete="off"
					>
						<InputFormik
							label="Username"
							id="username"
							name="username"
							placeholder="Enter your username"
							type="text"
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
								<RadioFormik label="Male" name="Gender"></RadioFormik>
								<RadioFormik label="Female" name="Gender"></RadioFormik>
								{/* <div className="flex items-center gap-x-3">
									<RadioHook
										control={control}
										name="gender"
										value="male"
										checked={watchGender === 'male'}
									></RadioHook>
									<span>Male</span>
								</div> */}

								{/* <div className="flex items-center gap-x-3">
									<RadioHook
										control={control}
										name="gender"
										value="female"
										checked={watchGender === 'female'}
									></RadioHook>
									<span>Female</span>
								</div> */}
							</div>
							{/* {errors.gender && (
								<p className="text-md text-red-500">{errors.gender.message}</p>
							)} */}
						</div>

						{/* <div className="flex flex-col gap-3 mb-5">
					<label className="cursor-pointer">Are you</label>
					<DropdownHook
						control={control}
						setValue={setValue}
						name="job"
						data={dropdownData}
						dropdownLabel="Select your job"
					></DropdownHook>

					{errors.job && (
						<p className="text-md text-red-500">{errors.job.message}</p>
					)}
				</div> */}

						{/* <div className="flex flex-col gap-3 mb-5">
					<CheckboxHook
						control={control}
						text="I accept the terms and conditions"
						name="term"
					></CheckboxHook>
					{errors.term && (
						<p className="text-md text-red-500">{errors.term.message}</p>
					)}
				</div> */}

						<button
							className={`w-full p-5 mt-5 font-semibold cursor-pointer text-white bg-blue-500 rounded-lg`}
							// ${isSubmitting ? 'opacity-50' : ''}
							// disabled={isSubmitting}
							type="submit"
							disabled={formik.isSubmitting}
						>
							{/* {isSubmitting ? (
						<div className="w-5 h-5 mx-auto border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
					) : (
						'Submit'
					)} */}
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default RegisterFormik;
