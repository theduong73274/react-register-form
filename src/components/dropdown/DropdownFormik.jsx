import { useField } from 'formik';
import React, { useEffect, useState } from 'react';
import useClickOutSide from '../../hook/useClickOutSide';

const DropdownFormik = ({
	label,
	dropdownLabel = 'Select your job',
	data,
	name,
	setValue,
}) => {
	const { show, setShow, nodeRef } = useClickOutSide();
	const [field, meta] = useField({ name });
	const [labelTitle, setLabelTitle] = useState(dropdownLabel);

	// console.log('🚀 ~ field', field);

	const handleClickDropdown = (e) => {
		setValue(name, e.target.dataset.value);
		setShow(false);
		setLabelTitle(e.target.textContent);
	};

	useEffect(() => {
		if (field.value == '') setLabelTitle(dropdownLabel);
	}, [field.value]);

	return (
		<div className="flex flex-col gap-3 mb-5">
			<label className="cursor-pointer">{label}</label>

			<div className="relative" ref={nodeRef}>
				<div
					className="p-5 rounded-lg border border-gray-100 bg-white flex items-center cursor-pointer justify-between"
					onClick={() => setShow(!show)}
				>
					<span>{labelTitle}</span>
				</div>

				<div
					className={`absolute top-full left-0 w-full rounded-lg bg-white ${
						show ? '' : 'opacity-0 invisible'
					} `}
				>
					{data &&
						data.length > 0 &&
						data.map((item, index) => (
							<div
								key={item.id}
								className="py-4 px-5 cursor-pointer hover:bg-gray-200"
								onClick={handleClickDropdown}
								data-value={item.value}
							>
								{item.text}
							</div>
						))}
				</div>
			</div>

			{meta.touched && meta.error ? (
				<div className="text-md text-red-500">{meta.error}</div>
			) : null}
		</div>
	);
};

export default DropdownFormik;
