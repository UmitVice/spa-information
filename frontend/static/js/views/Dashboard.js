import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome</h1>
            <h2>Hi, This is SPA example</h2>
            <p>Single Page Application with JavaScript (No Frameworks)</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Excepturi aliquid nobis sequi, corrupti et ab modi ducimus, dolorum
            animi at quia fugiat, praesentium aut distinctio reiciendis nam a 
            quibusdam tenetur deserunt? Ullam odit officiis fugit aut provident 
            itaque quos esse iusto officia necessitatibus vel nostrum non recusandae
            sequi est eaque asperiores adipisci deserunt ipsam corporis voluptate sunt,
            ad dignissimos. Quia ipsa dicta molestiae provident doloremque, accusamus,
            tempore mollitia tenetur fugit, aspernatur ut voluptatibus similique beatae
            iure aut! Totam minima amet minus quae error qui sequi, tempora rerum quos 
            laudantium doloremque ea iure, repudiandae nisi laborum nobis quia suscipit tenetur odit?
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}