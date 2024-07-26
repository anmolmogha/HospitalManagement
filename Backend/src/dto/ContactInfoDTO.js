class ContactInfoDTO {
  constructor({ mobileNumber, alernativeMobileNumber, email }) {
    this.phoneNumber = Number(mobileNumber);
    this.alternativePhoneNumber = Number(alernativeMobileNumber);
    this.email = email;
  }

  validate() {
    if (!this.phoneNumber || typeof this.phoneNumber !== "number") {
      throw new Error("Invalid or missing Phone Number");
    }
    if (
      !this.alternativePhoneNumber ||
      typeof this.alternativePhoneNumber !== "number"
    ) {
      console.log("Invalid or missing Alternative Number");
    }
    if (!this.email || typeof this.email !== "string") {
      throw new Error("Invalid or missing Email");
    }
  }
}

module.exports = ContactInfoDTO;
