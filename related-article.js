var title=$("meta[name='DC.title']").attr("content");$.ajax({type:"GET",url:"https://ir.nctu.edu.tw/related_article/?title="+title,dataType:"jsonp",jsonpCallback:"callback",success:function(t){$('<ul class="related-list">').appendTo("#related-article"),$.each(t,function(t,e){$('<li class="related-list-item"><strong>'+e.school+'</strong>&nbsp;-&nbsp;<a href="'+e.url+'" target="_blank">'+e.title+"&nbsp;/&nbsp;"+e.author+"</a></li>").appendTo("#related-article")}),$("</ul>").appendTo("#related-article")}});
