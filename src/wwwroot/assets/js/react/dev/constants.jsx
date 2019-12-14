
export const Urls = {

}

export const Routes = {
    DEFAULT: "/",
    INDEX: "/",
}

export const Runtime = {
    IS_DEBUG: true
}
export const HttpErrorHandler = function (response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}