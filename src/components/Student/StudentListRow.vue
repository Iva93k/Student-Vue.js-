<template>
  <tr>
    <td>{{ student.pkstudentId }}</td>
    <td>{{ student.indexNumber }}</td>
    <td>{{ student.firstName }}</td>
    <td>{{ student.lastName }}</td>
    <td>{{ student.year }}</td>
    <td>{{ student.studentStatusId }}</td>
    <td>{{ student.studentStatus }}</td>
    <td>
      <b-button
        variant="default"
        @click="onDetailsClick">Details</b-button>
    </td>
    <td>
      <b-button
        variant="success"
        @click="onUpdateClick">Update</b-button>
    </td>
    <td>
      <b-button
        variant="danger"
        @click="onDeleteClick">Delete</b-button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'StudentListRow',
    props: ['student'],
    methods: {
      onDetailsClick() {
        this.$emit('details', this.student.pkstudentId);
      },
      onUpdateClick() {
        this.$emit('update', this.student.pkstudentId);
      },
      onDeleteClick() {
        this.$emit('delete', this.student.pkstudentId);
      }
    }
};
</script>
