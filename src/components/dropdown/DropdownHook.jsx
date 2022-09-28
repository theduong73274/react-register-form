import React, { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import useClickOutSide from '../../hook/useClickOutSide';

const DropdownHook = ({
	control,
	setValue,
	name,
	data,
	dropdownLabel = 'Select your job',
}) => {
	const { show, setShow, nodeRef } = useClickOutSide();
	const [label, setLabel] = useState(dropdownLabel);

	const dropdownValue = useWatch({
		control,
		name: 'job',
		defaultValue: '',
	});

	const handleClickDropdown = (e) => {
		setValue(name, e.target.dataset.value);
		setShow(false);
		setLabel(e.target.textContent);
	};

	useEffect(() => {
		if (dropdownValue == '') setLabel(dropdownLabel);
	}, [dropdownValue]);

	return (
		<div className="relative" ref={nodeRef}>
			<div
				className="p-5 rounded-lg border border-gray-100 bg-white flex items-center cursor-pointer justify-between"
				onClick={() => setShow(!show)}
			>
				<span>{label}</span>
			</div>

			<div
				className={`absolute top-full left-0 w-full rounded-lg bg-white ${
					show ? '' : 'opacity-0 invisible'
				} `}
			>
				{data.length > 0 &&
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

				{/* <div
					className="py-4 px-5 cursor-pointer hover:bg-gray-200"
					onClick={handleClickDropdown}
					data-value="teacher"
				>
					Teacher
				</div> */}
			</div>
		</div>
	);
};

export default DropdownHook;
