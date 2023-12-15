import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeTabs() {
    return (
        <>
            <div className="glavar">
                <h1 className="glavnoe">Главное</h1>
                <div id="Home-slova">
                    <div>
                        <Link to='/' className="vse">ВСЁ</Link>
                    </div>
                    <div>
                        <a href="">НОВЫЕ РЕЛИЗЫ</a>
                    </div>
                    <div>
                        <Link to="/CHART">ЧАРТ</Link>
                    </div>
                </div>
            </div>
            <div className="lane" />
        </>
    )
}
