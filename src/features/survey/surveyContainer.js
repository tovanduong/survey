
import Assignment from './component/assignment';
import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListCate from './component/listCate';
import SurveyOfCate from './component/listSurvey';

const SurveyContainer = () => {
    return (
        <Routes>
            <Route index element={<ListCate />} />
            <Route path="detail" element={<SurveyOfCate />} />
            <Route path="assignment" element={<Assignment />} />
        </Routes>
    )
}

export default SurveyContainer