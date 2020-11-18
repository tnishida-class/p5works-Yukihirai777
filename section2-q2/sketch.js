// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0 && j % 2 == 0){
      let c = color('white');
      fill(c);
      }
      else if(i % 2 == 1 && j % 2 == 1){
      let c = color('white');
      fill(c);
      }
      else{
      let c = color('gray');
      fill(c);
      }
      rect(size * i, size * j, size);
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }

}
