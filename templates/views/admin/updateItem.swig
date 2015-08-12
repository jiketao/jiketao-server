{% extends "../../layouts/admin.swig" %}

{% block content %} 
<div class="row">
	<div class="col-lg-12">
        <h1 class="page-header">商品</h1>
        {% if data.item %}
	    	<script>
	    		var g_config = window.g_config || {};
	    		g_config.data =  {{ JSON.stringify(data) }};
	    	</script>
        {% endif %}
		{% raw %}
		<div id="ItemForm">
		  <!-- text -->
		    <p class="form-horizental">
			  	<label for="" class="text">
			  		商品标题：
				    <input type="text" v-model="title">
			  	</label>
		    </p>

			<!-- 价格 -->
			<p>
			  	<label for="" class="text">
			  		商品价格：
		  		  	<input type="text" v-model="details.price">
			  	</label>
			</p>

			<p class="form-inline">
				<label for="">价格区间：</label>
				<input type="text" class="input-small" v-model="details.priceRange.min" placeholder="min">
				<input type="text" class="input-small" v-model="details.priceRange.max" placeholder="max">
			</p>
			

			<p>
				<label for="">商品图片：</label>	
				<input type="text" v-model="details.picUrl"/>
				<br>
				<img src={{details.picUrl}} alt="">
			</p>

			<p>
			  	<label for="" class="text">
			  		商品简要描述：<br>
		  		  	<textarea type="text" v-model="content.brief"></textarea>
			  	</label>
			</p>

			<p>
			  	<label for="" class="text">
			  		商品简完整描述：<br>
		  		  	<textarea type="text" v-model="content.extended"></textarea>
			  	</label>
			</p>
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
<script>

	var demo = new Vue({
		el: '#ItemForm',
		data: g_config.data.item,
		created: function() {
			console.log('created hook');
		},
		methods: {
			submit: function() {
				var $d = this.$data;
				$.ajax({
					type: 'post',
					url: '/admin/update-item',
					data: {
						uid: $d.uid,
						title: $d.title,
						details: {
							price: $d.details.price,
							priceRange: {
								max: $d.details.priceRange.max,
								min: $d.details.priceRange.min
							},
							picUrl: $d.details.picUrl
						},
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
	});

</script>
{% endblock %}

