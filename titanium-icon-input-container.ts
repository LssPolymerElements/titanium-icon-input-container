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

    @property({
        type: String,
        value: "invalid"
    })
    attrForInvalid: string;

    ready() {
        var self = this;

        this.getContentChildren('#slot').forEach(o => {
            o.addEventListener(`${self.attrForFocused}-changed`, e => {
                if (e.detail)
                    this.focused = e.detail.value;
            });
            o.addEventListener(`${self.attrForInvalid}-changed`, e => {
                if (e.detail)
                    this.invalid = e.detail.value;
            });
            o.addEventListener(`${self.attrForDisabled}-changed`, e => {
                if (e.detail)
                    this.disabled = e.detail.value;
            });

            if (o[this.attrForDisabled]) {
                self.disabled = true;
            }
        })

    }


}
TitaniumIconInputContainer.register();