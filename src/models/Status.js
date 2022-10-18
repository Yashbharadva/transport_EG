export default class Status {
    constructor(status = {}) {
        this.colorCode = status.color_code || undefined;
        this.count = status.count || undefined;
        this.statusText = status.status_text || undefined;
    }
}