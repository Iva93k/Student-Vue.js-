<template>
  <tr>
    <td>{{ course.courseName }}</td>
  </tr>
</template>
<script>
export default {
  name: 'CourseListRow',
  props: [ 'course' ]
};
</script>
