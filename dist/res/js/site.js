console.log("#init");
var giftForm = new Vue({
  el: "#gift-form",
  data: function() {
    return {
      values: {
        duration: "half",
        cardType: "digital",
        recipient: "me"
      },
      form: {
        customer_email: {
          value: "",
          conditions: { recipient: "me" }
        },
        customer_name: {
          value: "",
          conditions: { required: true }
        },
        recipient_email: {
          value: "",
          conditions: { recipient: "them" }
        },
        recipient_name: {
          value: "",
          conditions: { recipient: "them", cardType: "physical" }
        },
        recipient_address: {
          value: "",
          conditions: { recipient: "them", cardType: "physical" }
        },
        recipient_city: {
          value: "",
          conditions: { recipient: "them", cardType: "physical" }
        },
        recipient_state: {
          value: "",
          conditions: { recipient: "them", cardType: "physical" }
        },
        recipient_zip: {
          value: "",
          conditions: { recipient: "them", cardType: "physical" }
        },
        recipient_country: {
          value: "",
          conditions: { recipient: "them", cardType: "physical" }
        },
        dispatch_date: {
          value: "",
          conditions: { recipient: "them" }
        },
        personal_message_name: {
          value: "",
          conditions: {}
        },
        personal_message_content: {
          value: "",
          conditions: {}
        }
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.formValid()) {
        console.log("form valud");
      }
      for (var field in this.values) {
        console.log(field);
      }
      console.log(this.values);
    },
    formValid() {
      return false;
    }
  }
});
