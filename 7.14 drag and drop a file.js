//7.14 drag and drop a file
var dropzone

var w = 900
var h = 300

function setup(){
  createCanvas(w,h)
background(110,215)

dropzone = select('#dropzone')
dropzone.dragOver(highlight)
// dropzone.dragLeave(unhighlight)

dropzone.drop(gotfile, unhighlight)

}// setup Ends

//
function highlight(){
  dropzone.style('background-color', 'red')
}//Ends

//
function unhighlight(){
  dropzone.style('background-color', 'black')
}
//Ends//
//
function gotfile(file){
var img = createImg(file.data)
// var img = file.data
img.hide()
image(img,0 ,0, width, height)
}
