import React from 'react'

export default function HomeTabs() {
    return (
        <>
            <div className="glavar">
                <h1 className="glavnoe">Главное</h1>
                <div id="Home-slova">
                    <div>
                        <a className="vse">ВСЁ</a>
                    </div>
                    <div>
                        <a href="">НОВЫЕ</a>
                    </div>
                    <div>
                        <a href="">РЕЛИЗЫ</a>
                    </div>
                    <div>
                        <a href=""> ПОДБОРКИ</a>
                    </div>
                    <div>
                        <a href="">НЕЙРОМУЗЫКА</a>
                    </div>
                </div>
            </div>
            <div className="line" />
        </>
    )
}
