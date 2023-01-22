export const loginGuard = () => {
  return !!sessionStorage.getItem('user');
};
