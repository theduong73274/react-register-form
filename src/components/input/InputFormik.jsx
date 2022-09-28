import { useField } from 'formik';
import React from 'react';

const InputFormik = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className="flex flex-col gap-3 mb-5">
			<label htmlFor={props.name || props.id} className="cursor-pointer">
				{label}
			</label>
			<input
				className="p-4 border border-gray-100 rounded-lg bg-white outline-none transition-all focus:border-blue-500"
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<p className="text-md text-red-500">{meta.error}</p>
			) : null}
			{/* <p className="text-md text-red-500">{errors.username.message}</p> */}
		</div>
	);
};

export default InputFormik;
