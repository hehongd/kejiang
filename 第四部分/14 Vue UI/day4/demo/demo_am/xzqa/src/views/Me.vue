<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="个人中心">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 单元格列表开始 -->
    <mt-cell title="个人资料" isLink to="/profile">
        <img src="../assets/images/profile.png" alt="" slot="icon">
    </mt-cell>
    <mt-cell title="我的文章" isLink>
         <img src="../assets/images/document.png" alt="" slot="icon">
    </mt-cell>
    <!-- 单元格列表结束 -->
  </div>
</template>