{% extends "../../layouts/admin.swig" %}

{% block content %}
  <div id="app">
    {% raw %}
    <ul>
      <li v-repeat="items">
        <a href="/surveys/{{id}}">{{$index}}: {{title}}</a>
        <button class="delete-btn" v-on="click: delete(this.$data)">删除</button>
      </li>
    </ul>
    {% endraw %}
  </div>
{% endblock %}

{%- block footer %}
<script>

var data = {{JSON.stringify(data.surveys)}};
data.forEach(function(item) {
  item.id = item._id;
});

window.addEventListener("load", function() {
  console.log(data);
  var app = new Vue({
    el: "#app",
    data: {items: data},
    methods: {
      delete: function(data) {
        console.log(JSON.stringify(data));
      }
    }
  });
})
</script>
{% endblock %}
