import { LikeComponent } from './like.Component';

let getData = new LikeComponent(true, 10);
getData.getDate();
console.log(getData.count, getData.isSelected);