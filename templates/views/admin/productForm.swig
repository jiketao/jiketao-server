<style>
textarea {
  width: 500px;
  height: 160px;
}
</style>
{% raw %}
<div id="ItemForm">
  <!-- text -->
    <p class="form-horizental">
	  	<label for="" class="text">
	  		商品标题：
		    <input type="text" v-model="title">
	  	</label>
    </p>

	<!-- 价格 -->
	<p>
	  	<label for="" class="text">
	  		商品价格：
  		  	<input type="text" v-model="details.price">
	  	</label>
	</p>

	<p class="form-inline">
		<label for="">价格区间：</label>
		<input type="text" class="input-small" v-model="details.priceRange.min" placeholder="min">
		<input type="text" class="input-small" v-model="details.priceRange.max" placeholder="max">
	</p>


	<p>
		<label for="">商品图片（一行一个图片链接）：</label><br>
		<textarea v-model="details.picUrl"></textarea>
	</p>

	<p>
	  	<label for="" class="text">
	  		商品规格参数（格式：参数名-参数值，一行一个）<br>
  		  	<textarea type="text" v-model="details.ext"></textarea>
	  	</label>
	</p>


	<p>
	  	<label for="" class="text">
	  		商品简要描述：<br>
  		  	<textarea type="text" v-model="content.brief"></textarea>
	  	</label>
	</p>

	<p>
	  	<label for="" class="text">
	  		商品简完整描述：<br>
  		  	<textarea type="text" v-model="content.extended"></textarea>
	  	</label>
	</p>
    <p><pre>data: {{$data | json 2}}</pre></p>

    <p>
		<button v-on="click:submit" class="btn btn-primary"> 提交</button>
    </p>
</div>
{% endraw %}
