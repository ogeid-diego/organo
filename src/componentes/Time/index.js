import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const cssPrimariaBorder = { borderColor: props.corPrimaria }
    // const cssPrimaria = { backgroundColor: props.corPrimaria }
    const cssSection = { backgroundColor: props.corSecundaria }

    return(
        //renderização jsx condicional
        (props.colaboradores.length > 0) ? <section className='time' style={cssSection}>
            <h3 style={cssPrimariaBorder}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ""
    )
}

export default Time;