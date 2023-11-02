const axios = require("axios");

// Encabezados personalizados que deseas incluir en la solicitud
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3ZWJ1c2VyIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6ODgwNjUxNTc2ODV9.ZBHSTXbiPWTpEDWu44VarEuZojkSXOwq4KJMmceagrvXhn4gysmMEO40jDVWh4rm_0t0K90rBuEIS8lFoB4F7Q",
  "Content-Type": "application/json",
  "Ocp-Apim-Subscription-Key": "231e74a9bc9048819cfdd7d8c390dc25",
};

let sessionId = "ef8ccc0fea7346905e39126af41f381a";

let crearSesion = () => {
  sessionId = generarCadenaAleatoria(32);
  console.log("Creando sesion con: ", sessionId);
  try {
    // Datos que deseas enviar en la solicitud POST
    let data = {
      UserSessionId: sessionId,
      ProcessOrderValue: false,
    };

    // URL de destino a la que deseas enviar la solicitud POST
    const url = "https://apieu2apip02.azure-api.net/vms/api/getorder";

    // Realizar la solicitud POST y esperar la respuesta
    const response = axios.post(url, data, { headers });

    // Manejar la respuesta exitosa aquí
    console.log("Sesion creada");
    return sessionId;
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al crear sesion: ", error);
  }
};

let agregarTicketsNuevo = async () => {
  console.log("==========================");
  console.log("AGREGANDO TICKETS NUEVOS");
  sessionId = crearSesion();
  try {
    // Datos que deseas enviar en la solicitud POST
    const data = {
      UserSessionId: sessionId,
      CinemaId: "0000000050",
      SessionId: "28242",
      TicketTypes: [
        {
          TicketTypeCode: "0002",
          LoyaltyRecognitionId: null,
          Qty: 4,
        },
      ],
      SelectedSeats: [
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 13,
        },
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 12,
        },
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 11,
        },
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 10,
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
    const response = await axios.post(url, data, { headers });

    // Manejar la respuesta exitosa aquí
    console.log("Tickets nuevos agregados");
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al agregar tickets nuevos");
  }
};

let agregarTicketsAntiguo = async () => {
  console.log("==========================");
  console.log("AGREGANDO TICKETS ANTIGUOS");
  try {
    // Datos que deseas enviar en la solicitud POST
    const data = {
      UserSessionId: sessionId,
      CinemaId: "0000000050",
      SessionId: "28242",
      TicketTypes: [
        {
          TicketTypeCode: "0002",
          LoyaltyRecognitionId: null,
          Qty: 4,
        },
      ],
      SelectedSeats: [
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 13,
        },
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 12,
        },
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 11,
        },
        {
          AreaCategoryCode: "0000000003",
          special: false,
          AreaNumber: 1,
          RowIndex: 0,
          ColumnIndex: 10,
        },
      ],
      ReturnOrder: true,
      ReturnSeatData: false,
      ProcessOrderValue: true,
      UserSelectedSeatingSupported: true,
      SkipAutoAllocation: true,
      RemoveTickets: true,
      RemoveTicketsQty: 4,
    };

    // URL de destino a la que deseas enviar la solicitud POST
    const url = "https://apieu2apip02.azure-api.net/vms/api/addTickets";

    // Realizar la solicitud POST y esperar la respuesta
    const response = await axios.post(url, data, { headers });

    // Manejar la respuesta exitosa aquí
    return "Tickets viejos agregados";
  } catch (error) {
    // Manejar errores aquí
    console.error("Error al agregar tickets viejos");
    throw error.response.status;
  }
};

let generarCadenaAleatoria = (longitud) => {
  const caracteresPermitidos = "abcdefghijklmnopqrstuvwxyz0123456789";
  let cadenaAleatoria = "";

  for (let i = 0; i < longitud; i++) {
    const caracterAleatorio = caracteresPermitidos.charAt(
      Math.floor(Math.random() * caracteresPermitidos.length)
    );
    cadenaAleatoria += caracterAleatorio;
  }

  return cadenaAleatoria;
};

let service = () => {
  agregarTicketsAntiguo()
    .then((rsp) => console.log(rsp))
    .catch(() => agregarTicketsNuevo());
};

// Llamar a la función asincrónica
setInterval(service, 240000);
