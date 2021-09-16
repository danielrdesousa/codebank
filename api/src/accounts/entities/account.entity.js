"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Account = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var to_number_decorators_1 = require("../../shared/decorators/to-number.decorators");
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.UUID,
            defaultValue: sequelize_typescript_1.DataType.UUIDV4
        })
    ], Account.prototype, "id");
    __decorate([
        (0, sequelize_typescript_1.Column)({ allowNull: false })
    ], Account.prototype, "name");
    __decorate([
        to_number_decorators_1.ToNumber,
        (0, sequelize_typescript_1.Default)(0),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL(10, 2), allowNull: false })
    ], Account.prototype, "balance");
    __decorate([
        (0, sequelize_typescript_1.Column)({ allowNull: false })
    ], Account.prototype, "subdomain");
    Account = __decorate([
        (0, sequelize_typescript_1.Table)({
            tableName: 'accounts',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        })
    ], Account);
    return Account;
}(sequelize_typescript_1.Model));
exports.Account = Account;
