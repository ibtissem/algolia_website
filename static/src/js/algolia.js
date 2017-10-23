var search = instantsearch({
  // Replace with your own values
  appId: '7AVE2BUKJR',
  apiKey: 'f4ca8b111c20744362bfa3782cbb581e', // search only API key, no ADMIN key
  indexName: 'bloopark',
  urlSync: true
});
var search2 = instantsearch({
  // Replace with your own values
  appId: '7AVE2BUKJR',
  apiKey: 'f4ca8b111c20744362bfa3782cbb581e', // OK bb
  indexName: 'bloopark',
  urlSync: true
});

 var hitTemplate2 = '<article class="hit">' + 
      '<div class="product-desc-wrapper">' +
      '<div class="hit-image"><img src="data:image/png;base64,{{image_product}}" alt="{{name_product}}"> </div>' +
        '<div class="product-name">{{{_highlightResult.name_product.value}}}</div>' + 
        '<div class="product-price">{{description_product}}</div>' + 
      '</div>' +
  '</article>';

var hitTemplate = '<article class="hit">' + 
      '<div class="product-desc-wrapper">' +
      '<div class="hit-image"><img src="data:image/png;base64,{{image_product}}" alt="{{name_product}}"> </div>' +
        '<div class="product-name">{{{_highlightResult.name_product.value}}}</div>' + 
        '<div class="product-price">{{description_product}}</div>' + 
      '</div>' +
  '</article>';
  
var noResultsTemplate =
  '<div class="text-center">Aucun résultat trouvé correspondant <strong>{{query}}</strong>.</div>';

var menuTemplate =
  '<a href="javascript:void(0);" class="facet-item {{#isRefined}}active{{/isRefined}}"><span class="facet-name"><i class="fa fa-angle-right"></i> {{name}}</span class="facet-name"></a>';

var facetTemplateCheckbox =
  '<a href="javascript:void(0);" class="facet-item">' +
    '<input type="checkbox" class="{{cssClasses.checkbox}}" value="{{name}}" {{#isRefined}}checked{{/isRefined}} />{{name}}' +
    '<span class="facet-count">({{count}})</span>' +
  '</a>';
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
//     hitsPerPage: 10,
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate
    }
  })
);

search2.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search2.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
//     hitsPerPage: 10,
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate2
    }
  })
);
// search.addWidget(
//   instantsearch.widgets.pagination({
//     container: '#pagination'
//   })
// );

search.start();
search2.start();
    
 $('#search_header').keyup(function(){
//         $(".categ").parent(".ais-hits--item").addClass("categorie");
         $(".main_algolia").css("display","block");
         });
//  $('#search_header').focusout(function(){
//          $(".main_algolia").css("display","none");
//          });

