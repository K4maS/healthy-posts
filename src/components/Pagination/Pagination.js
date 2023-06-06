import './Pagination.scss';

import { useDispatch, useSelector } from 'react-redux';
import { updageCurrentPage } from '../../store/toolkitSllice';
import PaginageNumBtn from '../../modules/PaginageNumBtn/PaginageNumBtn';



function Pagination() {
    const dispath = useDispatch();
    const currentPage = useSelector((state) => state.toolkit.currentPage);
    const postsPaged = useSelector((state) => state.toolkit.postsPaged);
    const changePage = (page) => {
        dispath(updageCurrentPage(page))
    }
    return (
        <ul className="pagination">
            <li className="page-item ">
                <button className={currentPage === 0 ? "page-link disabled" : "page-link"}
                    onClick={() => changePage(currentPage - 1)}>
                    Предыдущая
                </button>
            </li>
            {
                postsPaged.map((post) => <PaginageNumBtn
                    cangeCurrentPage={changePage}
                    page={post.page} currentPage={currentPage} key={post.page} />)
            }
            <li className="page-item">
                <button className={currentPage === postsPaged.length - 1 ? "page-link disabled" : "page-link"}
                    onClick={() => changePage(currentPage + 1)}>Следующая</button>
            </li>
        </ul>
    );
}

export default Pagination;
