const actions: object[] = [];

const logMiddleware = () => (next: any) => (action: any) => {
  // if action passing is actually a multi middleware - composed of actions array
  if (action.length) {
    return next(action);
  }
  console.log('Action: ' + action.type, action);
  actions.push(action);
  return next(action);
};

export default logMiddleware;
