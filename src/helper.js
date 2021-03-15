export function getCurrentUser() {
  let data = localStorage.getItem('user');
  let userData = data ? JSON.parse(data).user : null;
  return userData;
}
