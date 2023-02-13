import React from 'react'

const Horrario_tabla = () => {
  return (
    <div className="container mx-auto mt-5">
    <h1 className="text-center font-semibold text-4xl text-blue-900">
      HORRARIO 1/2023 INFORMATICA UMSA
      
    </h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        PRIMER SEMESTRE (GRUPO 6)
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            INF 111 PROGRAMACION I, PAR. "C" (LUNES - MIERCOLES P4-A1) y (VIERNES LASIN 1 y LASIN 2) <br />
            INF 112 FUNDAMENTOS DIGITALES, PAR. "F" (LUNES - MIERCOLES SS-A2) <br />
            INF 113 PROGRAMACION WEB I, PAR. "E" (MARTES - JUEVES LASIN 3) <br />
            INF 114 ALGEBRA, PAR. "B" (MARTES - JUEVES PABELLON E) <br />
            INF 115 CALCULO I, PAR. "D" (MARTES - JUEVES AULA 04-02-09 EDIF ANTIGUO) <br />
            INF 116 FISICA, PAR. "F" (LUNES - MIERCOLES SS-A3)
          </p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" class="px-6 py-3">
              Hora
            </th>
            <th scope="col" class="px-6 py-3">
              Lunes
            </th>
            <th scope="col" class="px-6 py-3">
              Martes
            </th>
            <th scope="col" class="px-6 py-3">
              Miercoles
            </th>
            <th scope="col" class="px-6 py-3">
              Jueves
            </th>
            <th scope="col" class="px-6 py-3">
              Viernes
            </th>             
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              8:00 a 10:00
            </th>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4">PAR. "E" <br /> INF 113</td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4">PAR. "E" <br /> INF 113</td>
            <td class="px-6 py-4">PAR. "C" <br /> INF 111</td>
            
            {/* <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td> */}
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              10:00 a 12:00
            </th>
            <td class="px-6 py-4">PAR. "C" <br /> INF 111</td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4">PAR. "C" <br /> INF 111</td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4">PAR. "C" <br /> INF 111</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              12:00 a 14:00
            </th>
            <td class="px-6 py-4 text-gray-800"> ... <br /> ...</td>
            <td class="px-6 py-4 text-gray-800"> ... <br /> ...</td>
            <td class="px-6 py-4 text-gray-800"> ... <br /> ...</td>
            <td class="px-6 py-4 text-gray-800"> ... <br /> ...</td>
            <td class="px-6 py-4 text-gray-800"> ... <br /> ...</td>              
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              14:00 a 16:00
            </th>
            <td class="px-6 py-4">PAR. "F" <br />INF 116</td>
            <td class="px-6 py-4">PAR. "B" <br />INF 114</td>
            <td class="px-6 py-4">PAR. "F" <br />INF 116</td>
            <td class="px-6 py-4">PAR. "B" <br />INF 114</td>  
            <td class="px-6 py-4 text-gray-800"> ... <br /> ...</td>                       
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              16:00 a 18:00
            </th>
            <td class="px-6 py-4">PAR. "F" <br /> INF 112</td>
            <td class="px-6 py-4">PAR. "D" <br /> INF 115</td>
            <td class="px-6 py-4">PAR. "F" <br /> INF 112</td>
            <td class="px-6 py-4">PAR. "D" <br /> INF 115</td>
            <td class="px-6 py-4 text-gray-800"> ... <br /> ...</td>    
                    
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Horrario_tabla