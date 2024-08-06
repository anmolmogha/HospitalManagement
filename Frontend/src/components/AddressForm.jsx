import { getInfoFromPin } from "../services/api";

function AddressForm({ formFields, setFormFields }) {
  /**
   * This method is used for setting the different fields in the address form when
   * the pincode is entered
   */
  const handlePinCode = () => {
    getInfoFromPin(formFields.pincode)
      .then((res) => {
        const { city, state, suburb } = res.data.results[0].components;
        setFormFields({
          ...formFields,
          city,
          state,
          district: suburb,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * This function is triggered when any change happens in the address form.
   * This function updates the address state variables
   * @param {*} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <h3>Address Info</h3>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            required
            name="country"
            type="text"
            id="country"
            className="form-control"
            placeholder="Country"
            value={formFields.country}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="pincode" className="form-label">
            Pin Code
          </label>
          <input
            required
            name="pincode"
            type="number"
            id="pincode"
            className="form-control"
            placeholder="Pin Code"
            value={formFields.pincode}
            onBlur={handlePinCode}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="houseNumber" className="form-label">
            House Number
          </label>
          <input
            required
            name="houseNumber"
            type="text"
            id="houseNumber"
            className="form-control"
            placeholder="House Number"
            value={formFields.houseNumber}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="area" className="form-label">
            Area
          </label>
          <input
            required
            name="area"
            type="text"
            id="area"
            className="form-control"
            placeholder="Area"
            value={formFields.area}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="district" className="form-label">
            District
          </label>
          <input
            required
            name="district"
            type="text"
            id="district"
            className="form-control"
            placeholder="District"
            value={formFields.district}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            required
            name="state"
            type="text"
            id="state"
            className="form-control"
            placeholder="State"
            value={formFields.state}
            onChange={handleChange}
          />
        </div>

        <div className="col">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            required
            name="city"
            type="text"
            id="city"
            className="form-control"
            placeholder="City"
            value={formFields.city}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default AddressForm;
