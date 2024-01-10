

// JSON.stringify() to convert object to json format.
var object={
    property1:"String",
    proerty2:"Number",
    property3:"Boolean",
    property4:"Character"

}

var object_data=JSON.stringify(object);

console.log('\n',object_data,'\n');


// JSON.parse() method to convert json data to js object.

var data=`{
"P1":"string",
"P2":"Number",
"P3":"Boolean"
}`

var this_data=JSON.parse(data);
console.log(this_data,'\n');


