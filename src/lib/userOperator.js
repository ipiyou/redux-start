const OB = (state, code) => ({
  ...state,
  user: {
    ...state.user,
    data: code,
  },
});

export const userOperate = {
  add: (state, action) => OB(state, state.user.data.concat(action.data)),
  remove: (state, action) =>
    OB(
      state,
      state.user.data.filter((e) => e.id !== action.id)
    ),
  toggle: (state, action) =>
    OB(
      state,
      state.user.data.map((e) =>
        e.id === action.id ? { ...e, toggle: !e.toggle } : e
      )
    ),
  change: (state, action) => ({
    ...state,
    inputText: action.text,
  }),
};
