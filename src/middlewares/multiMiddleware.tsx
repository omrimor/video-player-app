const multiMiddleware = ({ dispatch }: any) => (next: any) => (action: any) => {
  if (!Array.isArray(action)) {
    return next(action);
  }
  action.forEach(item => dispatch(item));
};

export default multiMiddleware;