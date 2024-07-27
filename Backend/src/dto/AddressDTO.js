class AddressDTO {
  constructor({ houseNumber, area, district, city, state, pincode, country }) {
    this.houseNumber = houseNumber;
    this.area = area;
    this.district = district;
    this.city = city;
    this.state = state;
    this.pincode = Number(pincode);
    this.country = country;
  }

  validate() {
    if (!this.houseNumber || typeof this.houseNumber !== "string") {
      throw new Error("Invalid or missing House Number");
    }
    if (!this.area || typeof this.area !== "string") {
      throw new Error("Invalid or missing Area");
    }
    if (!this.city || typeof this.city !== "string") {
      throw new Error("Invalid or missing City");
    }
    if (!this.state || typeof this.state !== "string") {
      throw new Error("Invalid or missing State");
    }
    if (!this.pincode || typeof this.pincode !== "number") {
      throw new Error("Invalid or missing Pincode");
    }
    if (!this.country || typeof this.country !== "string") {
      throw new Error("Invalid or missing Country");
    }
  }
}

module.exports = AddressDTO;
