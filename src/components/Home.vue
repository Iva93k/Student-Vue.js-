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
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in students"
                    :key="student.pkstudentId">
                  <td>{{ student.pkstudentId }}</td>
                  <td>{{ student.indexNumber }}</td>
                  <td>{{ student.firstName }}</td>
                  <td>{{ student.lastName }}</td>
                  <td>{{ student.year }}</td>
                  <td>{{ student.studentStatusId }}</td>
                  <td>{{ student.studentStatus }}</td>
                  <td>
                    <b-button variant="default">Details</b-button>
                  </td>
                  <td>
                    <b-button variant="success">Update</b-button>
                  </td>
                  <td>
                    <b-button variant="danger">Delete</b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>
    </div>
  </template>
  <script>
    import StudentService from '@/api-services/student.service';
    export default {
      name: 'Home',
      data() {
        return {
          students: []
        };
      },
      created() {
        StudentService.getAll().then((response) => {
          this.students = response.data;
        });
      }
    };
  </script>
  <style scoped>
  </style>
