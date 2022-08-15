class Kitchen {
  cookBurger() {
    console.log("cooking burger");
  } 
  cookSide() {
    console.log("cooking side dishes");
  }
  prepareDrinks() {
    console.log("preparing drinks")
  }
}

class FoodService {
  serve() {
    console.log("Order ready, serving food now");
  }
}

class RestaurantFacade {
  newOrder() {
    const kitchen = new Kitchen();
    kitchen.cookBurger();
    kitchen.cookSide();
    kitchen.prepareDrinks();

    const foodService =  new FoodService();
    return foodService.serve();
  }
}

const facade = new RestaurantFacade();
facade.newOrder();