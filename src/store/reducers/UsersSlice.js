import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    usersError: "",
    usersLoading: false
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading: (state) => {
        state.usersError = "";
        state.usersLoading = true
    },
    setUsers: (state, action) =>{
        state.usersLoading = false;
        state.usersError = "";
        state.users = action.payload
    },
    setError: (state, action) =>{
        state.usersError = action.payload;
        state.users = [];
        state.usersLoading = false
    }
  }
})
const userReducer = usersSlice.reducer;
export const { setUsers, setLoading, setError } = usersSlice.actions;

export default userReducer