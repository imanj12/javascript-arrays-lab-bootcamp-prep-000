// Add your functions and code here

var kittens = ['Milo', 'Otis', 'Garfield']

functions destructivelyAppendKitten(name){
  kittens.splice(-2, 0, name)
  return kittens
}

