var bookOne = new Book({name: 'Beginning Backbone', author: 'James Sugrue',
  publishDate: {year: 2018, month: 'December'}});

LibrayView = Backbone.View.extend({
  template: Handlbars.compile($("#library-template").html()),
  render: function(){
    //...
  }
});


render: function(){
  var self = this;
  var output = self.template({'library': self.collection.toJSON()});
  self.$el.append(output);
  return self;
}

//Guide
<h1>{{name}}</h1>

<h1>{{person.name}}</h1>
<p>Birthday: {{person.birthday}}</p>


{{! Name of the person }}
<h1>{{person.name}}</h1>

{{!-- unused expression for now {{name}} --}}

//each
{{#each library}}
<li>
<em>{{name}}</em> by {{author}} published in {{publishDate.year}}
</li>

//elseif
{{#if book.published}}
<p>Book now available</p>
{{else}}
<p>Book coming soon: {{book.publishDate.month}}</p>
{{/if}}

//unless
{{#unless book.published}}
<p>This book is not yet published</p>
{{/unless}}


//with
{{#with person}}
<h1>{{name}}</h1>
<p>Birthday: {{birthday}}</p>
{{/with}}

//log
{{#with person}}
<h1>{{log name}}</h1>
{{/with}}

//
//helper.js
Handlebars.registerHelper('add', function(param1, param2){
  return param1 + param2
});
//helper.html
<p>In 1 years {{name}} will be {{add person.age 1}} years old. <p>




