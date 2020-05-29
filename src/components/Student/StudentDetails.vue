<template>
  <div>
    <div class="well">
      <div class="row">
        <div class="col-md-4">
          <strong>Student ID:</strong>
        </div>
        <div class="col-md-4">
          {{ student.pkstudentId }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <strong>Index number:</strong>
        </div>
        <div class="col-md-4">
          {{ student.indexNumber }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <strong>First name:</strong>
        </div>
        <div class="col-md-4">
          {{ student.firstName }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <strong>Last name:</strong>
        </div>
        <div class="col-md-4">
          {{ student.lastName }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <strong>Year:</strong>
        </div>
        <div class="col-md-4">
          {{ student.year }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <strong>Status:</strong>
        </div>
        <div class="col-md-4">
          {{ student.studentStatus['statusName'] }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <strong>Courses:</strong>
        </div>
        <div class="col-md-4">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for='course in student.coursesStudents'>
              {{course.course['courseName']}}
            </li>
          </ul>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import StudentService from '@/api-services/student.service';

export default {
  name: 'StudentDetails',
  data() {
    return {
      student: {}
    };
  },
  created() {
    StudentService.get(this.$router.currentRoute.params.id).then((response) => {
      this.student = response.data;
    });
  }
};
</script>
