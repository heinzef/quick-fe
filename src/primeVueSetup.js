import DataTable from "primevue/datatable";
import Column from "primevue/column";

const setupPrimeVue = (app) => {
  app.component("DataTable", DataTable);
  app.component("Column", Column);
};

export default setupPrimeVue;
