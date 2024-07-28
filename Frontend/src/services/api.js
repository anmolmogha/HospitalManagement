import axios from "axios";
import { API_KEY } from "../constants/appConstants";

export const registerDoctor = async (formData) => {
  return await axios.post(
    "http://localhost:8080/api/doctor/register",
    formData
  );
};

export const getAllDoctors = async () => {
  return await axios.get("http://localhost:8080/api/doctor/");
};

export const registerPatient = async (formData) => {
  await axios
    .post("http://localhost:8080/api/patient/register", formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

/**
 * This API call is used for getting the different values in the address form after entering the pincode
 * @param {*} pincode
 * @returns
 */
export const getInfoFromPin = async (pincode) => {
  return await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${pincode}&key=${API_KEY}`
  );
};
