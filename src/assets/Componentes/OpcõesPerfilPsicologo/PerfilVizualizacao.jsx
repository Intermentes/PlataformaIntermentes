import style from './PerfilVizualizacao.module.css'
import FotoPessoa from '../../Images/UserPage/FotoPessoa.png'
import setaRoxo from '../../Images/UserPage/setaroxa.png'
import { Link } from 'react-router-dom';

export default function VizualizacaoPerfil(){
    return(
        <>
        <div className={style.containerPrimario}>
            <div className={style.Title}>
                <h1>Configure seu Perfil</h1>
            </div>
            <div className={style.containerDados}>
                <div className={style.infoPsicologo}>
                    <h2>Bio</h2>
                    <input type="text" placeholder='Conte sobre você e seu perfil profissional...'/>
                </div>
                <div className={style.infoPsicologo2}>
                    <h2>Especialidade</h2>
                    <input type="text" placeholder=''/>
                </div>
                <div className={style.infoPsicologo2}>
                    <h2>Sub-categorias</h2>
                    <input type="text" placeholder='Adicione suas aptidões - Ex:'/>
                </div>
                <div className={style.infoPsicologo}>
                    <h2>Formação Acadêmica</h2>
                    <input type="text" placeholder='Conte sobre sua trilha de conhecimento...'/>
                </div>
                <button>Salvar <img src={setaRoxo} alt="" /></button>
            </div>
        </div>
        <aside className={style.containerSecundario}>
                <div className={style.boxImagemUser}>
                    <img src={FotoPessoa} alt="" />
                    <h2>Dra Dafny</h2>
                </div>
                <div className={style.alertBox}>
                    <div className={style.alertDescription}>
                        <p>Alterar imagem</p>
                    </div>
                </div>
                    <div className={style.boxPlanos}>
                        <p>PRÉ VISUALIZAÇÃO</p>
                    </div>

            </aside>
        </>
    )
}