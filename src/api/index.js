import axios from 'axios'

const api = axios.create({
    baseURL: 'http://patient-list-app-git-patient-list.apps.us-east-2.starter.openshift-online.com/api', 
})

export const insertPatient = payload => api.post(`/patient`, payload)
export const getAllPatients = () => api.get(`/patients`)
export const updatePatientById = (id, payload) => api.put(`/patient/${id}`, payload)
export const deletePatientById = id => api.delete(`/patient/${id}`)
export const getPatientById = id => api.get(`/patient/${id}`)

const apis = {
    insertPatient,
    getAllPatients,
    updatePatientById,
    deletePatientById,
    getPatientById,
}

export default apis
