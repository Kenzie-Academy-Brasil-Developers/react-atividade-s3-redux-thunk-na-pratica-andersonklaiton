import { addComment } from "./action";

export const addComentThunk = (comment) => {
  return (dispatch, getState) => {
    const { user } = getState();

    const updateUser = { ...user, comments: [...user.comments, comment] };

    dispatch(addComment(updateUser));
  };
};
