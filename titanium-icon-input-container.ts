@component("titanium-icon-input-container")
class TitaniumIconInputContainer extends polymer.Base {

    @property({ type: String, })
    icon: string;

    @property({
        type: Boolean,
        value: false
    })
    focused: boolean;

    @property({
        type: Boolean,
        value: false
    })
    disabled: boolean;

    @property({
        type: Boolean,
        value: false
    })
    invalid: boolean;

    @property({
        type: String,
        value: "focused"
    })
    attrForFocused: string;

    @property({
        type: String,
        value: "disabled"
    })
    attrForDisabled: string;

    attached() {
        var self = this;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (m) {
                if (m.attributeName == self.attrForFocused) {
                    self.set("focused", m.oldValue === null ? true : false);
                }
                if (m.attributeName == self.attrForDisabled) {
                    self.set("disabled", m.oldValue === null ? true : false);
                }
            });
        });
        // Observe attribute changes to child elements
        observer.observe(this, {
            attributes: true,
            subtree: true,
            attributeOldValue: true
        });
    }


}
TitaniumIconInputContainer.register();