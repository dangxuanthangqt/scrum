

export const setToken=(token)=>{
    localStorage.setItem("accessToken",token.accessToken);
    localStorage.setItem("refreshToken",token.refreshToken);
}
export const setAccessToken=(accessToken)=>{
    localStorage.setItem("accessToken",accessToken);
}
export const setRefreshToken=(refreshToken)=>{
    localStorage.setItem("refreshToken",refreshToken);
}
export const getAccessToken=()=>{
    return localStorage.getItem("accessToken");
}
export const getRefreshToken=()=>{
    return localStorage.getItem("refreshToken");
}
export const clearAllToken=()=>{
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
}