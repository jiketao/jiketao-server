{% extends "../../layouts/admin.swig" %}

{% block content %} 
<div class="row">
	<div class="col-lg-12">
        <h1 class="page-header">商品管理</h1>

        {% if data.items %}
	    	<script>
	    		var g_config = window.g_config || {};
	    		g_config.items =  {{ JSON.stringify(data) }};
	    	</script>
        {% endif %}
		
		{% raw %}
			<div id="ItemList">
			  <table class="table">
			  	 <thead>
					<tr>
				  	 	<th> 标题 </th>
						<th> 价格 </th>	
						<th> 简介 </th>
						<th> 分类 </th>
						<th> 操作 </th>
					</tr>
			  	 </thead>
			  	 <tbody> 
			  	 	<tr v-repeat="items">
			  	 		<td>{{title}}</td>
			  	 		<td>{{details.price}}</td>
			  	 		<td>{{content.brief}}</td>
			  	 		<td></td>
			  	 		<td> <a href="/admin/update-item/{{uid}}" class="btn btn-sm btn-primary">编辑</a></td>
			  	 	</tr>
			  	 </tbody>
			  </table>
			</div>
		{% endraw %}

    </div>
</div>
{% endblock %}

{%- block footer %} 
<script>

	var demo = new Vue({
		el: '#ItemList',
		data: {
			title: 'itemList',
			items: $.extend({}, g_config.items.items, true)
		}
	});

</script>
{% endblock %}

