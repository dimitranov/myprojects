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
