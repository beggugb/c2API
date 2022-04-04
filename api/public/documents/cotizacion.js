module.exports = (img1,img2,cotizacion,empresa,cliente,items,nombres,email,observaciones,fecha,hora) => {        
    var Logo     = `<img src="${img1}"/>`        
    var productos = "<table class='tables-detalles' cellspacing='0' cellpadding='0'>";
    productos += "<tr>";       
        productos += "<td width='10%' class='com'>Img</td>";
        productos += "<td width='15%' class='com'>Código</td>";        
        productos += "<td width='40%' class='com'>Artículo</td>";                
        productos += "<td width='10%' class='com'>Precio</td>";
        productos += "<td width='10%' class='com'>Cantidad</td>";
        productos += "<td width='15%' class='com'>SubTotal</td>";              
        productos += "</tr>";
    for(var i in items){
        productos += "<tr>";       
        productos += "<td width='10%' class='cobes'>"+`<img src="${img2+items[i].articulo.filename}" border="0" alt="logo" width="25" height="25"/>`+"</td>";
        productos += "<td width='15%' class='cobes'>"+items[i].articulo.codigo+"</td>";        
        productos += "<td width='40%' class='cobes'>"+items[i].articulo.nombre+"</td>";                        
        productos += "<td width='10%' class='cobes'>"+parseFloat(items[i].valor).toFixed(2)+" Bs.</td>";                        
        productos += "<td width='10%' class='cobes'>"+items[i].cantidad+"</td>";
        productos += "<td width='15%' class='cobes'>"+(parseFloat(items[i].valor) * parseFloat(items[i].cantidad))+"</td>";        
        productos += "</tr>";
    }
        productos += "<tr>";               
        productos += "<td colspan='4'></td>";
        productos += "<td width='10%' class='cobet'>"+cotizacion.nroItems+"</td>";
        productos += "<td width='10%' class='cobet'>"+parseFloat(cotizacion.total).toFixed(2)+" Bs.</td>";                        
        productos += "</tr>";
 productos += "</table>"; 
   
   return `<html>
   <head>
     <meta charset="utf8">
     <title>Cotizacion - UNITY</title>
     <style>
         html, body {
           margin: 0;
           padding: 0;
           font-family: 'Sackers Gothic Std';
           font-weight: 500;
            font-size: 11px;
           background: rgb(241,241,241);
           -webkit-print-color-adjust: exact;
           box-sizing: border-box;
         }
   
         .page {
           position: relative;
           height: 100%;
           width: 100%;
           display: block;
           background: white;
           page-break-after: auto;        
           overflow: hidden;
         }
   
         @media print {
           body {
             background: white;
           }
   
           .page {
             margin: 0;
             height: 100%;
             width: 100%;
           }        
         }
        .contenedor {        
          height: 98%;
          padding: 5px;          
        }
  
        .titulo {
          border-bottom : 1px solid #eaeaea;
          border-radius: 3px;
          height: 67px;
          padding: 5px;
          width: 97%;
         
        }
                
        .logos {          
          border-radius: 3px;
          height: 20%;
          width: 20%;          
          text-align: left;
        }
        .logos img {
          height: 65px;
          width: 67px;          
        }
        .titulos {          
          border-radius: 3px;
          height: 67px;
          width: 99%;          
        }    
        .table-datos {                    
          height: 25px;
          padding: 5px;
          width: 99%;
        }  
        .table-datos td {            
          font-size: 9px;
        }
        .rtitulo{
          text-align: right;          
          font-weight: bold;
          font-size: 17px;
        }
        .ctitulo{
          text-align: left;          
          font-weight: bold;
          font-size: 17px;
        }
        .ltitulo{
          text-align: left;                    
          font-size: 16px;
        }
        .ttitulo{
          text-align: left;                              
          font-size: 8px !important;     
          font-weight: bold;  
          padding:2px;   
        }
        .stitulo{
          text-align: left;                    
          font-size: 8px !important;          
          padding:2px;
        }
        .cliente {
          border: 1px solid #eaeaea;
          border-radius: 3px;
          height: 65px;
          padding: 3px;
          width: 100%;
        }
        .items {
          margin-top: 10px;
          border: 1px solid #eaeaea;
          border-radius: 3px;
          height: 580px;
          padding: 3px;
          width: 100%;
        }
        .tables-detalles {
          border: 1px solid #eaeaea;
          width: 100%;
        }
        .tables-detalles td{
          
        }
        .com{
          text-align: left;                    
          font-size: 8px !important;          
          padding:2px;
          background-color: #e9e9e9;
          border: 1px solid #eaeaea;
        }
        .cobes{
          text-align: left;                    
          font-size: 8px !important;          
          padding:2px;          
          border: 1px solid #eaeaea;
        }
        .cobet{
          text-align: left;                    
          font-size: 8px !important;          
          padding:2px;                    
          font-weight: bold;  
        }
        .hora{
          text-align: left;                    
          font-size: 7px !important;          
          padding:2px;                    
        }
       </style>
   </head>
   <body>
    <div class="page">
      <div class="contenedor">
        <div class="titulo">                      
         <div class="titulos">
          <table class="table-datos" cellspacing="0" cellpadding="0">
            <tr>
              <td width="30%" rowspan="4" class="logos">${Logo}</td>                            
              <td width="70%" class="rtitulo">Cotización # ${cotizacion.id}</td>                          
            </tr>
            <tr><td width="70%" class="ctitulo">${empresa.nombre}</td></tr> 
            <tr><td width="70%" class="ltitulo">${empresa.direccion}</td></tr>
            <tr><td width="70%" class="ltitulo">${empresa.email}</td></tr>               
          </table>
         <div>
        </div>  
        
        <div class="cliente">
          <table class="table-datos" cellspacing="0" cellpadding="0">
            <tr>
              <td width="15%" class="ttitulo">Cliente :</td>                            
              <td width="70%" class="stitulo">${cliente.nombres}</td>                          
            </tr>
            <tr>
              <td width="15%" class="ttitulo">Teléfono :</td>                            
              <td width="70%" class="stitulo">${cliente.telefono}</td>                          
            </tr>
            <tr>
              <td width="15%" class="ttitulo">Dirección :</td>                            
              <td width="70%" class="stitulo">${cliente.direccion}</td>                          
            </tr>
            <tr>
              <td width="15%" class="ttitulo">Email :</td>                            
              <td width="70%" class="stitulo">${cliente.email}</td>                          
            </tr>
                          
          </table>
        </div>

        <div class="items">
          ${productos}
        </div>
        <p class="hora">Fecha y Hora : ${fecha} - ${hora} </p>
      </div>
    </div>      
   </body>
 </html>`;
   };
   