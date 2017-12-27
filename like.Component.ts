
export class LikeComponent{
    constructor(private _isSelected: boolean,private _count: number){}

    getDate(){
        this._count += (this.isSelected ? -1 : 1);
        this._isSelected = !this.isSelected;
    }

    get isSelected(){
        return this._isSelected;
    }

    get count(){
        return this._count
    }
}