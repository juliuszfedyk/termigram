import termkit from 'terminal-kit';
import { inspect } from 'util';
import { showTopMenu } from './src/topMenu.js';
const { terminal: term} = termkit;


function terminate() {
	term.grabInput( false ) ;
	setTimeout( function() { process.exit() } , 100 ) ;
}

term.on( 'key' , function( name , matches , data ) {
	// console.log( "'key' event:" , name ) ;
	if ( name === 'CTRL_C' ) { terminate() ; }
} ) ;

term.clear();


const doc = term.createDocument()

new termkit.Layout({
  parent: doc,
  boxChars: 'single',
  layout: {
    id: 'main',
    y: 0,
    widthPercent: 100,
    heightPercent: 100,
    rows: [
      {
        id: 'topMenuRow',
        height: 4,
        columns: [
          { id: 'topMenu', widthPercent: 100 },
        ]
      },
      {
        id: 'secondaryRow',
        columns: [
          { id: 'leftMenu', widthPercent: 30 },
          { id: 'content' }
        ]
      }
    ]
}});


term.hideCursor() ;

showTopMenu(doc.elements.topMenu)

new termkit.Text({
  parent: doc.elements.leftMenu,
  content: 'leftMenu is here',
  attr: { color: 'red'}
})

new termkit.Text({
  parent: doc.elements.content,
  content: 'content is here',
  attr: { color: 'red'}
})