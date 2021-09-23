<template>
  <div class="card">
    <DataTable :value="users" v-model:selection="selectedUsers" dataKey="id">
      <Column selectionMode="multiple" headerStyle="width: 2rem"></Column>
      <Column field="id" header="ID" :sortable="true"></Column>
      <Column field="username" header="Username" :sortable="true"></Column>
      <Column field="email" header="E-Mail" :sortable="true"></Column>
      <Column field="isAdmin" header="Admin" :sortable="true">
        <template #body="slotProps">
          <i v-if="slotProps.data.isAdmin" class="pi pi-check"></i>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const users = ref([]);
    const selectedUsers = ref([]);
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const { data } = response;
      data.forEach((item) => {
        item.isAdmin = Math.random() > 0.5;
      });
      users.value = [...data];
    });
    return {
      users,
      selectedUsers,
    };
  },
};
</script>

<style>
* {
  font-size: 11px;
}
</style>
