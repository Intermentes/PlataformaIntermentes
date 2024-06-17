import style from './Menu.module.css'
import { Link } from 'react-router-dom'

export default function MenuLogin() {
    return (
        <div className={style.container}>
            <div className={style.qualUsuario}>
                <Link to={''}>
                    <div className={style.boxUsuario}>
                        <h2>Paciente</h2>
                    </div>
                </Link>
                <Link to={'Especialista'}>
                    <div className={style.boxUsuario}>
                        <h2>Psicologo</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}