import styles from './Footer.module.css'


export const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>




                <div className={styles.containers}>
                    <div className={styles.container}>
                        <p className={styles.title}>Sobre</p>
                        <p>
                            O que é uma Intranet
                        </p>
                        <p>
                            A intranet é uma rede de computadores privada que assenta sobre a suíte de protocolos da Internet, porém, de uso exclusivo de um determinado local, como, por exemplo, a rede de uma empresa, que só pode ser acessada pelos seus utilizadores ou colaboradores internos.
                        </p>
                    </div>


                    <div className={styles.container}>
                        <p className={styles.title}>Contatos</p>
                        <ul>
                            <li className={styles.link}>
                                Emails
                            </li>
                            <li className={styles.link}>
                                Contatos
                            </li>
                        </ul>
                    </div>

                    <div className={styles.container}>
                        <p className={styles.title}>Contatos</p>
                        <ul className={styles.link}>
                            <li className={styles.link}>
                                Emails
                            </li>
                            <li className={styles.link}>
                                Contatos
                            </li>
                        </ul>
                    </div>

                </div>

            </footer>


            <footer className={styles.diretosResecados}>
                <p>2023 - Todos os direitos reservados | Eberson Silva | Henrique Silva </p>
            </footer>
        </>
    )
}

export default Footer;

