import { useField } from 'formik';
import React from 'react';
import { useController } from 'react-hook-form';

const RadioFormik = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className="flex items-center gap-x-3">
			<label className="cursor-pointer custom-radio">
				<input
					type="radio"
					{...field}
					{...props}
					className="hidden"
					// checked={props.checked}
				/>
				<div className="bg-white w-full h-full rounded-full"></div>
			</label>
			<span>{label}</span>
		</div>
	);
};

export default RadioFormik;
