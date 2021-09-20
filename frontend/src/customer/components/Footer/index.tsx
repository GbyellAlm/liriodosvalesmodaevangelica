import './styles.scss';

const Footer = () => (
    <footer className="bg-primary text-white text-center customer-footer">
        <div>
            <p>Lírio dos Vales - Moda Evangélica</p>
            <p>Rua Manoel Vieira Garção, 99 | sala 02 | Centro | Itajaí - SC</p>
            <p>Atendimento de Seg a Sex das 09:00 ás 18:00 hs | Sáb das 09:00 ás 13:00 hs</p>
            <p>(47) 3349-3854 | (47) 99116-8031</p>
        </div>
        <div>
            <a href="https://www.facebook.com/LivrariaLirioDosValesItajai97" target="_blank" title="Siga nosso Facebook!">
                <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/moda.liriodosvales/" target="_blank" title="Siga nosso Instagram!">
                <i className="bi bi-instagram"></i>
            </a>
        </div>
        <div className="f-s-14">
            <p className="customer-footer-credits">{"</> by Gabriel Leonardo de Almeida"}</p>
        </div>
    </footer>
);

export default Footer;
