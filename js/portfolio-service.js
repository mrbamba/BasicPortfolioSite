'use strict'
var gProjects = [
    {
        id: "powerdispatch",
        name: "PowerDispatch",
        title: "Dispatching power at your fingertips",
        desc: "Professional Field service management software.",
        url: "https://www.powerdispatch.com",
        gitUrl:"https://www.powerdispatch.com",
        publishedAt: 1199145600,
        labels: ["B2B", "field services software", "messages", "reports", "call recording"],
    }
    , 
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "Beware of the mines!",
        desc: "Classic numbers based game where you use deduction to figure out and mark where the mines are.",
        url: "https://mrbamba.github.io/MineSweeper/",
        gitUrl:"https://github.com/mrbamba/MineSweeper",
        publishedAt: 1589812150,
        labels: ["recurssion", "mouse events"],
    }
    ,
    {
        id: "treecket",
        name: "Treecket",
        title: "Kanban board!",
        desc: "Example of a kanban board with drag and drop, full edit, etc!",
        url: "https://treecket.herokuapp.com/#/",
        gitUrl:"https://github.com/mrbamba/treecket",
        publishedAt: 1589812150,
        labels: ["recurssion", "mouse events"],
    }
    ,
    {
        id: "touch-nums",
        name: "Touch the Nums",
        title: "Click quick and in order to win!",
        desc: "Quick time based clicking game, click the numbers in order, quick!",
        url: "https://mrbamba.github.io/touch-nums/",
        gitUrl:"https://github.com/mrbamba/touch-nums",
        publishedAt: 1589812150,
        labels: ["numbers", "clicking events"],
    },
    {
        id: "ball-board",
        name: "Ball Board",
        title: "catch the balls with your keyboard arrows",
        desc: "Quick game where you have to catch the balls",
        url: "https://mrbamba.github.io/ball-board/",
        gitUrl:"https://github.com/mrbamba/ball-board",
        publishedAt: 1589812150,
        labels: ["balls", "clicking events", "keyboard events"],
    },
    {
        id: "bookshop",
        name: "Bookshop",
        title: "Manage your bookshop!",
        desc: "Simple representation of a book shop admin panel.",
        url: "https://mrbamba.github.io/book-shop/",
        gitUrl:"https://github.com/mrbamba/book-shop",
        publishedAt: 1589812150,
        labels: ["bookshop", "admin interface", "data management"],
    },
    {
        id: "appsus",
        name: "Appsus",
        title: "Email, Notes and bookstore concept!",
        desc: "Created an example of email, notes and bookstore.",
        url: "https://mrbamba.github.io/appsus/#/email/inbox",
        gitUrl:"https://github.com/mrbamba/appsus",
        publishedAt: 1589812150,
        labels: ["appsus", "gmail", "notes", "store"],
    },
    {
        id: "mr-bitcoin",
        name: "Mr Bitcoin",
        title: "Bitcoin wallet concept with current BTC ETH price API!",
        desc: "Created an example of a bitcoin wallet.",
        url: "https://mrbamba.github.io/mrbitcoin/",
        gitUrl:"https://github.com/mrbamba/mrbitcoin",
        publishedAt: 1589812150,
        labels: ["bitcoin", "eth", "btc", "crypto wallet"],
    },
    {
        id: "memed",
        name: "Memed - Meme Generator",
        title: "Meme generator tool, fully works, try it!",
        desc: "Created an example of a meme generator website.",
        url: "https://mrbamba.github.io/meme-generator/",
        gitUrl:"https://github.com/mrbamba/meme-generator",
        publishedAt: 1589812150,
        labels: ["meme", "memed", "create meme", "canvas"],
    },
    {
        id: "design-to-live-page",
        name: "Design to live page project",
        title: "From design to full html page",
        desc: "Created a website after being given design of website, converted image to code.",
        url: "https://mrbamba.github.io/Design-To-Live-Page/",
        gitUrl:"https://github.com/mrbamba/design-To-Live-Page",
        publishedAt: 1589812150,
        labels: ["meme", "memed", "create meme", "canvas"],
    },
    {
        id: "github",
        name: "My other projects",
        title: "Check out my other github projects here",
        desc: "My full github public repositorym check it out.",
        url: "https://github.com/mrbamba",
        gitUrl:"https://github.com/mrbamba?tab=repositories",
        publishedAt: 1589812150,
        labels: ["meme", "memed", "create meme", "canvas"],
    }
]

function getProjects(){
    return gProjects;
}
function getProjectById(id){
    return gProjects.find(proj => proj.id === id);
}
