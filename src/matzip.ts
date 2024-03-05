import { MatzipInterface, Restaurant, SortType } from './types';
import { CategoryValidator, NameValidator, DistanceValidator } from './validator/index';

class Matzip implements MatzipInterface {
  restaurants: Restaurant[] = [];

  constructor(restaurants: Restaurant[]) {
    this.restaurants = restaurants;
  }

  add(restaurant: Restaurant) {
    this.addValidate(restaurant);
    this.restaurants.push(restaurant);
  }

  sort(sortBy: SortType) {
    const SORT_BY = {
      이름순: this.sortByName,
      거리순: this.sortByDistance,
    };

    return [...this.restaurants.sort(SORT_BY[sortBy])];
  }

  sortByName(a: Restaurant, b: Restaurant) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  sortByDistance(a: Restaurant, b: Restaurant) {
    if (a.distance < b.distance) {
      return -1;
    }
    if (a.distance > b.distance) {
      return 1;
    }
    return 0;
  }

  addValidate(restaurant: Restaurant) {
    CategoryValidator.empty(restaurant.category + '');
    CategoryValidator.exist(restaurant.category + '');
    NameValidator.empty(restaurant.name);
    DistanceValidator.empty(restaurant.distance);
    DistanceValidator.exist(restaurant.distance);
  }
}

export default Matzip;
