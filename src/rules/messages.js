export default {
  required: "فیلد الزامی",
  minLength: (number) => `حداقل طول مجاز: ${number} کاراکتر.`,
  maxLength: (number) => `حداکثر طول مجاز: ${number} کاراکتر.`,
};
