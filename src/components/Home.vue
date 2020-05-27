<template>
  <div>
    <b-row>
      <b-col md="2"
             offset-md="10">
        <a href="#">Create student</a>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Index number</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Year</th>
                <th>Status Id</th>
                <th>Status</th>
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <student-list-row
                v-for="student in students"
                :key="student.pkstudentId"
                :student="student"
                @details="detailsStudent"
                @update="updateStudent"
                @delete="deleteStudent"/>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import StudentService from '@/api-services/student.service';
  import StudentListRow from '@/components/Student/StudentListRow';

  export default {
    name: 'Home',
    components: {
      StudentListRow
    },
    data() {
      return {
        students: []
      };
    },
    created() {
      StudentService.getAll().then((response) => {
        this.students = response.data;
      });
    },
    methods: {
      detailsStudent(pkstudentId) {
        console.log('details', pkstudentId);
      },
      updateStudent(pkstudentId) {
        console.log('update', pkstudentId);
      },
      deleteStudent(pkstudentId) {
        console.log('delete', pkstudentId);
      }
    }
  };
</script>

