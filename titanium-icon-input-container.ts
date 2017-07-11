@customElement('titanium-icon-input-container')
class TitaniumIconInputContainer extends Polymer.Element {

    @property()
    icon: string;

    @property()
    focused: boolean = false;

    @property()
    disabled: boolean = false;

    @property()
    invalid: boolean = false;

    @property()
    attrForFocused: string = 'focused';

    @property()
    attrForDisabled: string = 'disabled';

    @property()
    attrForInvalid: string = 'invalid';

    ready() {
        super.ready();
    }

    connectedCallback() {
        super.connectedCallback();
        let elements: any = Polymer.dom(this.$.slot).getDistributedNodes();
        let self = this;

        elements.forEach((o: any) => {
            o.addEventListener(`${self.attrForFocused}-changed`, (e: any) => {
                if (e.detail)
                    this.focused = e.detail.value;
            });
            o.addEventListener(`${self.attrForInvalid}-changed`, (e: any) => {
                if (e.detail)
                    this.invalid = e.detail.value;
            });
            o.addEventListener(`${self.attrForDisabled}-changed`, (e: any) => {
                if (e.detail)
                    this.disabled = e.detail.value;
            });

            if (o[this.attrForDisabled]) {
                self.disabled = true;
            }
        });
    }

}