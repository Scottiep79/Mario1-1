
printPyramid(5);




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
function printPyramid(height) {
  let hashes = [];
  let spaces = [];
  
  for (var i = 1; i <= height; i++) {
    hash(i);
    space(height-i);
    console.log(spaces.join("") + hashes.join(""))
  }
  
//create some spaces
  
  function space(num) {
    spaces.length = 0;
    for (var i = 0; i < num ; i++) {
      spaces[i] = " "
    }
  }

//create some blocks

  function hash(num) {
    for (var i = 0; i < num + 1 ; i++) {
      hashes[i] = "#"
    }
  }
}
    // TODO
    // print that pyramid!





