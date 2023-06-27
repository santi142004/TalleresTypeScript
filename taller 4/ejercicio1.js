"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function numeroCuadrado(num) {
    return new Promise((resolve, reject) => {
        if (typeof num === 'number') {
            setTimeout(() => {
                const square = num * num;
                resolve(square);
            }, 1000);
        }
        else {
            reject('El argumento no es un número válido');
        }
    });
}
function cuadrado() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield numeroCuadrado(5);
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    });
}
cuadrado();
