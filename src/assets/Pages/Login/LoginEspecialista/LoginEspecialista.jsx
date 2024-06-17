import style from './LoginEspecialista.module.css'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion';

export default function LoginEspecialista() {
    return (
        <motion.form action="#" className={style.LoginForm}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
        >
            <h2 className={style.titleEspecialista}>OfficeMentes</h2>
            <div className={style.dadosLogin}>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <input type="text" placeholder="Digite seu CPF" className={style.inputAcesso} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >

                    <input type="password" placeholder="Digite sua Senha" className={style.inputAcesso} />
                </motion.div>
            </div>
            <Link to={'/HomeEspecialista'}>
                <input type="submit" value="Login" className={style.inputSubmit} />
            </Link>
        </motion.form>
    )
}
