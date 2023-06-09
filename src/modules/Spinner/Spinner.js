import './Spinner.scss';

function Spinner() {
    return (
        <div className="spinner">
            <div className="spinner-border" style={{ width: '3rem', height: '3rem', }} role="status">
                <span className="visually-hidden">Загрузка...</span>
            </div>
        </div>

    );
}

export default Spinner;