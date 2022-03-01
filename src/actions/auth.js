export const LoginAction = (user) => async (dispatch) => {
  await dispatch({
    type: "LOGIN",
    payload: user,
  });
};

export const LogoutAction = () => async (dispatch) => {
  await dispatch({
    type: "LOGOUT",
    payload: {},
  });
};
