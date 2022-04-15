
import Assignment from './component/assignment';
import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListCate from './component/listCate';
import SurveyOfCate from './component/listSurvey';
import ResultAssignment from './component/resultAssignment';

const SurveyContainer = () => {
    return (
        <Routes>
            <Route index element={<ListCate />} />
            <Route path="detail" element={<SurveyOfCate />} />
            <Route path="assignment" element={<Assignment />} />
            <Route path="result" element={<ResultAssignment />} />
        </Routes>
    )
}

export default SurveyContainer