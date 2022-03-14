<template>
  <div>
    <p v-for="(image,index) of images" :key="index">
    <img v-lazy="image">11<br>    
    </p>
  </div>
</template>
<style scoped>
img{
  display: block;
  width: 100%;
}
</style>
<script>
export default {  
  data(){
    return {
      images:[
        require('../../assets/images/590x470.jpg'),
        require('../../assets/images/590x47011.jpg'),
        require('../../assets/images/739d9b28bc8b5587.jpg'),
        require('../../assets/images/2231df5a1de265c0.jpg'),
        require('../../assets/images/418665f516b1a85b.jpg'),
      ]
    }
  }
}
</script>