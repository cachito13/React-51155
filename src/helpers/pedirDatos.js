import MOCK_DATA from '../data/MOCK_DATA.json'

//   (1) Convertimos la promesa en una funcion
export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        //cuerpo de la promesa

        //simulamos una peticion asincronica de 2 seg
        setTimeout(() => {
            // if (bool) {
                resolve(MOCK_DATA)
            // }else{
            //     reject("Promesa rechazada")
            // }                
        }, 1000);
    })
}