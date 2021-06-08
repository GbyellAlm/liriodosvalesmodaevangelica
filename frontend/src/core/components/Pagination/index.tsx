import { generateList } from '../../utils/list';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import './styles.scss';

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const Pagination = ({ totalPages, activePage, onChange }: Props) => {
    const items = generateList(totalPages);
    const previousClass = totalPages > 0 && activePage > 0 ? 'page-active' : 'page-inactive';
    const nextClass = (activePage + 1) < totalPages ? 'page-active' : 'page-inactive';

    return (
        <div className="pagination-container">
            <ArrowIcon className={`pagination-previous ${previousClass}`} onClick={() => onChange(activePage - 1)}/>
            {items.map(item => (
                <div className={`pagination-item f-w-600 f-s-14 ${item === activePage ? 'active' : ''}`} key={item} onClick={() => onChange(item)}>
                    { item + 1 }
                </div>
            ))}
            <ArrowIcon className={`pagination-next ${nextClass}`} onClick={() => onChange(activePage + 1)}/>
        </div>
    )
}

export default Pagination;