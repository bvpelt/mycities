export class City {
    constructor(public id: number,
        public name: string,
        public province: string,
        public posrating: number,
        public negrating: number,
        public highlights?: string[],
        public photo?: string) { }
}