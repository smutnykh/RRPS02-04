import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class NewsElement extends PageElement {
    constructor(params) {
        super(params);
    }

    build() {
        this.domElement = DOM.tag({
                name: 'div',
                class: 'news', content:
                    [
                        DOM.tag({
                            name: 'div', class: 'photo',
                            content:
                                DOM.tag({
                                    name: 'a',
                                    attributes: {href: this.params.link},
                                    content: DOM.tag(
                                        {
                                            name: 'img', attributes:
                                                {href: this.params.image}
                                        }
                                    )
                                })

                        }),
                        DOM.tag({
                            name: 'div', class: 'content',
                            content: [
                                DOM.tag({
                                    name: 'div', class: 'title', content:
                                        DOM.tag({
                                            name: 'a',
                                            attributes:
                                                {href: this.params.link},
                                            content: this.params.title
                                        })
                                }),
                                DOM.tag({name: 'div', class: 'text', content: 'Text of news'}),
                            ]
                        })
                    ]
            }
        );
    }
}