var canvas = new fabric.Canvas("myCanvas");

var block_height = 30;
var block_width = 30;

var player_x = 10;
var player_y = 10;

var player = "";
var object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
      object = Img;
      object.scaleToWidth(150);
      object.scaleToHeight(150);
      object.set(
        top:player_y,
        left:player_x


    }
      );

      canvas.add(object);

  });
}

new_image(){
  fabric.Image.fromURL("player.png", function(Img){
    object = Img;
    object.scaleToWidth(block_width);
    object.scaleToHeight(block_height);
    object.set(
      top:player_y,
      left:player_x
}

    );

    canvas.add(object);

});
