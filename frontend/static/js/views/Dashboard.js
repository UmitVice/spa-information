import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome</h1>
            <h2>I'm Ümit Viçe and this is my software portfolio site</h2>
            <img src="../images/volcano.jpg" alt="Mountain">
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}