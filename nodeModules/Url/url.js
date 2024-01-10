const url =require('url');

// WHATWG api
const link=new URL("http://dpx.com")
console.log(link.hostname);


// legacy api method
const link2=url.parse('http://dpx2.com');
console.log(link2.hostname);

//constructiong url form component parts and getting the  constructed structure.
const link3=new URL('http://dpx3.com');
link3.pathname='/dir1/dir2/this_file';
link3.port=8080;
link3.username="mintxdp";
link3.password="passwd123";
let thislink=link3.href;
console.log(thislink);