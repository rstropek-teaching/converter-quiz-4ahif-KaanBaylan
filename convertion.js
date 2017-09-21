exports.convert = (val, from, to) => {
    if(from == to)
        console.log(val+" "+from+" are "+val+" "+to);
    if(from == "cm" && to == "mm")
        console.log(val+" "+from+" are "+(val*10)+" "+to);
    if(from == "mm" && to == "cm")
        console.log(val+" "+from+" are "+(val/10)+" "+to);
    if((from == "m" && to == "cm")) 
        console.log(val+" "+from+" are "+(val*100)+" "+to);
    if(from == "cm" && to == "m")
        console.log(val+" "+from+" are "+(val/100)+" "+to);
    if((from == "g" && to == "kg") || (from == "mm" && to == "m"))
        console.log(val+" "+from+" are "+(val/1000)+" "+to);
    if((from == "kg" && to == "g") || (from == "m" && to == "mm"))
        console.log(val+" "+from+" are "+(val*1000)+" "+to);    
}