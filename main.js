"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_Component_1 = require("./like.Component");
var getData = new like_Component_1.LikeComponent(true, 10);
getData.getDate();
console.log(getData.count, getData.isSelected);
