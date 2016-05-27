'use strict';

const DELIM = '-';

export default class GUID {
    
    static generate() {
        return GUID._s4() + GUID._s4() + DELIM + GUID._s4() + DELIM + GUID._s4() +
            DELIM + GUID._s4() + DELIM + GUID._s4() + GUID._s4() + GUID._s4();
    }

    static _s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16).substring(1);
    }
}