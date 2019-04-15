/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.querySelector( ".student-list" );
const students = studentList.children;
const itemsPerPage = 10;
let currentPage = 1;

function showPage( list, page ) {

    console.log( "Showing page: " + page );
    let currentPageNum = 1;
    let itemOnPage = 1;
    for ( let i = 0; i < students.length; i++ ) {
	if ( currentPageNum === page ) {
	    students[ i ].style.display = "";
	}
	else {
	    students[ i ].style.display = "none";
	}

	// Keep track of whether we need to advance the page or not.
	itemOnPage++;
	if ( itemOnPage > itemsPerPage ) {
	    itemOnPage = 1;
	    currentPageNum++;
	}
    }
}




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks( students ) {

    // Find the page div to append to.
    let pageDiv = document.querySelector( ".page" );

    // Create the div to hold the pagination.
    let div = document.createElement( "div" );
    div.className = "pagination";

    let ul = document.createElement( "ul" );
    div.appendChild( ul );

    for ( let startingStudent = 1, pageNum = 1; 
	  startingStudent < students.length;
	  startingStudent += itemsPerPage, pageNum++ ) {

	
	let li = document.createElement( "li" );
	
	let link = document.createElement( "a" );
	link.href = "#";
	link.textContent = ( pageNum );
	li.appendChild( link );

	if ( pageNum === currentPage ) {
	    link.className = "active";
	}

	link.addEventListener( 'click', changeCurrentPage );

	ul.appendChild( li );
    }
    
    pageDiv.appendChild( div );

}

function changeCurrentPage( e ) {
    
    // Figure out which link was clicked
    let page = e.target;
    let pageNum = parseInt( page.textContent );

    // Switch which students are shown
    showPage( students, pageNum );

    // Change the currently active page number
    let pagination = document.querySelector( '.pagination' );
    let lis = pagination.firstElementChild.children;
    for ( let i = 0; i < lis.length; i++ ) {
	let currentLi = lis[ i ];
	let link = currentLi.firstElementChild;
	if ( i+1 === pageNum ) {
	    link.className = "active";
	}
	else {
	    link.className = "";
	}
    }
}


showPage( students, currentPage );
appendPageLinks( students );

