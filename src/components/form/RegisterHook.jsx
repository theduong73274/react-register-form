import React from 'react';
import { useForm } from 'react-hook-form';
import CheckboxHook from '../checkbox/CheckboxHook';
import DropdownHook from '../dropdown/DropdownHook';
import InputHook from '../input/InputHook';
import RadioHook from '../radio/RadioHook';

const RegisterHook = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();

	const onSubmitHandler = (values) => {
		console.log('🚀 ~ onSubmitHandler ~ values', values);
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmitHandler)}
				className="max-w-[400px] mx-auto my-10 "
				autoComplete="off"
			>
				<div className="flex flex-col gap-3 mb-5">
					<label htmlFor="username" className="cursor-pointer">
						Username
					</label>

					<InputHook
						id="username"
						name="username"
						placeholder="Enter your username"
						control={control}
						type="text"
					></InputHook>

					<p className="text-md text-red-500">Please enter your username</p>
				</div>

				<div className="flex flex-col gap-3 mb-5">
					<label htmlFor="email" className="cursor-pointer">
						Email address
					</label>

					<InputHook
						name="email"
						placeholder="Enter your email"
						id="email"
						type="email"
						control={control}
					></InputHook>
				</div>

				<div className="flex flex-col gap-3 mb-5">
					<label htmlFor="password" className="cursor-pointer">
						Password
					</label>
					<InputHook
						control={control}
						name="password"
						placeholder="Enter your password"
						id="password"
						type="password"
					></InputHook>
				</div>

				<div className="flex flex-col gap-3 mb-5">
					<label className="cursor-pointer">Gender</label>

					<div className="flex items-center gap-5">
						<div className="flex items-center gap-x-3">
							<RadioHook
								control={control}
								name="gender"
								className="hidden"
								value="male"
							></RadioHook>
							<span>Male</span>
						</div>

						<div className="flex items-center gap-x-3">
							<RadioHook
								control={control}
								name="gender"
								className="hidden"
								value="female"
							></RadioHook>
							<span>Female</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-3 mb-5">
					<label className="cursor-pointer">Are you</label>
					<DropdownHook control={control}></DropdownHook>
				</div>

				<div className="flex flex-col gap-3 mb-5">
					<CheckboxHook
						control={control}
						text="I accept the terms and conditions"
						name="term"
					></CheckboxHook>
				</div>

				<button className="w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg">
					Submit
				</button>
			</form>
		</div>
	);
};

export default RegisterHook;
