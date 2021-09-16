"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateTransactionDto = void 0;
var class_validator_1 = require("class-validator");
var transaction_entity_1 = require("./../entities/transaction.entity");
var CreateTransactionDto = /** @class */ (function () {
    function CreateTransactionDto() {
    }
    __decorate([
        (0, class_validator_1.IsISO8601)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateTransactionDto.prototype, "payment_date");
    __decorate([
        (0, class_validator_1.MaxLength)(255),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateTransactionDto.prototype, "name");
    __decorate([
        (0, class_validator_1.MaxLength)(255),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateTransactionDto.prototype, "description");
    __decorate([
        (0, class_validator_1.IsIn)(transaction_entity_1.TransactionCategoryList),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateTransactionDto.prototype, "category");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateTransactionDto.prototype, "amount");
    __decorate([
        (0, class_validator_1.IsIn)(transaction_entity_1.TransactionTypeList),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateTransactionDto.prototype, "type");
    return CreateTransactionDto;
}());
exports.CreateTransactionDto = CreateTransactionDto;
