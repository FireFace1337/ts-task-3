/** Задача 2 - Много стран, много валют
 * Определите классы следующих валют
 * Dollar
 * Ruble
 * XRP
 * Etherium
 * Gold
*/
import { Currency } from "../task_1";

export class Dollar extends Currency {
    constructor(value: number) {
        super("Dollar", value, "USD");
    }
}

export class Ruble extends Currency {
    constructor(value: number) {
        super("Ruble", value, "RUB");
    }
}

export class XRP extends Currency {
    constructor(value: number) {
        super("XRP", value, "Riplle");
    }
}

export class Etherium extends Currency {
    constructor(value: number) {
        super("Etherium", value, "ETH");
    }
}

export class Gold extends Currency {
    constructor(value: number) {
        super("Gold", value, "XAU");
    }
}