import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <h3>You are viewing the posts!</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id assumenda culpa recusandae quae ullam quas praesentium quasi ab possimus? Molestiae.
            </p>
        `;
    }
}