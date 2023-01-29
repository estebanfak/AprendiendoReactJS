import React, { useState } from "react";

let red = 0;
let green = 250;
let blue = 150;

//? Estilo usuario logueado
const loggedStyle = {
  // backgroundColor: 'green',
  backgroundColor: `rgb(${red},${green},${blue})`,
  color: "white",
  fontWeigth: " bold",
};

//? Estilo usuario no logueado
const unloggedStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeigth: " bold",
};

// Login / Logout button

function LoginButton({ loginAction, propStyle }) {
  return (
    <button style={propStyle} onClick={loginAction}>
      Login
    </button>
  );
}

function LogoutButton({ logoutAction, propStyle }) {
  return (
    <button style={propStyle} onClick={logoutAction}>
      Logout
    </button>
  );
}

// ? Operador ternario raro
// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => NO se renderiza la expresión
// ?
// ? Operador ternario común
// ? (Condicion) ? Renderizar ésto si es true : Renderizar esto si es false

function OptionalRender() {
  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);

  //   const updateAccess = () => {
  //     setAccess(!access);
  //   };

  function loginAction() {
    setAccess(true);
  }

  function logoutAction() {
    setAccess(false);
  }

  let optionalButton;

  //   if (access) {
  //     optionalButton = <button onClick={updateAccess}>Logout</button>;
  //   } else {
  //     optionalButton = <button onClick={updateAccess}>Login</button>;
  //   }

  if (access) {
    optionalButton = (
      <LogoutButton
        propStyle={unloggedStyle}
        logoutAction={logoutAction}
      ></LogoutButton>
    );
  } else {
    optionalButton = (
      <LoginButton
        propStyle={loggedStyle}
        loginAction={loginAction}
      ></LoginButton>
    );
  }

  // Unread messages
  let addMessages = () => {
    setNMessages(nMessages + 1);
  };
  return (
    <div>
      {/* Optional button */}
      {optionalButton}

      {/* N Messages unread con operador ternario raro*/}
      {/* {nMessages>0 && nMessages===1 && <p>You have {nMessages} new message...</p>}
      {nMessages>1 && <p>You have {nMessages} new messages...</p>}
      {nMessages===0 && <p>There are no messages</p>} */}

      {/* Operador ternario común*/}
      {access ? (
        <div>
          {nMessages > 0 ? (
            <p>
              You have {nMessages} new message{nMessages === 1 ? "" : "s"}...
            </p>
          ) : (
            <p>There are no messages</p>
          )}
          <button onClick={addMessages}>Add message</button>
        </div>
      ) : null}

      {/* {nMessages>0 ? <p>You have {nMessages} new message{nMessages === 1 ? '' : 's'}...</p> : <p>There are no messages</p>}
      <button onClick={addMessages}>Add message</button>  */}
    </div>
  );
}

export default OptionalRender;
