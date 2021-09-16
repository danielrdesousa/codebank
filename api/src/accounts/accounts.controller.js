"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AccountsController = void 0;
var common_1 = require("@nestjs/common");
var AccountsController = /** @class */ (function () {
    function AccountsController(accountsService) {
        this.accountsService = accountsService;
    }
    AccountsController.prototype.create = function (createAccountDto) {
        return this.accountsService.create(createAccountDto);
    };
    AccountsController.prototype.findAll = function () {
        return this.accountsService.findAll();
    };
    AccountsController.prototype.findOne = function (id) {
        return this.accountsService.findOne(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], AccountsController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], AccountsController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe()))
    ], AccountsController.prototype, "findOne");
    AccountsController = __decorate([
        (0, common_1.Controller)('accounts')
    ], AccountsController);
    return AccountsController;
}());
exports.AccountsController = AccountsController;
