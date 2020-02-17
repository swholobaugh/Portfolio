import basictodo from '../assets/projects/01.png'
import todob from '../assets/projects/02.png'
import todot from '../assets/projects/03.png'
import inventory from '../assets/projects/04.png'
import vuetailwind from '../assets/projects/05.png'

const projects = [
    {
        name: 'Basic Todo App',
        description: 'A vanilla HTML, JS, and CSS Todo Application',
        image: basictodo,
        hashtags: ['todo', 'html5', 'css', 'javascript'],
        url:'https://basictodo.projectseth.net'
    },
    {
        name: 'Todo App With Bootstrap',
        description: 'A Todo Application In Vanilla Javascript And Bootstrap',
        image: todob,
        hashtags: ['todo', 'html5', 'javascript', 'bootstrap'],
        url:'https://todob.projectseth.net'
    },
    {
        name: 'Todo App With Tailwind',
        description: 'A Todo Application in Vanilla Javacript And Tailwind',
        image: todot,
        hashtags: ['todo', 'html5','tailwind', 'javascript'],
        url:'https://todot.projectseth.net'
    },
    {
        name: 'Inventory App',
        description: 'A Basic Inventory App in Vue.js',
        image: inventory,
        hashtags: ['todo', 'html5', 'javascript', 'tailwind', 'vuejs'],
        url:'https://inventory.projectseth.net'
    },
    {
        name: 'Todo App With Vue.JS And Tailwind',
        description: 'A Todo Application In Vue.js And Tailwind',
        image: vuetailwind,
        hashtags: ['todo', 'html5', 'javascript', 'vuejs', ''],
        url:'https://vuetailwind.projectseth.net'
    }
];

export default projects