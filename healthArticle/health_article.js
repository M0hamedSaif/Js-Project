var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');
        
        // Clear existing articles
        articlesDiv.innerHTML = '';

        // Check if articles exist and is an array
        if (Array.isArray(articles)) {
            articles.forEach(function(article) {
                // Create article container
                var articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                
                // Create and append title
                var title = document.createElement('h2');
                title.textContent = article.title;
                articleDiv.appendChild(title);
                
                // Create and append description
                var description = document.createElement('p');
                description.textContent = article.description;
                articleDiv.appendChild(description);
                
                // Create and append ways to achieve header and list
                var waysHeader = document.createElement('h3');
                waysHeader.textContent = 'Ways to Achieve:';
                articleDiv.appendChild(waysHeader);
                
                var waysList = document.createElement('ul');
                article.ways_to_achieve.forEach(function(way) {
                    var listItem = document.createElement('li');
                    listItem.textContent = way;
                    waysList.appendChild(listItem);
                });
                articleDiv.appendChild(waysList);
                
                // Create and append benefits header and list
                var benefitsHeader = document.createElement('h3');
                benefitsHeader.textContent = 'Benefits:';
                articleDiv.appendChild(benefitsHeader);
                
                var benefitsList = document.createElement('ul');
                article.benefits.forEach(function(benefit) {
                    var listItem = document.createElement('li');
                    listItem.textContent = benefit;
                    benefitsList.appendChild(listItem);
                });
                articleDiv.appendChild(benefitsList);
                
                // Append article to articles container
                articlesDiv.appendChild(articleDiv);
            });
        } else {
            console.error('Invalid articles structure:', articles);
        }
    } else {
        console.error('Failed to load articles:', xhr.statusText);
    }
};

xhr.onerror = function() {
    console.error('Request failed');
};

xhr.send();
