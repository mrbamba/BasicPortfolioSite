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
    }
]

function getProjects(){
    return gProjects;
}
function getProjectById(id){
    return gProjects.find(proj => proj.id === id);
}
