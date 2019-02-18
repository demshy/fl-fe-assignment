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
          conditions: {}
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
          conditions: { allowEmpty: true }
        },
        personal_message_content: {
          value: "",
          conditions: { allowEmpty: true }
        }
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.formValid()) {
        var output = {
          duration: this.values.duration,
          card_type: this.values.cardType,
          recipient: this.values.recipient,
          personal_message_name: this.form.personal_message_name.value,
          personal_message_content: this.form.personal_message_content.value
        };

        for (var f in this.form) {
          if (this.isRequired(this.form[f])) {
            output[f] = this.form[f].value;
          }
        }

        console.log(output);
      }
    },
    formValid() {
      for (var f in this.form) {
        if (this.isRequired(this.form[f]) && this.form[f].value == "") {
          return false;
        }
      }
      return true;
    },
    isRequired(field) {
      if (field.conditions.allowEmpty !== undefined) {
        return false;
      }
      if (
        field.conditions.cardType !== undefined &&
        field.conditions.recipient !== undefined
      ) {
        return (
          this.values.cardType == field.conditions.cardType &&
          this.values.recipient == field.conditions.recipient
        );
      }
      if (field.conditions.cardType !== undefined) {
        return this.values.cardType == field.conditions.cardType;
      }
      if (field.conditions.recipient !== undefined) {
        return this.values.recipient == field.conditions.recipient;
      }

      return true;
    },

    fieldTouched(field) {
      this.form[field].touched = true;
      giftForm.$forceUpdate();
    },

    highlightInvalidField(fieldName) {
      var field = this.form[fieldName];
      return (
        field.value == "" &&
        this.isRequired(field) &&
        field.touched !== undefined
      );
    }
  }
});
