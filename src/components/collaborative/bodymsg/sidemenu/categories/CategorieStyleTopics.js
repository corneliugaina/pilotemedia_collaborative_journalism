export const CategorieStyle = {
    chatTopic : {
        backgroundColor: '#f6f3ea',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        height: '30px',
        marginTop: '15px',
        borderLeft: '3px solid #e93f36',
        justifyContent: 'center',
        alignItems:'center',
        fontFamily: 'montserrat',
        fontSize: '1.5vw',
        cursor: 'pointer',
        transition: '0.2s',
        '&:active:visited': {
            backgroundColor: 'blue',
        },
        '&:hover': {
            backgroundColor: '#c2cbb5',
            color: '#e93f36',
            borderLeft: '3px solid #e93f36',
            
        },
        
    }
}