import { useState } from 'react'
import Button from "../Button"
import ModalRhythm from './ModalRhythm'
import { server_calls_rhythm } from '../../api/server_rhythm';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData_rhythm } from '../../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'working_title', headerName: "Working Title", flex: 1},
    { field: 'genre', headerName: "Genre", flex: 1},
    { field: 'writer_name', headerName: "Writer Name", flex: 1},
    { field: 'length', headerName: "Length", flex: 1},
    { field: 'rating', headerName: "Rating", flex: 1},
    { field: 'latest_user_update', headerName: "Latest User Update", flex: 1},
]


function DataTableRhythm() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData_rhythm();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls_rhythm.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <ModalRhythm
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="bg-blue-500 flex flex-row">
            <div>
                <button
                    className="text-blue-800 border-solid border-2 border-blue-700 p-3 bg-blue-300 rounded m-3 hover:bg-blue-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    New R&B Entry
                </button>
            </div> 
            <Button onClick={handleOpen} className="text-blue-800 border-solid border-2 border-blue-700 p-3 bg-blue-300 rounded m-3 hover:bg-blue-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="text-blue-800 border-solid border-2 border-blue-700 p-3 bg-blue-300 rounded m-3 hover:bg-blue-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-blue-600 my-2 font-semibold rounded">My R&B Entries</h2>
            <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTableRhythm