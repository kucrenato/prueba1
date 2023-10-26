const axios = require("axios");

// Encabezados personalizados que deseas incluir en la solicitud
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3ZWJ1c2VyIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6ODgwNjUxNTc2ODV9.ZBHSTXbiPWTpEDWu44VarEuZojkSXOwq4KJMmceagrvXhn4gysmMEO40jDVWh4rm_0t0K90rBuEIS8lFoB4F7Q",
  "Content-Type": "application/json",
  "Ocp-Apim-Subscription-Key": "231e74a9bc9048819cfdd7d8c390dc25",
};

let crearSesion = () => {
  try {
    // Datos que deseas enviar en la solicitud POST
    let data = {
      UserSessionId: generarCadenaAleatoria(32),
      ProcessOrderValue: false,
    };

    // URL de destino a la que deseas enviar la solicitud POST
    const url = "https://apieu2apip02.azure-api.net/vms/api/getorder";

    // Realizar la solicitud POST y esperar la respuesta
    const response = axios.post(url, data, { headers });

    // Manejar la respuesta exitosa aquí
    console.log("Respuesta exitosa:", response.data);
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al realizar la solicitud:", error);
  }
}

let agregarTicketsNuevo = () => {
  try {
    // Datos que deseas enviar en la solicitud POST
    const data = {
      UserSessionId: "d43ae8e996d47eba80a8c161c3d1e4ef",
      CinemaId: "0000000050",
      SessionId: "28037",
      TicketTypes: [
        { TicketTypeCode: "0002", LoyaltyRecognitionId: null, Qty: 2 },
      ],
      SelectedSeats: [
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 16,
        },
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 15,
        },
      ],
      ReturnOrder: true,
      ReturnSeatData: false,
      ProcessOrderValue: true,
      UserSelectedSeatingSupported: true,
      SkipAutoAllocation: true,
      RemoveTickets: false,
      RemoveTicketsQty: 0,
    };

    // URL de destino a la que deseas enviar la solicitud POST
    const url = "https://apieu2apip02.azure-api.net/vms/api/addTickets";

    // Realizar la solicitud POST y esperar la respuesta
    const response = axios.post(url, data, { headers });

    // Manejar la respuesta exitosa aquí
    console.log("Respuesta exitosa:", response.data);
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al realizar la solicitud:", error);
  }
}

let agregarTicketsAntiguo = () => {
    try {
      // Datos que deseas enviar en la solicitud POST
      const data = {
        UserSessionId: "d43ae8e996d47eba80a8c161c3d1e4ef",
        CinemaId: "0000000050",
        SessionId: "28037",
        TicketTypes: [
          { TicketTypeCode: "0002", LoyaltyRecognitionId: null, Qty: 2 },
        ],
        SelectedSeats: [
          {
            AreaCategoryCode: "0000000003",
            special: false,
            AreaNumber: 1,
            RowIndex: 0,
            ColumnIndex: 16,
          },
          {
            AreaCategoryCode: "0000000003",
            special: false,
            AreaNumber: 1,
            RowIndex: 0,
            ColumnIndex: 15,
          },
        ],
        ReturnOrder: true,
        ReturnSeatData: false,
        ProcessOrderValue: true,
        UserSelectedSeatingSupported: true,
        SkipAutoAllocation: true,
        RemoveTickets: true,
        RemoveTicketsQty: 2,
      };
  
      // URL de destino a la que deseas enviar la solicitud POST
      const url = "https://apieu2apip02.azure-api.net/vms/api/addTickets";
  
      // Realizar la solicitud POST y esperar la respuesta
      const response = axios.post(url, data, { headers });
  
      // Manejar la respuesta exitosa aquí
      console.log("Respuesta exitosa:", response.data.data);
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al realizar la solicitud:");
    }
  }

let generarCadenaAleatoria = (longitud) => {
    const caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cadenaAleatoria = '';
    
    for (let i = 0; i < longitud; i++) {
      const caracterAleatorio = caracteresPermitidos.charAt(Math.floor(Math.random() * caracteresPermitidos.length));
      cadenaAleatoria += caracterAleatorio;
    }
    
    return cadenaAleatoria;
  }

let service = () => {
    agregarTicketsAntiguo();
}

// Llamar a la función asincrónica
agregarTicketsAntiguo();
//agregarTickets();

//setInterval(enviarSolicitudPost, 1000);
