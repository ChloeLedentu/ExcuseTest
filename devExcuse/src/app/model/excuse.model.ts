export class Excuse {

    code?: number;
    tag?: string;
    message?: string;


    constructor(args: Excuse = {}) {
        this.code = args.code;
        this.tag = args.tag;
        this.message = args.message;
    }

}
