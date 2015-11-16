{% extends "../layouts/base.swig" %}

{% block styles %}
<link rel="stylesheet" type="text/css" href="{{CDN_PATH}}/{{CLIENT_VERSION}}/styles/product.css">
{% endblock %}

{% block scripts %}
<script type="text/javascript">
var post = {{JSON.stringify(data.post)}};
</script>
<script src="{{CDN_PATH}}/{{CLIENT_VERSION}}/scripts/post.js"></script>
{% endblock %}
