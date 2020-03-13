// import Menu from '../models/Menu';

class SimpleMenu {

    public entrees: string[];
    public sides: string[];

    constructor(menuObject: any) {
        // super();
        this.entrees = menuObject.entrees;
        this.sides = menuObject.sides;
    }

}

export default SimpleMenu;
