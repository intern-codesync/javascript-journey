function performAction(x,y ,Callback) {
    
    const result = Callback(x,y)
    console.log("result:",result);
}
function add(x,y) {
    return x + y;
}
function sub(x,y) {
    return x - y;
}
performAction(2, 2, add) 
performAction(2, 2, sub)
