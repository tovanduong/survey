

import { Box, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';
const ListCate = ({ categoryProps, surveyProps }) => {

    return (
        <Container>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                {categoryProps && categoryProps.map((el) => {
                    return <Card key={el.id} sx={{ width: "150px", height: '100px', border: '1px solid gray', }}>
                        <CardContent sx={{ width: '100%', padding: '0 !important', height: '100%' }} >
                            <Typography variant="body2 " sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                {el.name}
                            </Typography>
                        </CardContent>
                    </Card>
                })}
            </Box >
        </Container>
    )
}

export default ListCate