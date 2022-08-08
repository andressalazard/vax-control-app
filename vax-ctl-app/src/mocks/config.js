export const titles = {
  USER_REGISTRATION: "REGISTRO DE EMPLEADO",
  CLEAR_FIELDS: "Limpiar campos",
  EMPLOYEE_PROFILE: "Perfil del Empleado",
  RETURN_TO_HOMEPAGE: "Regresar al Inicio",
  ADD_NEW_EMPLOYEE: "Añadir Empleado",
  EMPLOYEE_LOGO: "/svg-profile-logo.svg",
  EMPLOYEE_DETAILS_INFORMATION: "DETALLES DEL EMPLEADO",
  EMPLOYEE: "EMPLEADO",
  STATUS_VACCINATED: "VACUNADO",
  STATUS_PENDING: "PENDIENTE",
};

export const fieldsSetup = [
  {
    id: "first_name",
    label: "Nombre",
    type: "text",
    placeholder: "eg. Mark",
    rule: "^[a-zA-Zs]+$",
    errorMessage: "*invalid first name",
  },
  {
    id: "last_name",
    label: "Apellido",
    type: "text",
    placeholder: "eg. Noppler",
    rule: "^[a-zA-Zs]+$",
    errorMessage: "*invalid last name",
  },
  {
    id: "ID",
    label: "Cédula",
    type: "text",
    placeholder: "eg. 1715670830",
    rule: "^[0-9]{10}$",
    maxLength: 10,
    errorMessage: "*invalid ID",
  },
  {
    id: "email",
    label: "Correo Electrónico",
    type: "email",
    placeholder: "example@xyz.com",
    rule: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
    errorMessage: "*invalid email",
  },
];

export const userSignUpFieldsSetup = [
  {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "eg. anfersadu",
    rule: "^[a-zA-Zs]+$",
    errorMessage: "*invalid username",
  },

  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "10 chars limit",
    rule: "^[a-zA-Zs]{10}$",
    errorMessage: "*invalid password",
  },
];
