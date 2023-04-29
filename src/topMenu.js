import termkit from 'terminal-kit'
import { navigate } from './navigate.js';

export const showTopMenu = (parent) => {
  const rowMenu = new termkit.RowMenu({
    parent,
    x: 0,
    y: 0,
    separator: '|',
    justify: true,
    width: 20,
    items: [
      { content: 'Login', value: 'login' },
      { content: 'test', value: 'test' }
    ]
  })

  rowMenu.on('submit', navigate);
  // rowMenu.on( 'itemFocus' , onItemFocus ) 

  // document.giveFocusTo( rowMenu )
}