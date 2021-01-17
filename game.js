var gamePattern=[]
var buttoncolors=["red","blue","green","yellow"]
var randomcolors=buttoncolors[number]
function nextsequence()
{
var number=Math.floor(Math.random()*4)
console.log(number)
}
gamePattern.push(randomcolors)
$.("button").
