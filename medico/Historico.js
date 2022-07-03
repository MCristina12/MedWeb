const Cantidad_ConsultasM = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
 ];
 const Cantidad_ConsultasD = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
 ];
 const Monto_Mes = [
    3900, 2880, 2600, 1700, 1500, 1800, 2750, 2000, 2800, 3200, 4600, 5000,
 ];
 const Monto_Dia = [70, 70, 65, 30, 10, 25, 75];
 const mytable = (frec, mont, ctx) => {
    new Chart(ctx, {
       type: "line",
       data: {
          labels: frec,
          datasets: [
             {
                label: "Monto en soles",
                data: mont,
                backgroundClor: [
                   "rgba(255, 99, 132, 0.2)",
                   "rgba(54, 162, 235, 0.2)",
                   "rgba(255, 206, 86, 0.2)",
                   "rgba(75, 192, 192, 0.2)",
                   "rgba(153, 102, 255, 0.2)",
                   "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                   "rgba(255, 99, 132, 1)",
                   "rgba(54, 162, 235, 1)",
                   "rgba(255, 206, 86, 1)",
                   "rgba(75, 192, 192, 1)",
                   "rgba(153, 102, 255, 1)",
                   "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1.5,
             },
          ],
       },
    });
 };
 
 const valor = document.getElementById("valor");
 const contenedor = document.getElementById("contenedor_tabla");
 
 //primer render
 const ctx = document.createElement("canvas");
 mytable(Cantidad_ConsultasM, Monto_Mes, ctx);
 contenedor.appendChild(ctx);
 
 valor.addEventListener("change", () => {
    //funcion anonima
    console.log(valor.value);
    contenedor.innerHTML = "";
    if (valor.value === "Dias") {
       const ctx = document.createElement("canvas");
       mytable(Cantidad_ConsultasD, Monto_Dia, ctx);
       contenedor.appendChild(ctx);
    } else if (valor.value === "Meses") {
       const ctx = document.createElement("canvas");
       mytable(Cantidad_ConsultasM, Monto_Mes, ctx);
       contenedor.appendChild(ctx);
    }
 });
 