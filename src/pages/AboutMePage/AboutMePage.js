import BackLinkModule from "../../modules/BackLinkModule/BackLinkModule";
function AboutMePage() {
    return (
        <section className='about-me'>
            <div className='container'>
                <BackLinkModule link={'/'} text={'На главную'} />
                <h1 className="about-me__title">About me</h1>
            </div>
        </section>
    );
}

export default AboutMePage;
