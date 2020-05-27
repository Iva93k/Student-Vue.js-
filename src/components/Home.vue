<template>
  <div>
    <b-row>
      <b-col md="2"
             offset-md="10">
        <router-link :to="{ name: 'StudentCreate' }">Create student</router-link>
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
                @delete="deleteStudent" />
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-modal ref="deleteConfirmModal"
             title="Confirm your action"
             @ok="onDeleteConfirm"
             @hide="onDeleteModalHide">
      <p class="my-4">Are you sure you want to delete this student?</p>
    </b-modal>
    <b-modal ref="alertModal"
             :title="alertModalTitle"
             :ok-only="true">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
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
        students: [],
        selectedStudentId: null,
        alertModalTitle: '',
        alertModalContent: ''
      };
    },
    created() {
      this.fetchStudents();
    },
    methods: {
      detailsStudent(pkstudentId) {
        this.$router.push({ name: 'StudentDetails', params: { id: pkstudentId } });
      },
      updateStudent(pkstudentId) {
        console.log('update', pkstudentId);
      },
      deleteStudent(pkstudentId) {
        this.selectedStudentId = pkstudentId;
        this.$refs.deleteConfirmModal.show();
      },
      fetchStudents() {
        StudentService.getAll().then((response) => {
          this.students = response.data;
        });
      },
      onDeleteConfirm() {
        StudentService.delete(this.selectedStudentId).then(() => {
          this.alertModalTitle = 'Successfully';
          this.alertModalContent = 'Successfully deleted Student';
          this.$refs.alertModal.show();
          this.fetchStudents();
        }).catch((error) => {
          this.alertModalTitle = 'Error';
          this.alertModalContent = error.response.data;
          this.$refs.alertModal.show();
        });
      },
      onDeleteModalHide() {
        this.selectedStudentId = null;
      }
    }
  };
</script>

