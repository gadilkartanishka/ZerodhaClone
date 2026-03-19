const {Model}=require('mongoose');
const {PositionsSchema}=require('../schemas/PositionsSchema');

const PositionsModel=new Model("Position",PositionsSchema);

module.exports={PositionsModel};