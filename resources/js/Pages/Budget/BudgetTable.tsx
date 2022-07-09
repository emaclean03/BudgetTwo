import React, {useMemo} from "react";
import { useTable } from 'react-table'

interface ColumnDetails {
    [key: string]: string
}

const BudgetTable = () => {
    const data = useMemo<ColumnDetails[]>(
        () => [
            {
                Category: 'Mortgage',
                Assigned: '120',
                Activity: '-50',
                Available: '70',
            },{
                Category: 'Transportation',
                Assigned: '100',
                Activity: '50',
                Available: '50',
            },
        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: 'Category',
                accessor: 'Category', // accessor is the "key" in the data
            },
            {
                Header: 'Assigned',
                accessor: 'Assigned', // accessor is the "key" in the data
            },
            {
                Header: 'Activity',
                accessor: 'Activity', // accessor is the "key" in the data
            },
            {
                Header: 'Available',
                accessor: 'Available', // accessor is the "key" in the data
            },
        ],
        []
    );

    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-gray-400 compact">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    {// Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {// Loop over the headers in each row
                                    headerGroup.headers.map(column => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps()}>
                                            {// Render the header
                                                column.render('Header')}
                                        </th>
                                    ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                        rows.map(row => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                                // Apply the row props
                                <tr {...row.getRowProps()}>
                                    {// Loop over the rows cells
                                        row.cells.map(cell => {
                                            // Apply the cell props
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {// Render the cell contents
                                                        cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BudgetTable