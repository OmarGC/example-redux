/**
 * Una lee lo que tenemos en localstorage
 * y la otra lo va guardando en localstorage
 */

export const obtenerStateStorage = () => {
  const citasStorage = localStorage.getItem('citas');
  if(citasStorage === null) {
      return undefined;
  }
  return JSON.parse(citasStorage);
}

export const guardarStateStorage = (state) => {
  const citasState = JSON.stringify(state);
  localStorage.setItem('citas', citasState)
}