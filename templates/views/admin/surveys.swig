{% extends "../../layouts/admin.swig" %}

{% block content %}
  <div id="app">
    {% raw %}
    <ul>
      <li v-repeat="items">
        <a href="/surveys/{{id}}">{{$index}}: {{title}}</a>
        <button class="delete-btn" v-on="click: delete(this.$data, $index)">删除</button>
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

var isDeleting = false;
window.addEventListener("load", function() {
  console.log(data);
  var app = new Vue({
    el: "#app",
    data: {items: data},
    methods: {
      delete: function(data, index) {
        if (!confirm("确认删除？")) return false;
        if (isDeleting) return alert("上次请求还没结束呢");
        isDeleting = true;
        $.ajax({
          url: "/admin/surveys/" + data._id,
          type: "DELETE",
          success: function(data) {
            if (data.result === "fail") {
              alert("删除失败" + data.msg);
            } else {
              alert("删除成功")
            }
            isDeleting = false;
            app.items.splice(index, 1);
          }
        })
      }
    }
  });
})
</script>
{% endblock %}
