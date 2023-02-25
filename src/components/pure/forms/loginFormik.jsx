import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Formato de email inválido")
    .required("El email es requerido"),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required("La contraseña es requerida"),
});

export default function LoginFormik() {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>LoginFormik</h4>
      <Formik
        initialValues={initialCredentials}
        //*** Acá hacemos la validación de Yup
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("email", values);
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="tuemail@ejemplo.com"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}
            <button type="submit">Submit</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}

        {/* {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;

          return (
            
          );
        }} */}
      </Formik>
    </div>
  );
}
