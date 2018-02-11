//
<scirpt id='timeline-template' type='text/x-handlebars-template'>
  {{#each tweetlist}}
    {{> tweet}}
  {{/each}}
</script>
	
//
Handlebars.registerPartial('tweet', $('#tweet-partial').html);

//
<script id='' type=''>
  <div class='tweet'>
    <h2>{{username}}</h2>
    <div class='text'>{{text}}</div>
  </div>
</script>




