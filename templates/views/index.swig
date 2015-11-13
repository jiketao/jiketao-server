{% extends "../layouts/base.swig" %}

{% block content %}
<link rel="stylesheet" type="text/css" href="{{CDN_PATH}}/{{CLIENT_VERSION}}/styles/home.css">
{% endblock %}

{% block scripts %}
<script type="text/javascript">
// var product = {{JSON.stringify(data.product)}};
// console.log(product);
</script>
<script src="{{CDN_PATH}}/{{CLIENT_VERSION}}/scripts/home.js"></script>
{% endblock %}
