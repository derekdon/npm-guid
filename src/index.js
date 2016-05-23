'use strict';

export default class GUID {

    constructor() {
    }

    generate() {
        return this._s4() + this._s4() + '-' + this._s4() + '-' + this._s4() +
            '-' + this._s4() + '-' + this._s4() + this._s4() + this._s4();
    }

    _s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16).substring(1);
    }
}

GUID.$inject = [];