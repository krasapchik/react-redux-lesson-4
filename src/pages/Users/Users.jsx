import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setUsers,
} from "../../store/reducers/UsersSlice";
import fetchAllUsers from "../../store/creatos/usersCreator";

const Users = () => {
  const dispatch = useDispatch();

  const { users, usersError, usersLoading } = useSelector(
    (state) => state.userReducer
  );
  useEffect(() => {
    dispatch(fetchAllUsers())
      
  }, []);

  return (
    <div>
      {usersLoading
        ? "Loading..."
        : usersError
        ? usersError
        : users?.map((el) => el.name)}
    </div>
  );
};

export default Users;
