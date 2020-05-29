<template>
  <div>
    <b-row>
      <b-col md="2"
             offset-md="10">
        <router-link :to="{ name: 'CourseCreate' }">Create course</router-link>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Course name</th>
              </tr>
            </thead>
            <tbody>
              <course-list-row
                v-for="course in courses"
                :key="course.pkcourseId"
                :course="course"
                @course="studentsInCourse"/>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import CourseService from '@/api-services/course.service';
  import CourseListRow from '@/components/Course/CourseListRow';

export default {
    name: 'CoursesList',
    components: {
      CourseListRow
    },
    data() {
      return {
        courses: []
      }
    },
    created() {
      CourseService.getAll().then((response) => {
        this.courses = response.data;
      });
    },
    methods: {
      studentsInCourse(pkcourseId) {
        this.$router.push({ name: 'StudentsInCourse', params: { id: pkcourseId } });
      }
    }
};
</script>
