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
			{% include "./productForm.swig"%}
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
				$d.details.priceRange = $d.details.priceRange || {};
				$.ajax({
					type: 'post',
					url: '/admin/product/edit',
					data: {
						query: {
							_id: $d._id,
						},
						data: {
							title: $d.title,
							details: {
								price: $d.details.price,
								priceRange: {
									max: $d.details.priceRange.max,
									min: $d.details.priceRange.min
								},
								picUrl: $d.details.picUrl,
								ext: $d.details.ext
							},
							content: {
								brief: $d.content.brief,
								extended: $d.content.extended
							}
						}
					},
					success: function(data) {
						alert('success');
						console.log('sucess', data);
					}
				});
			}
		}
	});

</script>
{% endblock %}
