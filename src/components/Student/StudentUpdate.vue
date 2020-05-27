<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="updateStudent">
        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Index number:"
                      for="indexNumber">
          <b-col :md="5">
            <validation-provider rules="required" v-slot="{ errors }">
              <b-input id="indexNumber"
                       v-model="formData.indexNumber"
                       maxlength="50"
                       required />
              <span>{{ errors[0] }}</span>
            </validation-provider>
          </b-col>
        </b-form-group>

        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="First name:"
                      for="firstName">
          <b-col :md="5">
            <b-input id="firstName"
                     v-model="formData.firstName"
                     maxlength="50"
                     required />
          </b-col>
        </b-form-group>

        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Last name:"
                      for="lastName">
          <b-col :md="5">
            <b-input id="lastName"
                     v-model="formData.lastName"
                     maxlength="50"
                     required />
          </b-col>
        </b-form-group>
        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Year:"
                      for="year">
          <b-col :md="5">
            <b-input id="year"
                     v-model.number="formData.year"
                     type="number" />
          </b-col>
        </b-form-group>
        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Status:"
                      for="studentStatus">
          <b-col :md="5">
            <div>
              <validation-provider rules="required" v-slot="{ errors }">
                <b-form-select v-model="formData.studentStatusId" :options="options" required></b-form-select>
                <span>{{ errors[0] }}</span>
              </validation-provider>
            </div>
          </b-col>
        </b-form-group>
        <br><br>

        <b-col :md="5"
               offset="4">
          <b-button type="submit"
                    variant="info">Save</b-button>
          <b-button :to="{ name: 'Home' }"
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
  import StudentService from '@/api-services/student.service';
  import { ValidationProvider, extend } from 'vee-validate';
  import { required } from 'vee-validate/dist/rules';

  extend('required', {
    ...required,
    message: 'This field is required'
  });
export default {
    name: 'StudentUpdate',
    components: {
      ValidationProvider
    },
  data() {
    return {
      formData: {
        indexNumber: '',
        firstName: '',
        lastName: '',
        year: '',
        studentStatusId: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessfully: false,
      selected: null,
      options: [
        { value: 1, text: 'Regular student' },
        { value: 2, text: 'Part-time student' }
      ]
    };
    },
    created() {
      StudentService.get(this.$router.currentRoute.params.id).then((response) => {
        this.formData.indexNumber = response.data.indexNumber;
        this.formData.firstName = response.data.firstName;
        this.formData.lastName = response.data.lastName;
        this.formData.year = response.data.year;
        this.formData.studentStatusId = response.data.studentStatusId;
      });
    },
    methods: {
      updateStudent() {
        StudentService.update(this.$router.currentRoute.params.id, this.formData).then(() => {
          this.isSuccessfully = true;
          this.alertModalTitle = 'Successfully';
          this.alertModalContent = 'Successfully updated Student';
          this.$refs.alertModal.show();

          this.formData = {
            indexNumber: '',
            firstName: '',
            lastName: '',
            year: '',
            studentStatusId: ''
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
          this.$router.push({ name: 'Home' });
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
