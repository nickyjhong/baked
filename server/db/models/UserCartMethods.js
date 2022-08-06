module.exports = (User, db) => {
    User.prototype.getCart = async function() {
        const where = {
            userId: this.id,
            status: 'open'
        };
        const Order = db.models.Order;
        const CartItem = db.models.CartItem;
        const Product = db.models.Product;

        let cart = await Order.findOne({
            where
        });

        if(!cart) {
            cart = await Order.create(where);
        }
        return Order.findByPk(cart.userId,
            { include: [
                { model: CartItem, include: [Product] }
            ]});
    }
}