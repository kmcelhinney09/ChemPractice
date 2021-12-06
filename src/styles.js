import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        padding: "20px 0",
    },
    card: {
        maxWidth: '345px',
        display: 'flex',
        flexDirection:  'column',
    },

    cardMedia: {
        height:0,
        paddingTop: '128%'
    },

    cardContent: {
        flexGrow: 1
    },
}))

export default useStyles;