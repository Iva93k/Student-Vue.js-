<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="createCourse">
        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Course name:"
                      for="courseName">
          <b-col :md="5">
            <b-input id="courseName"
                     v-model="formData.courseName"
                     maxlength="50"
                     required />
          </b-col>
        </b-form-group>
        <b-col :md="5"
               offset="4">
          <b-button type="submit"
                    variant="info">Save</b-button>
          <b-button :to="{ name: 'CoursesList' }"
                    variant="danger">Cancel</b-button>
        </b-col>
      </b-form>
    </div>
    <b-modal ref="alertModal"
             :title="alertModalTitle"
             :ok-only="true"
             @ok="onAlertModalOkClick">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </b-container>
</template>
<script>
  import CourseService from '@/api-services/course.service';
     
  export default {
    name: 'CourseCreate',
    data() {
      return {
        formData: {
          courseName: ''
        },
        alertModalTitle: '',
        alertModalContent: '',
        isSuccessfully: false,
      };
    },
    methods: {
      createCourse() {
        CourseService.create(this.formData).then(() => {
          this.isSuccessfully = true;
          this.alertModalTitle = 'Successfully';
          this.alertModalContent = 'Successfully created Course';
          this.$refs.alertModal.show();

          this.formData = {
            courseName: ''
          };
        }).catch((error) => {
          this.isSuccessfully = false;
          this.alertModalTitle = 'Error';
          this.alertModalContent = error.response.data;
          this.$refs.alertModal.show();
        });
      },
      onAlertModalOkClick() {
        if (this.isSuccessfully) {
          this.$router.push({ name: 'CoursesList' });
        }
      }
    }
  };
</script>
<style>
  .form-wrapper {
    margin-top: 20px;
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  }
</style>

