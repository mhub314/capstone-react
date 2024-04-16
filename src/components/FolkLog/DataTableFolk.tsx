import { useState } from 'react'
import Button from "../Button"
import ModalFolk from './ModalFolk'
import { server_calls_folk } from '../../api/server_folk';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData_folk } from '../../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'working_title', headerName: "Working Title", flex: 1},
    { field: 'genre', headerName: "Genre", flex: 1},
    { field: 'writer_name', headerName: "Writer Name", flex: 1},
    { field: 'length', headerName: "Length", flex: 1},
    { field: 'rating', headerName: "Rating", flex: 1},
    { field: 'latest_user_update', headerName: "Latest User Update", flex: 1},
]


function DataTableFolk() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData_folk();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls_folk.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <ModalFolk 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="bg-neutral-200 shadow-2xl flex flex-row">
            <div>
                <button
                    className="font-serif shadow-2xl border-solid border-2 text-white border-neutral-900 p-3 bg-neutral-900 rounded m-3 hover:bg-neutral-200 hover:text-black"
                    onClick={() => handleOpen()}
                >
                    New Folk Entry
                </button>
            </div> 
            <Button onClick={handleOpen} className="font-serif shadow-2xl border-solid border-2 text-white border-neutral-900 p-3 bg-neutral-900 rounded m-3 hover:bg-neutral-200 hover:text-black" >Update</Button>
            <Button onClick={deleteData} className="font-serif shadow-2xl border-solid border-2 text-white border-neutral-900 p-3 bg-neutral-900 rounded m-3 hover:bg-neutral-200 hover:text-black" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="font-serif p-3 shadow-2xl bg-neutral-900 text-white font-semibold my-2 rounded mr-20 ">My Folk Entries</h2>
            <DataGrid className="mr-20 mb-3 shadow-2xl" rows={contactData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTableFolk