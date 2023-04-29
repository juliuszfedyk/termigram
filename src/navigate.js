import termkit from 'terminal-kit';
const { terminal: term} = termkit;

export const navigate = (route) => {
  term.clear()
  switch (route) {
    case 'login':
      term.eraseDisplay()
      term.clear()
      break;
  
    default:
      break;
  }
}