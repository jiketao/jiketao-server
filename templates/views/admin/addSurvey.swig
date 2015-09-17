{% extends "../../layouts/admin.swig" %}

{% block content %}
<form action="/admin/surveys/new" method="POST">
  <div>
    <label>调查问卷标题：<input name="title" type="text"  enctype="multipart/form-data"> </label>
  </div>
  <div>
    <label>Excel上传：<input name="result" type="file"> </label>
  </div>
  <hr>
  <div>
    <button type="submit">提交！Don't be afraid!</button>
  </div>
</form>
{% endblock %}
