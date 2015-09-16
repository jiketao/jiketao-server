<!doctype html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <link rel="stylesheet" type="text/css" href="{{CDN_PATH}}/{{CLIENT_VERSION}}/assets/font-awesome-4.4.0/css/font-awesome.min.css">
  {%- block styles %}{% endblock %}
  <script src="{{CDN_PATH}}/{{CLIENT_VERSION}}/lib/react.min.js"></script>
</head>
<body>
  <div id="wrapper">
    {%- block content %}{% endblock %}
  </div>
</body>
{%- block scripts %}{% endblock %}
</html>
