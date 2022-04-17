
import Assignment from './component/assignment';
import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListCate from './component/listCate';
import SurveyOfCate from './component/listSurvey';
import ResultAssignment from './component/resultAssignment';
import { Box } from '@mui/material';

const SurveyContainer = () => {
    return (
        <Box >
            <Routes>
                <Route index element={<ListCate />} />
                <Route path="detail" element={<SurveyOfCate />} />
                <Route path="assignment" element={<Assignment />} />
                <Route path="result" element={<ResultAssignment />} />
            </Routes>
        </Box>
    )
}

export default SurveyContainer