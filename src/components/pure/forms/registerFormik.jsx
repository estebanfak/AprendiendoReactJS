import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { ROLES } from '../../../models/roles.enum';
import { User } from '../../../models/users.class';


export default function RegisterFormik() {
  const initialValues = {
    username: '',
    email: '',
    role: ROLES.USER,
    password: '',
    confirm: '',
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'El campo debe tener al menos 6 caracteres')
      .max(12, 'El campo debe tener como máximo 12 caracteres')
      .required('El campo es requerido'),
    email: Yup.string()
      .email('Formato de email invalido')
      .required('El email es requerido'),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], 'Debes seleccionar un rol del usuario')
      .required('El rol es requerido'),
    password: Yup.string()
      .min(8, 'Contraseña muy corta')
      .required('La contraseña es requerida'),
    confirm: Yup.string()
      .when('password', {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string()
          .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
      })
      .required('Debes confirmar tu contraseña'),
  });

  const submit = (values) => {
    alert('Register user');
  };

  return (
    <div>
      <h4>Register Fromik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, touched, errors, isSubmitting }) => (
          <Form>
            <label htmlFor='username'>Nombre de usuario</label>
            <Field
              id='username'
              type='text'
              name='username'
              placeholder='Nombre de usuario'
            />
            {errors.username && touched.username && (
              <ErrorMessage name='username' component='div' />
            )}

            <label htmlFor='email'>Email</label>
            <Field
              id='email'
              type='email'
              name='email'
              placeholder='tucorreo@ejemplo.com'
            />
            {errors.email && touched.email && (
              <ErrorMessage name='email' component='div' />
            )}

            <label htmlFor='password'>Contraseña</label>
            <Field
              id='password'
              name='password'
              type='password'
              placeholder='Password'
            />
            {errors.password && touched.password && (
              <ErrorMessage name='password' component='div' />
            )}

            <label htmlFor='confirm'>Confirmar contraseña</label>
            <Field
              id='confirm'
              name='confirm'
              type='select'
              placeholder='Confirmar contraseña'
            />
            <select>
              <option>a</option>
              <option>b</option>
              <option>c</option>
            </select>
            {errors.confirm && touched.confirm && (
              <ErrorMessage name='confirm' component='div' />
            )}

            <button type='submit'>Registrar usuario</button>
            {isSubmitting ? <p>Registrando usuario...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}

// const Registerformik = () => {
//   let user = new User();

//   const initialValues = {
//     userName: '',
//     email: '',
//     password: '',
//     confirm: '', // to confirm password
//     role: ROLES.USER,
//   };

//   const registerSchema = Yup.object().shape({
//     userName: Yup.string()
//       .min(6, 'Username too short')
//       .max(12, 'Username too long')
//       .required('Username is required'),
//     email: Yup.string()
//       .email('Invalid email format')
//       .required('Email is required'),
//     role: Yup.string()
//       .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
//       .required('Role is required'),
//     password: Yup.string()
//       // .min(8, 'Password too short')
//       .required('Password is required'),
//     confirm: Yup.string()
//       .when('password', {
//         is: (value) => (value && value.length > 0 ? true : false),
//         then: Yup.string().oneOf(
//           [Yup.ref('password')],
//           '¡Passwords must match!'
//         ),
//       })
//       .required('You must confirm the password'),
//   });

//   const submit = (values) => {
//     alert('Register user');
//   };

//   return (
//     <div>
//       <h4>Register Formik</h4>
//       <Formik
//         initialValues={initialValues}
//         // *** Yup Validation Schema ***
//         validationSchema={registerSchema}
//         // ** onSubmit Event
//         onSubmit={async (values) => {
//           await new Promise((r) => setTimeout(r, 1000));
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         {({
//           values,
//           touched,
//           errors,
//           isSubmitting,
//           handleChange,
//           handleBlur,
//         }) => (
//           <Form>
//             <label htmlFor='userName'>Username</label>
//             <Field
//               id='userName'
//               type='text'
//               name='userName'
//               placeholder='Your username'
//             />

//             {/* Username Errors */}
//             {errors.userName && touched.userName && (
//               <ErrorMessage name='userName' component='div'></ErrorMessage>
//             )}

//             <label htmlFor='email'>Email</label>
//             <Field
//               id='email'
//               type='email'
//               name='email'
//               placeholder='example@email.com'
//             />

//             {/* Email Errors */}
//             {errors.email && touched.email && (
//               <ErrorMessage name='email' component='div'></ErrorMessage>
//             )}

//             <label htmlFor='password'>Password</label>
//             <Field
//               id='password'
//               name='password'
//               placeholder='password'
//               type='password'
//             />
//             {/* Password Errors */}
//             {errors.password && touched.password && (
//               <ErrorMessage name='password' component='div'></ErrorMessage>
//             )}

//             <label htmlFor='confirm'>Password</label>
//             <Field
//               id='confirm'
//               name='confirm'
//               placeholder='confirm passsword'
//               type='password'
//             />
//             {/* Confirm Password Errors */}
//             {errors.confirm && touched.confirm && (
//               <ErrorMessage name='confirm' component='div'></ErrorMessage>
//             )}

//             <button type='submit'>Register Account</button>
//             {isSubmitting ? <p>Sending your credentials...</p> : null}
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Registerformik;
