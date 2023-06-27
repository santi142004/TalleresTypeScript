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
function resultado() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(8);
        }, 6000);
    });
}
function imprimir() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield resultado();
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    });
}
imprimir();
function cuadradoAsincrono() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield resultado();
            const square = result * result;
            console.log(square);
        }
        catch (error) {
            console.error(error);
        }
    });
}
cuadradoAsincrono();
