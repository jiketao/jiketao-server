{% extends "../../layouts/admin.swig" %}

{% block content %}
<div class="row">
	<div class="col-lg-12">
    <h1 class="page-header">添加商品</h1>
		{% include "./productForm.swig" %}
  </div>
</div>
{% endblock %}

{%- block footer %}
<script>

	var demo = new Vue({
		el: '#ItemForm',
		data: {
			title: '商品标题',
			details: {
				price: '0',
				priceRange: {
					max: '0',
					min: '0'
				},
				picUrl: ''
			},
			content: {
				brief: '默认商品简要描述',
				extended: '默认商品扩展描述'
			}
		},
		created: function() {
			console.log('created hook');
		},
		methods: {
			submit: function() {
				console.log(this.$data, this);
				console.log(this.$data.title);
				var $d = this.$data;
				$.ajax({
					type: 'post',
					url: '/admin/product/new',
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
					},
					success: function(data) {
						window.location.href = "/admin/products";
					}
				});
			}
		}
	});

</script>
{% endblock %}
