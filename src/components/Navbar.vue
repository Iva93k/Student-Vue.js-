<template>
  <b-navbar toggleable="md"
            type="dark"
            variant="success">
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'Home' }">STUDENT LIST</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'CoursesList' }">Courses</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
};
</script>
