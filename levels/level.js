let level;

function initLevel(gameLevel) {
  if (gameLevel == 1) {
    level = new Level(
      [],
      [
        new Endboss(3, 200),
        new Chicken(0.4),
        new Chicken(0.4),
        new Chicken(0.4),
        new Chick(0.6),
        new Chicken(0.4),
        new Chick(0.6),
        new Chick(0.6),
        new Chick(0.6),
      ],
      [new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud()],

      [
        new BackgroundObject("./img/5_background/layers/air.png", -1079, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/sun.png", -940, 400, 250, 250, 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", -1079, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", -1079, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", -1079, 0, 0, 0, 1),

        new BackgroundObject("./img/5_background/layers/air.png", 0, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 0, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 0, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 0, 0, 0, 0, 1),

        new BackgroundObject("./img/5_background/layers/air.png", 1079, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 1079, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 1079, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 1079, 0, 0, 0, 1),

        new BackgroundObject("./img/5_background/layers/air.png", 2158, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 2158, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 2158, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 2158, 0, 0, 0, 1),
      ]
    );
  }

  if (gameLevel == 3) {
    level = new Level(
      [],
      [
        new Endboss(5, 400),
        new Chicken(0.8),
        new Chick(1.0),
        new Chick(1.0),
        new Chicken(1.0),
        new Chicken(0.8),
        new Chick(1.0),
        new Chicken(0.8),
        new Chicken(1.2),
        new Chick(1.0),
        new Chick(1.0),
        new Chick(1.0),
        new Chicken(0.8),
        new Chicken(0.8),
        new Chick(1.0),
        new Chick(1.0),
        new Chicken(0.8),
      ],
      [new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud()],

      [
        new BackgroundObject("./img/5_background/layers/night.png", -1079, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/moon.png", -940, 400, 200, 200, 0),
        // new BackgroundObject("./img/5_background/city-night.png", -180, 180, 200, 50, 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2-night.png", -1079, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2-night.png", -1079, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2-night.png", -1079, 0, 0, 0, 1),

        new BackgroundObject("./img/5_background/layers/night.png", 0, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1-night.png", 0, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1-night.png", 0, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1-night.png", 0, 0, 0, 0, 1),

        new BackgroundObject("./img/5_background/layers/night.png", 1079, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2-night.png", 1079, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2-night.png", 1079, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2-night.png", 1079, 0, 0, 0, 1),

        new BackgroundObject("./img/5_background/layers/night.png", 2158, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1-night.png", 2158, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1-night.png", 2158, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1-night.png", 2158, 0, 0, 0, 1),
      ]
    );
  }

  if (gameLevel == 2) {
    level = new Level(
      [],
      [
        new Endboss(4, 300),
        new Chicken(0.6),
        new Chicken(0.8),
        new Chicken(0.6),
        new Chick(0.8),
        new Chicken(0.6),
        new Chick(0.8),
        new Chick(0.8),
        new Chick(0.8),
        new Chicken(0.6),
        new Chick(0.8),
        new Chicken(0.8),
      ],
      [new Cloud(), new Birds(), new Cloud(), new Cloud(), new Birds(), new Cloud(), new Cloud(), new Cloud()],

      [
        new BackgroundObject("./img/5_background/layers/sea-air.png", -1079, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/sun.png", -580, 80, 250, 250, 0), 
        new BackgroundObject("./img/5_background/layers/sea.png", -1079, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/boat.png", -580, 280, 200, 200, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", -1079, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", -1079, 0, 0, 0, 1),

        new BackgroundObject("./img/5_background/layers/sea-air.png", 0, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/layers/sea.png", 0, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 0, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 0, 0, 0, 0, 1),

        new BackgroundObject("./img/5_background/layers/sea-air.png", 1079, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/layers/sea.png", 1079, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 1079, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 1079, 0, 0, 0, 1),

        new BackgroundObject("./img/5_background/layers/sea-air.png", 2158, 0, 0, 0, 0),
        new BackgroundObject("./img/5_background/layers/sea.png", 2158, 0, 0, 0, 3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 2158, 0, 0, 0, 2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 2158, 0, 0, 0, 1),
      ]
    );
  }
}
