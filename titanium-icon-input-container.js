var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
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
var TitaniumIconInputContainer = (function (_super) {
    __extends(TitaniumIconInputContainer, _super);
    function TitaniumIconInputContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitaniumIconInputContainer.prototype.attached = function () {
        var self = this;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (m) {
                if (m.attributeName == self.attrForFocused) {
                    self.set("focused", m.oldValue === null ? true : false);
                }
            });
        });
        // Observe attribute changes to child elements
        observer.observe(this, {
            attributes: true,
            subtree: true,
            attributeOldValue: true
        });
    };
    return TitaniumIconInputContainer;
}(polymer.Base));
__decorate([
    property({ type: String, })
], TitaniumIconInputContainer.prototype, "icon", void 0);
__decorate([
    property({
        type: Boolean,
        value: false
    })
], TitaniumIconInputContainer.prototype, "focused", void 0);
__decorate([
    property({
        type: Boolean,
        value: false
    })
], TitaniumIconInputContainer.prototype, "invalid", void 0);
__decorate([
    property({
        type: String,
        value: "focused"
    })
], TitaniumIconInputContainer.prototype, "attrForFocused", void 0);
TitaniumIconInputContainer = __decorate([
    component("titanium-icon-input-container")
], TitaniumIconInputContainer);
TitaniumIconInputContainer.register();
//# sourceMappingURL=titanium-icon-input-container.js.map