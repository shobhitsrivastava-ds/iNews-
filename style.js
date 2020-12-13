console.log("[MESSAGE] : Welcome to the site!!");


mynews= document.getElementById('mynews_parent');
let api_key= "c12dfa04f8464ad4910e854ff2af53d1";
const xhr= new XMLHttpRequest();

xhr.open('GET', 'http://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=d093053d72bc40248998159804e0e67d', true);

console.log(api_key);
xhr.onload= function()
{
	if(this.status==200)
	{ 
		let json= JSON.parse(this.responseText);
		let articles= json.articles;
		let newsHTML= "";
		articles.forEach(function(element, index)
		{
			let new_s= 

			`<div class="card">
    <div class="card-header" id="heading${index}">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
          <b>Breaking News ${index+1}</b> ${element["title"]}
        </button> 
      </h2>
    </div>

    <div id="collapse${index}" class="collapse hide" aria-labelledby="heading${index}" data-parent="#mynews_parent">
      <div class="card-body">
        ${element["description"]}. <a href="${element["url"]}" target= "_blank">Read More Here.</a>
      </div>
    </div>
  </div>
</div>`;
newsHTML+=new_s;
		});
		mynews.innerHTM= newsHTML;
	}
	else
	{
		console.log("Some error occured");
	}
}


xhr.send();

 
