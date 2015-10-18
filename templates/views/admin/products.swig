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
						<th>ID</th>
				  	 	<th> 标题 </th>
						<th> 价格 </th>
						<th> 简介 </th>
						<th> 分类 </th>
						<th> 操作 </th>
					</tr>
			  	 </thead>
			  	 <tbody>
			  	 	<tr v-repeat="items">
			  	 		<td>{{uid}}</td>
			  	 		<td><a target="_blank" href="/products/{{id}}">{{title}}</a></td>
			  	 		<td>{{details.price}}</td>
			  	 		<td>{{content.brief}}</td>
			  	 		<td></td>
			  	 		<td> <a href="/admin/product/{{uid}}" class="btn btn-sm btn-primary">编辑</a></td>
			  	 		<td> <a href="#" v-on="click: deleteProduct($event, uid, $index)">删除</a></td>
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

	g_config.items.items.forEach(function(item) {
		item.id = item._id;
	});

	var demo = new Vue({
		el: '#ItemList',
		data: {
			title: 'itemList',
			items: $.extend([], g_config.items.items, true)
		},
		methods: {
			deleteProduct: function(event, uid, i) {
				if (!confirm("确定删除？")) return;
				var self = this;
				event.preventDefault();
				$.ajax({
					url: "/products/" + uid,
					type: "DELETE",
					success: function() {
						self.$data.items.splice(i, 1);
					},
					error: function(data) {
						alert("删除失败！" + data.msg);
					}
				})
			}
		}
	});

</script>
{% endblock %}
