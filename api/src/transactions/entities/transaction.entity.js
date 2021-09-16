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
exports.Transaction = exports.TransactionTypeList = exports.TransactionType = exports.TransactionCategoryList = exports.TransactionCategory = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var to_number_decorators_1 = require("../../shared/decorators/to-number.decorators");
var account_entity_1 = require("./../../accounts/entities/account.entity");
var TransactionCategory;
(function (TransactionCategory) {
    TransactionCategory["CATEGORY1"] = "category1";
    TransactionCategory["CATEGORY2"] = "category2";
})(TransactionCategory = exports.TransactionCategory || (exports.TransactionCategory = {}));
exports.TransactionCategoryList = Object.values(TransactionCategory);
var TransactionType;
(function (TransactionType) {
    TransactionType["CREDIT"] = "credit";
    TransactionType["DEBIT"] = "debit";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
exports.TransactionTypeList = Object.values(TransactionType);
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID, defaultValue: sequelize_typescript_1.DataType.UUIDV4 })
    ], Transaction.prototype, "id");
    __decorate([
        (0, sequelize_typescript_1.Column)({ allowNull: false })
    ], Transaction.prototype, "payment_date");
    __decorate([
        (0, sequelize_typescript_1.Column)({ allowNull: false })
    ], Transaction.prototype, "name");
    __decorate([
        (0, sequelize_typescript_1.Column)({ allowNull: false })
    ], Transaction.prototype, "description");
    __decorate([
        (0, sequelize_typescript_1.Column)({ allowNull: false })
    ], Transaction.prototype, "category");
    __decorate([
        to_number_decorators_1.ToNumber,
        (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.DECIMAL(10, 2) })
    ], Transaction.prototype, "amount");
    __decorate([
        (0, sequelize_typescript_1.Column)({ allowNull: false })
    ], Transaction.prototype, "type");
    __decorate([
        (0, sequelize_typescript_1.ForeignKey)(function () { return account_entity_1.Account; }),
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.UUID,
            defaultValue: sequelize_typescript_1.DataType.UUIDV4,
            allowNull: false
        })
    ], Transaction.prototype, "account_id");
    __decorate([
        (0, sequelize_typescript_1.BelongsTo)(function () { return account_entity_1.Account; })
    ], Transaction.prototype, "account");
    Transaction = __decorate([
        (0, sequelize_typescript_1.Table)({
            tableName: 'transactions',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        })
    ], Transaction);
    return Transaction;
}(sequelize_typescript_1.Model));
exports.Transaction = Transaction;
