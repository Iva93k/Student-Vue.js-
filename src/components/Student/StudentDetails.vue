<template>
  <div>
    <div class="well">
      <div class="row">
        <div class="col-md-3">
          <strong>Student ID:</strong>
        </div>
        <div class="col-md-3">
          {{ student.pkstudentId }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>Index number:</strong>
        </div>
        <div class="col-md-3">
          {{ student.indexNumber }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>First name:</strong>
        </div>
        <div class="col-md-3">
          {{ student.firstName }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>Last name:</strong>
        </div>
        <div class="col-md-3">
          {{ student.lastName }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>Year:</strong>
        </div>
        <div class="col-md-3">
          {{ student.year }}
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
