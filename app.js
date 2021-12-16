let socket = io();
var not = 0;
function counter(){
  socket.emit("plus",{value : not});
document.getElementById("press-button").innerHTML = not;
}
socket("member-plus",(not)=>{
  not = `${not.value}`;
});
