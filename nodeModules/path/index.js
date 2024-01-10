let path=require('path')
console.log(path.basename('/Desktop/nodeJs/nodeModules/path/index.js'))
console.log(path.basename('/Desktop/nodeJs/nodeModules/path/index.js'),'.js')

// path.delimiter 
console.log(path.delimiter)

//path.dirname
console.log("path.diname()")
console.log(path.dirname('/Desktop/nodeJs/nodeModules/path'),"\n")

//path.extname --> to get extension portion of the path.
console.log("path.extname\n",path.extname('hello.txt'),path.extname('readme.md'),"\n")


//path.format --> format path which is in individual forms.

//path.isAbsolute --> check whether the given path is absolute or not.
console.log("path.isAbsolute")
console.log(path.isAbsolute('/Desktop/nodeJs/nodeModules/path'))