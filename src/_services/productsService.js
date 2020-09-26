import { authHeader } from '../_helpers';
import { authenticationService } from '../_services';

export const productsService ={
  getProducts
};

function getProducts(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/products`, requestOptions).then(handleResponse);
}

function handleResponse(response){
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                authenticationService.logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            console.log("error");
            return Promise.reject(error);
        }

        return new Promise((resolve,reject)=>{
                resolve(data);
                return;
        });
    });

}