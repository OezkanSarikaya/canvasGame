const level1 = new Level(
  // [new Chicken(), new Chicken(), new Chicken()],
  [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chick(),
    ,
    new Chicken(),
    new Chick(),
    new Chick(),
    new Chick(),
    new Endboss(),
  ],
  [new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud()],

  [
    new BackgroundObject("./img/5_background/layers/air.png", -1079),
    // new BackgroundObject("./img/5_background/desert.jpg", -1079),
    
    new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", -1079),
    new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", -1079),
    new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", -1079),

    new BackgroundObject("./img/5_background/layers/air.png", 0),
    // new BackgroundObject("./img/5_background/desert.jpg", 0),
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
    new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 2158)
  ]
);
