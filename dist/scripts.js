var pokemonRepository=function(){var t=[],o="https://pokeapi.co/api/v2/pokemon/?limit=150",n=$("ul");function e(o){if("object"!=typeof o)return"Not a valid input";t.push(o)}function i(t){console.log("TCL: showModal -> item",t.imageUrl),$("h5").html(t.name.charAt(0).toUpperCase()+t.name.slice(1));var o=$('<img src="'+t.imageUrl+'">');$("div.pokemon-img").html(o),$("div.pokemon-info").html("Height: "+t.height)}function a(t){pokemonRepository.loadDetails(t).then(function(){return console.log(t),t}).then(function(t){console.log("TCL: showDetails -> item",t),i(t)})}return{add:e,getAll:function(){return t},addListItem:function(t){var o=$("<li></li>");n.append(o);var e=$('<button type="button" id="pokemon-button" class="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">'+t.name+"</button>");o.append(e),e.on("click",function(){a(t)})},showDetails:a,loadList:function(){return $.ajax(o,{dataType:"json"}).then(function(t){return t}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:function(t){var o=t.detailsUrl;return $.ajax(o,{dataType:"json"}).then(function(t){return t}).then(function(o){t.imageUrl=o.sprites.front_default,t.height=o.height,t.weight=o.weight,t.types=Object.keys(o.types)}).catch(function(t){console.error(t)})},showModal:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});