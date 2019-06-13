

export const AsideStyle = {

    asideTop : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'baseline',
        marginRight: '20%',
    },

    pReports : {
        writingMode : 'vertical-lr',
        textTransform : 'uppercase',
        fontFamily: 'Oswald',
        fontSize: '1.6rem',
        marginTop: '10vh',
        marginRight: '1vw',
        color: '#e93f36',
        opacity: '0.5'
    },
    '@media (max-width: 768px)': {
        
        asideTop : {
            display:'none'
        },

        }
}