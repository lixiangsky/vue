<template>
  <div >  
  	<!--<form  enctype="multipart/form-data" method="post" action="http://localhost:8086/upload">
    <input type="file" name="file" /><br />
    <input type="submit" value="提交" />
   </form>-->
   		啦
   <input type="file" name="file" />
   <input type="button" value="提交" v-on:click="upload"/>
   
  </div>
</template>

<script>
export default {
  name: 'uploadtest',
  methods:{
  	upload:function(){
  		
  		var formdata = new FormData();
  		formdata.append("file",document.querySelector("input[name=file]").files[0]);
  		
  		var config ={
  			headers:{
  				"Content-type":"multipart/form-data",
  				
  			}
  		}
  		
  		this.$http.post("http://localhost:8086/upload",formdata,config).then(
  			
  			function(result){
  				console.log(result);
  				console.log(result.bodyText);
  				alert("文件上传成功");
  				//刷新一下页面
  				this.$router.go(0)
  			},function(error){
  				console.log(error.body.message);//打印错误详细信息
  			}
  		);
  	
  	}
  }
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
