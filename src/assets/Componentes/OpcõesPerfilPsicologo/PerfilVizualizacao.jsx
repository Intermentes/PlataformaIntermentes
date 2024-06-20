import ''

export default function Vizu(){
    return(
        <>
        <aside className={style.containerSecundario}>
                <div className={style.boxImagemUser}>
                    <img src={FotoPessoa} alt="" />
                    <h2>Dra Dafny</h2>
                    <hr />
                </div>
                <div className={style.titleLembrete}>
                    <h2>Lembretes</h2>
                    <img src={Notif} alt="" />
                </div>
                <div className={style.alertBox}>
                    <img src={IconSom} alt="" />
                    <div className={style.alertDescription}>
                        <p>Próxima consulta</p>
                        <p>8:00 AM - 12:00 PM</p>
                    </div>
                </div>
                <div className={style.boxPlanos}>
                    <p>PLANO CRESCIMENTO</p>
                    <div className={style.upBox}>
                        <p>Upgrade no plano</p>
                        <img src={IconSetaDireita} alt="" />
                    </div>
                </div>
            </aside>
        </>
    )
}