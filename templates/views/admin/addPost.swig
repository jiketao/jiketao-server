{% extends "../../layouts/admin.swig" %}

{% block content %} 
<div class="row">
	<div class="col-lg-12">
        <h1 class="page-header">添加文章</h1>
		{% raw %}
		<div id="PostForm">
			<p class="form-horizental">
			  	<label for="" class="text">
			  		文章标题：
				    <input type="text" v-model="title">
			  	</label>
		    </p>			

			<p>
				<label for="">文章图片：</label>	
				<input type="text" v-model="img"/>
				<br>
				<img src={{img}} alt="">
			</p>
			
			<p>
			  	<label for="" class="text">
			  		文章简要描述：<br>
		  		  	<textarea type="text" v-model="content.brief"></textarea>
			  	</label>
			</p>

			<p>
			  	<label for="" class="text">
			  		文章内容：<br>
			  	</label>
	  		  	<textarea type="text" v-model="content.extended" debounce="300" style="width: 100%; height: 303px;"></textarea> 
	  		</p>

		    <div v-html="content.brief | marked"></div>
		    <br>
		    <div v-html="content.extended | marked"></div>

			<p><pre>data: {{$data | json 2}}</pre></p>

			<p>
				<button v-on="click:submit" class="btn btn-primary"> 提交</button>		    	
		    </p>
		</div>
		{% endraw %}	
	</div>
</div>
{% endblock %}


{%- block footer %} 
<script src="/bower_components/marked/marked.min.js"></script>
<script>
	var PostForm = new Vue({
		el: '#PostForm',
		data: {
			title: '商品标题',
			img: '',
			content: {
				brief: '',
				extended: ''
			},
			categories: []
		},
		filters: {
		    marked: marked
		},
		methods: {
			submit: function() {
				var $d = this.$data;
				$.ajax({
					type: 'post',
					url: '/admin/add-post',
					data: {
						title: $d.title,
						img: $d.img,
						content: {
							brief: $d.content.brief,
							extended: $d.content.extended
						}
					},
					success: function(data) {
						console.log('sucess', data);
					}
				});
			}
		}
	})
</script>

{% endblock %}