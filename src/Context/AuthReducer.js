const AuthRecducer = (state, action) => {
  // console.log("rducer")
  switch (action.type) {
    case "Create_FileName":
      return {
        FileName: action.payload,
        SelectedFile:""
    
      };
    case "Create_Selected_FileName":
      
      return {
       
        FileName: action.payload.FileName,
        SelectedFile:action.payload.SelectedFile
      };
    // case "LOGIN_FAILURE":
    //   return {
    //     user: null,
    //     ikcAmount:0,
    //     isFetching: false,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};

export default AuthRecducer;
