import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main:'hsl(26, 100%, 55%)',
            light:'hsl(25, 100%, 94%)',
        },

        secondary : {
            light:'hsl(220, 14%, 75%)',
            main:'hsl(219, 9%, 45%)',
            dark:'hsl(220, 13%, 13%)'
        },

        text : {
            light:'hsl(0, 0%, 100%)',
            main:'hsl(223, 64%, 98%)',
            dark:'rgb(0, 0, 0,0.75)',

        }
    },

    typography : {
        fontFamily: ['Kumbh Sans', 'sans-serif'].join(','),
        fontWeightBold:700,
        fontWeightRegular:400,
    },

    breakpoints : {
        lg: '1200px',
        md:'900px',
        sm:'600px',
        xs:'320px',
    },

    transitions : {
        duration : {
            enteringScreen: 225,
            leavingScreen: 195,

        }
    }
});

