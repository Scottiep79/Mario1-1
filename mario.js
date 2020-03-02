
printPyramid(4);
let height = 0;



/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */


function printPyramid(height){
  for(let num = 0; num < height; num++){ 
    for(let spaces = height - num; spaces > 1; spaces--){
      console.log(" ");
    }
    for(let hash = 0; hash < num + 2; hash++){
      console.log("#");
    }
   

    
    
  }
};        
    

    // TODO
    // print that pyramid!
     /*let p = "#"
    let h = " "
    let numb = 1
    while(numb = 1){
     console.log(h+h+h+h+p+p)
     
    }numb++
     
     while(num = 2){
     console.log(h+h+h+p+p+p)
     }numb++*/




