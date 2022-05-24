import DataTable from 'react-data-table-component';
import React, {useState , useEffect} from 'react'



export default function Table() {
    const [selectedData, setSelectedData ] = useState([]);

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    useEffect(() => { // this hook will get called everytime when myArr has changed
        // perform some action which will get fired everytime when myArr gets updated
           console.log('Updated State', selectedData)
        }, [selectedData])

    const handleChange = async (state) =>  {
         setSelectedData(state.selectedRows);

      };

    return (
        <DataTable
            columns={columns}
            data={data}
            selectableRows
            onSelectedRowsChange={handleChange}
        />
    );
};