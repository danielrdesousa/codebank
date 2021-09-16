"use strict";
exports.__esModule = true;
exports.ToNumber = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
function ToNumber(target, propertyKey) {
    (0, sequelize_typescript_1.addAttributeOptions)(target, propertyKey, {
        get: function () {
            return +this.getDataValue(propertyKey);
        }
    });
}
exports.ToNumber = ToNumber;
