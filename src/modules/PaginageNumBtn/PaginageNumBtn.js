
function PaginageNumBtn(props) {
    return (
        <li className={props.page === props.currentPage + 1 ? "page-item active" : "page-item"}>
            <button onClick={() => { props.cangeCurrentPage(props.page - 1) }} className="page-link">
                {props.page}
            </button>
        </li>

    );
}

export default PaginageNumBtn;