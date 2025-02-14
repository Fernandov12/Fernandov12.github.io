$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(500, 0, 20, 290);
    createPlatform(1350, 550, 50, 50, "red");
    createPlatform(300, 600, 60, 300, "black")
    createPlatform(200, 700, 30, 100, "pink")
    createPlatform(700, 650, 50, 50, "teal")
    createPlatform(1000, 450, 60, 200, "blue") 
    createPlatform(1250, 630, 50, 80, "yellow")


    // TODO 3 - Create Collectables

    createCollectable("steve", 1350, 50, 0.6, 0.10);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("max", 1000, 700, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("top", 450, 500);
    createCannon("right", 400, 300);
    createCannon("left", 350, 1000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
