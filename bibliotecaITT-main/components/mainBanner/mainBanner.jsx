import styles from "./mainBanner.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// export default function LoginPage() {
//   return (
//     <div>
//     </div>
//   );
// }

export default function MainBanner({ showBanner, handleFunction }) {
  const router = useRouter();
  const [login, setLogin] = useState(false);

  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const stateBanner = showBanner
    ? styles.bannerContainer
    : styles.bannerContainerOff;

  const hanldeSubmit = (e) => {
    e.preventDefault();

    if (!user || !password) {
      alert("Por favor ingrese todos los campos");
      return;
    }

    if (!login) {
      axios
        .post(
          "/api/user",
          {
            userName: user,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        .then((res) => {
          alert("Usuario creado correctamente");
          router.push("/");
          setUser("");
          setPassword("");
        })
        .catch((err) => {
          alert("Error al crear usuario");
          router.push("/");
          setUser("");
          setPassword("");
        });
    }
    else{
      axios
      .post(
        "/api/checkUser",
        {
          userName: user,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.exists) {
          alert("Inicio de sesión exitoso");
          handleFunction();
        } else {
          alert("Usuario no encontrado");
        }
        setUser("");
        setPassword("");
      })
      .catch((err) => {
        alert("Error al verificar usuario");
        setUser("");
        setPassword("");
      });
    }
  };

  const handleValuePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleValueUser = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className={stateBanner}>
      <div className={styles.logoContainer}>
        <img src="Logo.jpeg" alt="Logo" />
      </div>

      <section className={styles.loginContainer}>
        <div className={styles.buttomContainer}>
          <button
            onClick={() => {
              setLogin(true);
            }}
            className={styles.bannerButton}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => {
              setLogin(false);
            }}
            className={styles.bannerButton}
          >
            Registrarse
          </button>
        </div>

        <div className={styles.formContainer}>
          {login ? (
            <div className={styles.loginSesionContainer}>
              <form action="">
                <input
                  value={user}
                  onChange={handleValueUser}
                  required
                  type="text"
                  placeholder="Usuario"
                />
                <input
                  value={password}
                  onChange={handleValuePassword}
                  required
                  type="password"
                  placeholder="Contraseña"
                />
                <button
                  onClick={hanldeSubmit}
                  className={styles.btnForm}
                  type="submit"
                >
                  {" "}
                  Iniciar Sesión{" "}
                </button>
              </form>
            </div>
          ) : (
            <div className={styles.singinSesionContainer}>
              <form action="">
                <input
                  value={user}
                  onChange={handleValueUser}
                  required
                  type="text"
                  placeholder="Usuario"
                />
                <input
                  value={password}
                  onChange={handleValuePassword}
                  required
                  type="password"
                  placeholder="Contraseña"
                />
                <button
                  onClick={hanldeSubmit}
                  className={styles.btnForm}
                  type="submit"
                >
                  {" "}
                  Registrarse{" "}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
