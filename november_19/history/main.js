window.onload = () => {
    const Views = {
        home: {
            title: 'Index Page',
            url: './views/home.html',
            content: ''
        },
        contact: {
            title: 'Contact Page',
            url: './views/contact.html',
            content: ''
        },
        portfolio: {
            title: 'Portfolio Page',
            url: './views/portfolio.html',
            content: ''
        },
        aboutus: {
            title: 'About us Page',
            url: './views/aboutus.html',
            content: ''
        },

    }

    const Links = document.querySelectorAll('.menu--item');
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('content');

    

    Links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const url = event.target.attributes['href'].value;
            console.log(url)
            
            const viewData = Views[url.split('.')[0]];
            // viewData.content = 
            console.log(viewData);

            
            fetch(`./views/${url}`)
            .then(data => data.text())
            // .then(data => console.log(data))
            .then(data => {
                viewData.content = data;
                history.pushState(viewData, viewData.title, url);
                renderContent(viewData)
            })
            .catch(err=> console.log(err.message))


        })
    })

    function renderContent(state) {
        if ( state ) {
            document.title = state.title;
            titleElement.innerHTML = state.title;
            contentElement.innerHTML = state.content;
        }
    }

    window.addEventListener('popstate', function(event) {
        renderContent(event.state);
    })

    renderContent(Views.home);
    history.replaceState(Views.home, Views.home.title, '');
}
