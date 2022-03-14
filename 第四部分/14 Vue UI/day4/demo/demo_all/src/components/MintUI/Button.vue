<template>
  <div>
    <mt-button>普通按钮12</mt-button>
    <mt-button type="primary">主要按钮</mt-button>
    <mt-button type="danger">危险按钮</mt-button>
    <mt-button type="primary" size="small">主要按钮</mt-button>
    <mt-button type="primary" size="large">主要按钮</mt-button>
    <mt-button type="primary" size="large" icon="back">返回</mt-button>
    <mt-button type="primary" size="large" icon="more">更多</mt-button>
    <mt-button type="primary" disabled>禁用按钮</mt-button>
    <mt-button type="primary">主要按钮</mt-button>

    <mt-button type="danger" plain>主要按钮</mt-button>

    <mt-button type="primary">
      <img src="../../assets/images/download.png" slot="icon">    
      自定义图标按钮  
    </mt-button>
  </div>
</template>