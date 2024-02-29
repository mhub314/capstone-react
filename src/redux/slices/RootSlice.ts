import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        working_title: "Working Title",
        genre: "Genre",
        writer_name: "Writer Name",
        length: "Length",
        rating: "Rating",
        latest_user_update: "Latest User Update",
    },
    reducers: {
        chooseWorking_Title: (state, action) => { state.working_title = action.payload},
        chooseGenre: (state, action) => { state.genre = action.payload},
        chooseWriter_Name: (state, action) => { state.writer_name = action.payload},
        chooseLength: (state, action) => { state.length = action.payload},
        chooseRating: (state, action) => { state.rating = action.payload},
        chooseLatest_User_Update: (state, action) => { state.latest_user_update = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseWorking_Title, chooseGenre, chooseWriter_Name, chooseLength, chooseRating, chooseLatest_User_Update} = rootSlice.actions

















// import { createSlice } from '@reduxjs/toolkit'

// const rootSlice_folk = createSlice({
//     name: "root",
//     initialState: {
//         working_title: "Working Title",
//         genre: "Genre",
//         writer_name: "Writer Name",
//         length: "Length",
//         rating: "Rating",
//         latest_user_update: "Latest User Update",
//     },
//     reducers: {
//         chooseWorking_Title_folk: (state, action) => { state.working_title = action.payload},
//         chooseGenre_folk: (state, action) => { state.genre = action.payload},
//         chooseWriter_Name_folk: (state, action) => { state.writer_name = action.payload},
//         chooseLength_folk: (state, action) => { state.length = action.payload},
//         chooseRating_folk: (state, action) => { state.rating = action.payload},
//         chooseLatest_User_Update_folk: (state, action) => { state.latest_user_update = action.payload}
//     }
// })

// // -------------------------------------------------------------------------------

// const rootSlice_rock = createSlice({
//     name: "root",
//     initialState: {
//         working_title: "Working Title",
//         genre: "Genre",
//         writer_name: "Writer Name",
//         length: "Length",
//         rating: "Rating",
//         latest_user_update: "Latest User Update",
//     },
//     reducers: {
//         chooseWorking_Title_rock: (state, action) => { state.working_title = action.payload},
//         chooseGenre_rock: (state, action) => { state.genre = action.payload},
//         chooseWriter_Name_rock: (state, action) => { state.writer_name = action.payload},
//         chooseLength_rock: (state, action) => { state.length = action.payload},
//         chooseRating_rock: (state, action) => { state.rating = action.payload},
//         chooseLatest_User_Update_rock: (state, action) => { state.latest_user_update = action.payload}
//     }
// })

// // -------------------------------------------------------------------------------

// const rootSlice_rhythm = createSlice({
//     name: "root",
//     initialState: {
//         working_title: "Working Title",
//         genre: "Genre",
//         writer_name: "Writer Name",
//         length: "Length",
//         rating: "Rating",
//         latest_user_update: "Latest User Update",
//     },
//     reducers: {
//         chooseWorking_Title_rhythm: (state, action) => { state.working_title = action.payload},
//         chooseGenre_rhythm: (state, action) => { state.genre = action.payload},
//         chooseWriter_Name_rhythm: (state, action) => { state.writer_name = action.payload},
//         chooseLength_rhythm: (state, action) => { state.length = action.payload},
//         chooseRating_rhythm: (state, action) => { state.rating = action.payload},
//         chooseLatest_User_Update_rhythm: (state, action) => { state.latest_user_update = action.payload}
//     }
// })

// export const reducer = rootSlice_folk.reducer;
// export const reducer = rootSlice_rock.reducer;
// export const reducer = rootSlice_rhythm.reducer;
// export const { chooseWorking_Title_folk, chooseGenre_folk, chooseWriter_Name_folk, chooseLength_folk, chooseRating_folk, chooseLatest_User_Update_folk} = rootSlice_folk.actions
// export const { chooseWorking_Title_rock, chooseGenre_rock, chooseWriter_Name_rock, chooseLength_rock, chooseRating_rock, chooseLatest_User_Update_rock} = rootSlice_rock.actions
// export const { chooseWorking_Title_rhythm, chooseGenre_rhythm, chooseWriter_Name_rhythm, chooseLength_rhythm, chooseRating_rhythm, chooseLatest_User_Update_rhythm} = rootSlice_rhythm.actions