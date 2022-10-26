import  Input  from "../Input";
import Title from "../Title";
import './navbar.css'

const Navbar = ( {setBuscarItem }) => {
    //esta es la funcion de buscar 
    const inputValue = ( buscar) => {
       
        setBuscarItem(buscar);
      };
	return (
		<nav>
            <section className="contenedor nav">
                <div className="logo">
<Title navTitle={'Buscador  de Colaboradores'}/>
                </div>
                <div className="enlaces-header">
                    <Input placeholder={'Busca un colaborador' }   onChange= {(e) => {
                inputValue(e.target.value);
              }}/>
                </div>
                <div className="hamburguer">
                    <i className="fas fa-bars"></i>
                </div>
            </section>
        </nav>
	)
};

export default Navbar;
