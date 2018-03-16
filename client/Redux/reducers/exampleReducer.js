export default function example(state = [], action) {
  switch (action.type) {
    case 'EXAMPLE':
      return (state = action.payload);
    default:
      return state;
  }
}
