import { LightningElement, api } from 'lwc';

export default class SourceCode extends LightningElement {
    baseURL = 'https://github.com/MkHunter/trailhead-lwc/tree/master/force-app/main/default/';
    @api type;
    @api source;

    get sourceURL() {
        return this.baseURL + '/' + this.type + '/' + this.source;
    }
}