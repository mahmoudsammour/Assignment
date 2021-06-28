export const Routes = {
  getAllPatients: '/api/patient/all',
  deletePatient: (id: string) => '/api/patient/delete?' + 'id=' + id,
  getPatientById: (id: string) => '/api/patient/details?' + 'id=' + id,
  createPatient: '/api/patient/create',
  editePatient: (id: string) => '/api/patient/edit?' + 'id=' + id,
};
