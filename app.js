const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      assignment: "",
      pressed:true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.assignment);
      this.assignment = "";
    },
    toggleTasks(){
      this.pressed=!this.pressed;
    }
  },
});

app.mount("#assignment");
