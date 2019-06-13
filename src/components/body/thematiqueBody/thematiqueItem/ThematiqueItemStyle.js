
export const ThematiqueItemStyle = theme => ( {

    //Mobile first
    //@media(max-width: 768px) 
    reportage:{
        borderBottom: 'solid 10px grey',
        textAlign: 'center',
        height: 130,
    },

    link:{
        width: 50,
        height: 30,
        position: 'absolute',
        right: 15,
        
    },


    title: {    
        fontFamily: 'Oswald', 
        fontSize : '100%',
    },
    
    subtitle: {
        fontFamily: 'Montserrat',
        fontSize : '65%',
    },

    button:{
        left: 0,
        color: '#ffffff',
        border: 'none',
        position: 'relative',
        fontSize: '0.6em',
        fontFamily: 'Montserrat',
        textTransform: 'lowercase',
        borderRadius: 5,
        backgroundColor: 'grey',
        marginRight: 10,
        padding:'3px',
        
    },

    wrap:{
        display: 'flex',
        paddingRight:'10px',
        position: 'relative',
        // width: 400,
        // height: 200,
    },

    /* Quand c'est en desktop */
    // @media(max-width: 769px)
})
