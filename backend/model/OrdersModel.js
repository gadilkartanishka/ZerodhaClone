const {Model}=require('mongoose');
const {OrdersSchema}=require('../schemas/OrdersSchema');

const OrdersModel=new Model("Orders",OrdersSchema);

module.exports={OrdersModel};