<template>
  <!-- 탭 전환할거임 -->
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <!-- 라우팅을 위한 라우터 링크 설정 -->
        <RouterLink
          class="nav-link"
          active-class="active"
          :to="{ name: 'NestedOne', replace: true }"
          >Nested One</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          :to="{ name: 'NestedTwo', replace: true }"
          >Nested Two</RouterLink
        >
      </li>
    </ul>
    <hr class="my-4" />
    <!-- 중첩라우터이용 -->
    <RouterView></RouterView>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
