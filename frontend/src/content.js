export function getEmail() {
  return window.localStorage.getItem("vue-email-content");
}
export function setEmail(content) {
  window.localStorage.setItem("vue-email-content", content);
}
export function getPwd() {
  return window.localStorage.getItem("vue-pwd-content");
}
export function setPwd(content) {
  window.localStorage.setItem("vue-pwd-content", content);
}
export function getFirst() {
  return window.localStorage.getItem("vue-first-content");
}
export function setFirst(content) {
  return window.localStorage.setItem("vue-first-content", content);
}
export function getLast() {
  return window.localStorage.getItem("vue-last-content");
}
export function setLast(content) {
  window.localStorage.setItem("vue-last-content", content);
}

export function getUser() {
  return window.localStorage.getItem("vue-user-content");
}
export function setUser(content) {
  window.localStorage.setItem("vue-user-content", content);
}
