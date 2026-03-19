const {Model}=require('mongoose');
const {HoldingsSchema}=require("../schemas/HoldingsSchema");

const HoldingsModel=new Model("Holdings",HoldingsSchema);

module.exports={HoldingsModel};