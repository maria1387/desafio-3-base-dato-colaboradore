import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";
import { BaseColaboradores as colaboradores } from "../BaseColaboradores";
const Form = ({ buscarItem }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState("")
  //Estado para los errores
  const [error, setError] = useState(null);
  const [BaseColaboradores, setListaCordinadores] = useState([]);
  useEffect(() => {
    setListaCordinadores(colaboradores);
  }, []);

  const agregarColaboradores = (e) => {
    e.preventDefault();

    //Validación;
    if (name === "" || email === "") {
      setError("escriba algo 😍");
    } else {
      setListaCordinadores([
        ...BaseColaboradores,
        { id: BaseColaboradores.length + 1, name: name, email: email },
      ]);
      // limpiar imput

      setName("");
      setEmail("");
      setError(null);
    }
  };

  // eliminar
  const eliminarLista = (id) => {
    console.log(id);

    const arrayFiltrado = BaseColaboradores.filter((item) => item.id !== id);
    setListaCordinadores(arrayFiltrado);
  };

  // editar
  const editar = (item) => {
    console.log(item);
    setModoEdicion(true);
    setName(item.name);
    setEmail(item.email);
    setId(item.id);
  };
  const editarColaborador = (e) => {
    e.preventDefault();

    //Validación;
    if (name === "" || email === "") {
      setError("escriba algo 😍");
    } else {
      // console.log(name, email);

      const arrayEditado = BaseColaboradores.map((item) =>
        item.id === id ? { id, nombre: name, email: email } : item
      );
      setListaCordinadores(arrayEditado);
      setModoEdicion(false);
      setName("");
      setEmail("");
      setId("");
      setError(null);
    }
  };

  return (
    <div className="login-info-container">
      <form
        className="formulario"
        onSubmit={modoEdicion ? editarColaborador : agregarColaboradores}
      >
        <div className="form-group">
          {modoEdicion ? (
            <Title title={" Editar datos colaboradores"} />
          ) : (
            <Title title={"Agregar datos colaboradores "} />
          )}

          {error ? <p>{error}</p> : null}
          <Title label="Nombre de colaborador" />
          <Input
            placeholder="ingrese el nombre del colaborador"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Title label="Correo del colaborador" />
          <Input
            type="email"
            placeholder="ingresa correo del colaborador"
            onChange={(e) => setEmail(e.target.value)}
            className={"input-password"}
            value={email}
          />
          {modoEdicion ? (
            <Button type={"submit"} className="button" children="Editar" />
          ) : (
            <Button type={"submit"} className="button" children="Agregar" />
          )}
        </div>
      </form>
      <div className="container-lista">
        <ul>
          <Title navTitle={"lista de Coodinaador "} />

          { BaseColaboradores.filter((item)=>item.name.toLowerCase().includes(buscarItem.toLowerCase())|| item.email.toLowerCase().includes(buscarItem.toLowerCase())).map((item) => (
            <div key={item.id} className="lista">
              <span>
                {item.name} - {item.email}
              </span>
              <div className="container-button">
                <Button
                  onClick={() => eliminarLista(item.id)}
                  children="Eliminar"
                  className="buttonEliminar"
                />
                <Button onClick={() => editar(item)} children="Editar" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
