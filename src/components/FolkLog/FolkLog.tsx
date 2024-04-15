// import { useSubmit } from "react-router-dom"

import Button from "../Button"
import Input from "../Input"

import { useForm } from 'react-hook-form'
import { server_calls_folk } from "../../api/server_folk"
import { useDispatch, useStore } from "react-redux"
import { chooseWorking_Title, chooseGenre, chooseWriter_Name, chooseLength, chooseRating, chooseLatest_User_Update } from "../../redux/slices/RootSlice"


interface FolkLogProps {
  id?: string[]
}

const FolkLog = ( props:FolkLogProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)

    if (props.id && props.id.length > 0) {
        server_calls_folk.update(props.id[0], data)
        console.log(`Updated: ${ data.name } ${ props.id }`)
        setTimeout(() => {window.location.reload()}, 1000);
        event.target.reset()
    } else{
        dispatch(chooseWorking_Title(data.working_title));
        dispatch(chooseGenre(data.genre));
        dispatch(chooseWriter_Name(data.writer_name));
        dispatch(chooseLength(data.length));
        dispatch(chooseRating(data.rating));
        dispatch(chooseLatest_User_Update(data.latest_user_update));

        server_calls_folk.create(store.getState())
        setTimeout( () => {window.location.reload()}, 1000 )
    }
}

  return (
    
    <div>
      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
        <div className="m-2">
          <label htmlFor="working_title">Working Title</label>
          <Input {...register('working_title')} name='working_title' placeholder="Working Title" />
        </div>
        <div className="m-2">
          <label htmlFor="genre">Genre</label>
          <Input {...register('genre')} name='genre' placeholder="Genre" />
        </div>
        <div className="m-2">
          <label htmlFor="writer_name">Writer Name</label>
          <Input {...register('writer_name')} name='writer_name' placeholder="Writer Name" />
        </div>
        <div className="m-2">
          <label htmlFor="length">Length</label>
          <Input {...register('length')} name='length' placeholder="Length" />
        </div>
        <div className="m-2">
          <label htmlFor="rating">Rating</label>
          <Input {...register('rating')} name='rating' placeholder="Rating" />
        </div>
        <div className="m-2">
          <label htmlFor="latest_user_update">Latest User Update</label>
          <Input {...register('latest_user_update')} name='latest_user_update' placeholder="Latest User Update" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-10 mr-1 bg-neutral-900 p-2 rounded hover:bg-neutral-100 hover:text-black text-white"
          >
            Submit
          </Button>
        </div>
      </form>
        <p className="text-center text-neutral-500 text-xs">
        &copy;2024 CD SP Corp. All rights reserved.
        </p>
    </div>
  )
}

export default FolkLog
