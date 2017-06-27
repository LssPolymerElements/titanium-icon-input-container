var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let TitaniumIconInputContainer = class TitaniumIconInputContainer extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.focused = false;
        this.disabled = false;
        this.invalid = false;
        this.attrForFocused = "focused";
        this.attrForDisabled = "disabled";
        this.attrForInvalid = "invalid";
    }
    ready() {
        super.ready();
    }
    connectedCallback() {
        super.connectedCallback();
        var elements = Polymer.dom(this.$.slot).getDistributedNodes();
        var self = this;
        elements.forEach((o) => {
            o.addEventListener(`${self.attrForFocused}-changed`, (e) => {
                if (e.detail)
                    this.focused = e.detail.value;
            });
            o.addEventListener(`${self.attrForInvalid}-changed`, (e) => {
                if (e.detail)
                    this.invalid = e.detail.value;
            });
            o.addEventListener(`${self.attrForDisabled}-changed`, (e) => {
                if (e.detail)
                    this.disabled = e.detail.value;
            });
            if (o[this.attrForDisabled]) {
                self.disabled = true;
            }
        });
    }
};
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumIconInputContainer.prototype, "icon", void 0);
__decorate([
    property(),
    __metadata("design:type", Boolean)
], TitaniumIconInputContainer.prototype, "focused", void 0);
__decorate([
    property(),
    __metadata("design:type", Boolean)
], TitaniumIconInputContainer.prototype, "disabled", void 0);
__decorate([
    property(),
    __metadata("design:type", Boolean)
], TitaniumIconInputContainer.prototype, "invalid", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumIconInputContainer.prototype, "attrForFocused", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumIconInputContainer.prototype, "attrForDisabled", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumIconInputContainer.prototype, "attrForInvalid", void 0);
TitaniumIconInputContainer = __decorate([
    customElement("titanium-icon-input-container")
], TitaniumIconInputContainer);
