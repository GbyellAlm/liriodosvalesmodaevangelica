import './styles.scss';

const CustomerFooter = () => (
    <footer className="bg-primary text-white font-size-14 text-center footer-client">
        <div>
            <p>Lírio dos Vales - Moda Evangélica</p>
            <p>Rua Manoel Vieira Garção, 99 | sala 02 | Centro | Itajaí - SC</p>
            <p>Atendimento de Seg a Sex das 09:00 ás 18:00 | Sáb das 09:00 ás 13:00</p>
            <p>(47) 3349-3854 | (47) 99116-8031</p>
            <a href="#">
                <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
                <i className="bi bi-instagram"></i>
            </a>
        </div>
        <div>
            <p className="developed-by">Desenvolvido por Gabriel Leonardo de Almeida</p>
        </div>
    </footer>
);

export default CustomerFooter;
