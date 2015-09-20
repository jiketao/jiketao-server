{% extends "../layouts/base.swig" %}

{% block styles %}
<link rel="stylesheet" type="text/css" href="{{CDN_PATH}}/{{CLIENT_VERSION}}/styles/survey.css">
{% endblock %}

{% block scripts %}
<script src="{{CDN_PATH}}/{{CLIENT_VERSION}}/lib/masonry.pkgd.min.js"></script>
<script type="text/javascript">
var survey = {{JSON.stringify(data.survey)}};
survey.data = JSON.parse(survey.data);
</script>
<script src="{{CDN_PATH}}/{{CLIENT_VERSION}}/scripts/survey.js"></script>
{% endblock %}
