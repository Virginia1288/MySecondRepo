function getShippingMessage(country, price, deliveryFee) {
    var totalPrice = price + deliveryFee
    return `Shipping to ${country} will cost ${totalPrice} credits.`
}