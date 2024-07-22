import axios from 'axios'

export const registerDoctor = async(formData)=>{
    await axios.post('http://localhost:8080/api/doctor/register', formData).then(res =>{
        console.log(res.data)
    }).catch(err=>console.log(err))
}