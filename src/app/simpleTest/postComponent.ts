export class postComponent {
    totalLikes: number;

    public like() {
        this.totalLikes++
    }

    public dislike() {
        if (this.totalLikes)
            this.totalLikes--
    }

}