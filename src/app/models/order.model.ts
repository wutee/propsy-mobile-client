export class Order {

    constructor(
        userId: number,
        restaurantId: number,
        deliveryManId: number,
        date: Date,
        lastUpdateDate: Date,
        status: number,
        price: number,
        userOption: string,
        userComment: string,
        deliveryManComment: string,
        loyalityPoints: number
    ) { }

}