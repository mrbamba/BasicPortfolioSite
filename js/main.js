'use strict'
console.log('Starting up');

function onInit(){
    renderPortfolio()
}


function renderPortfolio() {
    var strHtml = []
    var projects=getProjects()
    projects.forEach(function (proj) {
        strHtml.push(`
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${proj.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="${proj.desc}">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`)
    })
    document.querySelector('.main-portfolio').innerHTML=strHtml.join('')
}

function renderModal(id){
    // var strHtml=[];
    var project=getProjectById(id);
    document.querySelector('.modal-body .proj-name').innerText=project.name;
    document.querySelector('.modal-body .item-intro').innerText=project.title;
    document.querySelector('.modal-body img').src=`img/portfolio/${project.id}-full.jpg`;
    document.querySelector('.modal-body .proj-description').innerText=project.desc;
    document.querySelector('.modal-body .published-at').innerText=project.publishedAt
    document.querySelector('.modal-body .url').innerHTML=`<a href=${project.url}>Project Link</a>`
    document.querySelector('.modal-body .git-url').innerHTML=`<a href=${project.gitUrl}>Git</a>`
    
}

{/* <h2 class="proj-name">Project Name</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                <p class="proj-description">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li class="published-at">Date: January 2017</li>
                  <li class="url">Client: Threads</li>
                  <li class="git-url">Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button> */}