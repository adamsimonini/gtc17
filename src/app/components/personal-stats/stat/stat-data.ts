export class StatData {
    name: string;
    min: number;
    max: number;
    before: number;
    after: number;

    constructor(name: string, min: number, max: number, before: number, after: number) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.before = Math.max(Math.min(max, before), min);
        this.after = Math.max(Math.min(max, after), min);
    }

    public getBeforePercent(): number {
        let beforeNormalized = this.before - this.min;
        let maxNormalized = this.max - this.min;
        return (beforeNormalized / maxNormalized) * 100;
    }

    public getAfterPercent(): number {
        let afterNormalized = this.after - this.min;
        let maxNormalized = this.max - this.min;
        return (afterNormalized / maxNormalized) * 100;
    }

    public getChange(): number {
        return this.getAfterPercent() - this.getBeforePercent();
    }
}