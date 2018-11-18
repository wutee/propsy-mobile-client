import {Food} from './food';

export class Menu {
  menuId: number;
  menuName: string;
  foods: Food[] = [];
  isOpen = false;
}
