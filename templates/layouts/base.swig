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

<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?1c4e3442cc1a1a3dd3775caff1050f09";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

{%- block scripts %}{% endblock %}
</html>
