import { tableHeaders, tableRows } from '../constants';

const SpecsTable = ({showTable, handleHide}) => {
	return (
		<table
			className={`flex-col items-center justify-center transition-all duration-300 ${
				showTable
					? 'flex table-auto scale-100 opacity-100 w-auto h-auto text-[15px]'
					: 'scale-0 opacity-0 h-0 text-transparent'
			}`}
		>
			<thead className='flex items-center justify-center w-full mb-2'>
				<tr className='flex w-full items-center justify-center border-b'>
					{tableHeaders.map((item, index) => (
						<td
							key={index}
							className='flex items-center justify-center w-1/2'
						>
							{item}
						</td>
					))}
				</tr>
			</thead>
			<tbody className='flex flex-col items-center justify-center w-full space-y-2'>
				{tableRows.map((item, index) => (
					<tr
						key={index}
						className='flex w-full items-center border-b'
					>
						<td className='flex items-center justify-start w-1/2'>
							{item.name}
						</td>
						<td className='flex items-center justify-start w-1/2'>
							{item.detail}
						</td>
					</tr>
				))}
				<tr className='text-sm text-red-400 cursor-pointer'>
					<td onClick={handleHide}>Tap to Close</td>
				</tr>
			</tbody>
		</table>
	);
};

export default SpecsTable;
