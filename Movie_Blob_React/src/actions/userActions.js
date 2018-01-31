export function push_user_list_to_state(data) {
  return {
    type: 'PUSH_USER_LIST_IN_STATE',
    payload: data,
  };
}

export function authed_true() {
  return {
    type: 'AUTHED_TRUE',
    payload: true,
  };
}

export function authed_false() {
  return {
    type: 'AUTHED_FALSE',
    payload: false,
  };
}
