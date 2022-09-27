import React from 'react';
import useClickOutSide from '../../hook/useClickOutSide';

const DropdownHook = ({ control }) => {
	const { show, setShow, nodeRef } = useClickOutSide();

	return (
		<div className="relative" ref={nodeRef}>
			<div
				className="p-5 rounded-lg border border-gray-100 bg-white flex items-center cursor-pointer justify-between"
				onClick={() => setShow(!show)}
			>
				<span>Select your job</span>
			</div>

			<div
				className={`absolute top-full left-0 w-full rounded-lg bg-white ${
					show ? '' : 'opacity-0 invisible'
				} `}
			>
				<div className="py-4 px-5">Teacher</div>
				<div className="py-4 px-5">Developer</div>
				<div className="py-4 px-5">Doctor</div>
				<div className="py-4 px-5">Teacher</div>
			</div>
		</div>
	);
};

export default DropdownHook;
