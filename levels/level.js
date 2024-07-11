let level;

function initLevel(gameLevel) {
  if (gameLevel == 'level1') {
    level = new Level(
      [
        new Endboss(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chick(),
        new Chicken(),
        new Chick(),
        new Chick(),
        new Chick(),
        
      ],
      [new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud()],

      [
        new BackgroundObject("./img/5_background/layers/air.png", -1079),
        new BackgroundObject("./img/5_background/sun.png", -940, 400, 250, 250),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", -1079),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", -1079),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", -1079),

        new BackgroundObject("./img/5_background/layers/air.png", 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 0),

        new BackgroundObject("./img/5_background/layers/air.png", 1079),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 1079),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 1079),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 1079),

        new BackgroundObject("./img/5_background/layers/air.png", 2158),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 2158),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 2158),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 2158),
      ]
    
    );

  
  }
  if (gameLevel == 'level2') {
    level = new Level(
      [
        new Endboss(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chick(),
        new Chicken(),
        new Chick(),
        new Chick(),
        new Chick(),
        // new Endboss(),
      ],
      [new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud()],

      [
        new BackgroundObject("./img/5_background/layers/night.png", -1079, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/moon.png", -940, 400, 200, 200),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2-night.png", -1079),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2-night.png", -1079),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2-night.png", -1079),

        new BackgroundObject("./img/5_background/layers/night.png", 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1-night.png", 0),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1-night.png", 0),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1-night.png", 0),

        new BackgroundObject("./img/5_background/layers/night.png", 1079),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2-night.png", 1079),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2-night.png", 1079),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2-night.png", 1079),

        new BackgroundObject("./img/5_background/layers/night.png", 2158),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1-night.png", 2158),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1-night.png", 2158),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1-night.png", 2158),
      ]
  
    );
  }

  
}