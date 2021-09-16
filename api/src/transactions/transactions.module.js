"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransactionsModule = void 0;
var sequelize_1 = require("@nestjs/sequelize");
var common_1 = require("@nestjs/common");
var transaction_entity_1 = require("./entities/transaction.entity");
var transactions_service_1 = require("./transactions.service");
var transactions_controller_1 = require("./transactions.controller");
var account_entity_1 = require("./../accounts/entities/account.entity");
var TransactionsModule = /** @class */ (function () {
    function TransactionsModule() {
    }
    TransactionsModule = __decorate([
        (0, common_1.Module)({
            imports: [sequelize_1.SequelizeModule.forFeature([transaction_entity_1.Transaction, account_entity_1.Account])],
            controllers: [transactions_controller_1.TransactionsController],
            providers: [transactions_service_1.TransactionsService]
        })
    ], TransactionsModule);
    return TransactionsModule;
}());
exports.TransactionsModule = TransactionsModule;
