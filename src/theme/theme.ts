

const userRole = localStorage.getItem('userRole');
export const theme = {
    token: {
      colorPrimary: userRole === 'serviceProvider' ? "#27ae60" : '#4651ED' ,
      fontFamily: "Poppins,sans-serif",
    },
    
    components: {
      Button: {
        borderRadius: 5,
        controlHeight: 40,
        controlHeightLG: 48,
        controlHeightSM: 24,
        paddingContentHorizontal: 35,
        fontSize: 16,
        colorPrimaryHover: "none",
        border:"none",
      },
      Input: {
        controlHeight: 45,
        controlHeightLG: 45,
        controlHeightSM: 38,
        colorBorder: "#c4c4c4",
        borderRadius: 5,
      },
      Select: {
        controlHeight: 45,
        controlHeightLG: 45,
        controlHeightSM: 38,
        colorBorder: "#c4c4c4",
        borderRadius: 5,
      },
    },
  
} 

