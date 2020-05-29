<template>
  <tr @click="onCourseClick">
    <td>{{ course.courseName }}</td>
  </tr>
</template>
<script>
export default {
  name: 'CourseListRow',
    props: ['course'],
    methods: {
      onCourseClick() {
        this.$emit('course', this.course.pkcourseId);
      }
    }
};
</script>
