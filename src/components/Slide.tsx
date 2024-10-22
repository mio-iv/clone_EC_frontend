import './Slide.css'

const Slide = () => {



    return (
        <>
            <nav>
                <button id="open_button" className="button_menu"></button>
                <div id="menu-panel">
                    <button id="close_button" className="button_menu"></button>
                    <ul className="nemu_list">
                        {/* このへんは調整 */}
                        <li><a href="hoge">hoge</a></li>
                        <li><a href="hoge">hoge</a></li>
                        <li><a href="hoge">hoge</a></li>
                    </ul>
                </div>

            </nav>

        </>
        );
    };
    
export default Slide;