import {NewsElementCreator} from "./library/creators/NewsElementCreator.js";
import {UserElementCreator} from "./library/creators/UserElementCreator.js";
import {FormElementCreator} from "./library/creators/FormElementCreator.js";


client(new NewsElementCreator(), {
    title: 'Title of news',
    image: 'img/news.png',
    text: 'Text of news',
    link: '#'
});
client(new UserElementCreator(), {
    firstName : 'Ivan',
    lastName : 'Ivanenko',
    avatar : 'img/1.png'
});
client(new UserElementCreator(), {
    firstName : 'Ivan',
    lastName : 'Ivanenko',
    avatar : 'img/1.png'
});
client(new FormElementCreator(), {});

function client(creator, params) {
    creator.createAndAppendTo(document.body, params);
}