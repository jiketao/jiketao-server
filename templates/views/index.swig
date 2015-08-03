{% extends "../layouts/default.swig" %}

{% block content %}
	<div class="container">
		<div class="jumbotron">
			<img src="/images/logo.svg" width="160">
			<h1>极客淘</h1>
			<p>keystone 文档： <a href="http://keystonejs.com/guide" target="_blank">Getting Started</a> </p>
			<hr>
			{% if user and user.canAccessKeystone %}
				<p>
					<a href="/admin" class="btn btn-lg btn-primary">Open the Admin UI</a>
				</p>
			{% endif %}
			<hr>
		</div>
	</div>
{% endblock %}
