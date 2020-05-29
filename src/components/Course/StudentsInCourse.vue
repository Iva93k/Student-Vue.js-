<template>
  <div>
    <div class="well">
      <div class="row">
        <div class="col-md-12">
          <strong>Students:</strong>
        </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for='student in course.coursesStudents'>
                {{student.student['firstName'] + ' ' + student.student['lastName']}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import CourseService from '@/api-services/course.service';

export default {
  name: 'StudentsInCourse',
  data() {
    return {
      course: {}
    };
  },
  created() {
    CourseService.get(this.$router.currentRoute.params.id).then((response) => {
      this.course = response.data;
    });
  }
};
</script>
