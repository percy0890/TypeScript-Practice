"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_isSelected, _count) {
        this._isSelected = _isSelected;
        this._count = _count;
    }
    LikeComponent.prototype.getDate = function () {
        this._count += (this.isSelected ? -1 : 1);
        this._isSelected = !this.isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
