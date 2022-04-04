import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        width: '100vw',
        minHeight: '100vh',
        backgroundImage: "url('./assets/image/background-login.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: 'no-repeat',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingRight: '5%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'right'
    },
    wellcome: {
        fontSize: '24px !important',
    },
    loginTitle: {
        fontSize: '55px !important',
    },
    forms: {
        width: '600px',
        height: '100%',
        fontSize: '28px',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: '40px',
        padding: '44px',
        marginTop: '20px'
    },
    title: {
        display: 'flex',
        marginBottom: '20px !important',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    btnToggle: {
        fontSize: '24px',
        float: 'right',
        maxWidth: '200px',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    linkButton: {
        margin: '40px 0px 0px 215px !important',
        padding: '15px 92px !important',
        background: '#779341 !important',
        borderRadius: '10px !important',
        color: '#FFF !important',
        fontSize: '16px !important',
    },
    loginbtn: {
        display: 'block',
        textAlign: 'right',
        marginTop: '30px',
        cursor: 'pointer',
        textDecoration: 'none'
    }
});


