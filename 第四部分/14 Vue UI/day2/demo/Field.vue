<template>
  <div>
    <mt-field
      type="text"
      label="用户名"
      :attr="{ maxlength: '12' }"
      placeholder="请输入用户名"
      state="success"
      disableClear>
    </mt-field>

    <mt-field
      type="password"
      label="密码"
      :attr="{ maxlength: '12', autocomplete: 'off' }"
      placeholder="请输入密码"
      state="warning"
     
    >
    </mt-field>

    <mt-field
      type="password"
      label="确认密码"
      :attr="{ maxlength: '12', autocomplete: 'off' }"
      placeholder="请再次输入密码"
      state="error">
    </mt-field>
  </div>
</template>