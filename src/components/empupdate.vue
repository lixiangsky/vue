<template>
  <div >  
    <form class="form-horizontal" role="form">
				<div class="form-group">
					<label for="firstname" class="col-sm-1 control-label">姓名</label>
					<div class="col-sm-10">
						<input type="text" class="form-control"  value="emp.name" id="name" v-model="emp.name" placeholder="请输入姓名">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-1 control-label">年龄</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" value="emp.age" id="age" v-model="emp.age" placeholder="请输入年龄">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-1 control-label">性别</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" value="emp.sex" id="sex" v-model="emp.sex" placeholder="请输入性别">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-10 col-sm-offset-1">
						<button type="button" class="btn btn-default" v-on:click="update" >修改</button>
					</div>
				</div>
			</form>
  </div>
</template>

<script>
export default {
  name: 'empupdate',
  data () {
    return {
      emp:{
      	eid:0,
      	name:'',
      	age:'',
      	sex:''
      }
    }
  },
  created:function(){
  	this.info();
  },
  
  methods:{
  	info:function(){
  		var eid = this.$route.query.eid;
  		this.$http.get("http://localhost:8086/getEmpById",{
  			params:{
  				eid:eid
  			}
  		}).then(function(result){
  			this.emp.name=result.body.name;
  			this.emp.age=result.body.age;
  			this.emp.sex=result.body.sex;
  			this.emp.eid=result.body.eid;
  			
  		},function(error){
  			alert("加载数据失败");			
  		}) 		
  	},  	
  	update:function(){
  		this.$http.put("http://localhost:8086/emp",{
  			
  			eid:this.emp.eid,
  			name:this.emp.name,
  			age:this.emp.age,
  			sex:this.emp.sex
  		}).then(
  			function(){
  				alert("修改雇员成功");
  				
//				this.$router.push({
//					path:'/'
//				})
					this.$router.go(-1);
  			},
  			function(){
  				alert("任务失败");
  				
  			}  			
  		) 		
  	}
  
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
