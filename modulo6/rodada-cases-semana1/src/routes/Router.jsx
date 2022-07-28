import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MegaPage } from '../pages/MegaPage';
import {QuinaPage} from '../pages/QuinaPage'
import {LotofacilPage} from '../pages/LotofacilPage'
import {LotomaniaPage} from '../pages/LotomaniaPage'
import {TimemaniaPage} from '../pages/TimemaniaPage'
import {DiaDeSortePage} from '../pages/DiaDeSortePage'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<MegaPage />} />
                <Route path="/quina" element={<QuinaPage />} />
                <Route path="/lotofacil" element={<LotofacilPage />} />
                <Route path="/lotomania" element={<LotomaniaPage />} />
                <Route path="/timemania" element={<TimemaniaPage />} />
                <Route path="/diadesorte" element={<DiaDeSortePage />} />
            </Routes>
        </BrowserRouter>

    )
}

