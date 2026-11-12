// Función para crear series de fotografías numeradas
function crearFotos(carpeta, cantidad) {
  return Array.from({ length: cantidad }, (_, indice) => ({
    tipo: "imagen",
    ruta: `/imagenes/${carpeta}/${indice + 1}.jpg`
  }));
}

export const categorias = [
  // GALERÍA
  {
    nombre: "Fotografía",
    tipo: "categoria",
    proyectos: [
      {
        nombre: "Sueltas",
        slug: "sueltas",
        anio: "",
        subtitulo: "clic",
        descripcion: "",
        imagenes: crearFotos("sueltas", 15)
      },
      {
        nombre: "México",
        slug: "mexico",
        anio: "2026",
        descripcion: "",
        imagenes: Array.from({ length: 87 }, (_, indice) => {
          const numero = indice + 1;

          return {
            tipo: "imagen",
            ruta: `/imagenes/mexico/${numero}.jpg`,
            textoDespues:
              numero === 40
                ? "Las fotos perdidas de Taxco (Guerrero), Juliantla (el pueblo de Joan Sebastian), Oaxaca de Juárez y uno de los lugares más hermosos del mundo, el Museo de Antropología en CDMX."
                : numero === 82
                ? "El niño más hermoso del mundo"
                : ""
          };
        }),

        informacionFinal: [
          {
            tipo: "introduccion",
            texto: "Ubicaciones listadas en orden de aparición"
          },
          {
            tipo: "seccion",
            titulo: "Ciudad de México.",
            lugares: [
              "Barrio Colonia Centro, Sector Isabel la Católica.",
              "Antiguo Templo y Oratorio de San Felipe Neri “El Viejo”.",
              "Antiguo Palacio del Ayuntamiento.",
              "Catedral Metropolitana de la Ciudad de México.",
              "Edificio La Mexicana.",
              "Antiguo Hospicio de San Fernando.",
              "Palacio de Bellas Artes.",
              "Alameda Central.",
              "Barrio Chino.",
              "Biblioteca Miguel Lerdo de Tejada.",
              "Colonia Condesa.",
              "Ángel de la Independencia.",
              "Secretaría de Educación Pública."
            ]
          },
          {
            tipo: "seccion",
            titulo: "Oaxaca de Juárez.",
            lugares: [
              "Instituto de las Artes Gráficas (IAGO).",
              "Centro histórico.",
              "Mercado 20 de Noviembre."
            ]
          },
          {
            tipo: "seccion",
            titulo: "San José del pacífico.",
            lugares: []
          },
          {
            tipo: "seccion",
            titulo: "Costa Pacífica (Oax).",
            lugares: [
              "Playa Chahue.",
              "Bahía de Cacaluta.",
              "Playa Mazunte.",
              "Punta Cometa."
            ]
          },
          {
            tipo: "seccion",
            titulo: "Ciudad de México",
            lugares: [
              "Coyoacán.",
              "Panteón Rococó.",
              "Mercado de Artesanías La Ciudadela."
            ]
          },
          {
            tipo: "credito",
            texto: "Revelado y digitalizado:",
            credito: "Central Fotográfica Oaxaca- Fotosensible Lab"
          }
        ]
      },
      {
        nombre: "Bon Appetit",
        slug: "bon-appetit",
        anio: "2024",
        descripcion: "",
        textoFinal: "ig @bon_appetit_jardin",
        imagenes: [
          { tipo: "imagen", ruta: "/imagenes/bon_appetit/1.jpg" },
          { tipo: "video", ruta: "/imagenes/bon_appetit/2.mov" },
          { tipo: "imagen", ruta: "/imagenes/bon_appetit/3.jpg" },
          { tipo: "imagen", ruta: "/imagenes/bon_appetit/4.jpg" },
          { tipo: "imagen", ruta: "/imagenes/bon_appetit/5.jpg" }
        ]
      },
      {
        nombre: "La Polilla Artesanal",
        slug: "la-polilla-artesanal",
        anio: "2023",
        descripcion: "",
        textoFinal: "ig @casataller_lapolilla",
        imagenes: crearFotos("la_polilla_artesanal", 10)
      },
      {
        nombre: "Corazón Amarillo",
        slug: "corazon-amarillo",
        anio: "2024",
        descripcion: "",
        textoFinal: "ig @corazonamarilloaccesorios",
        imagenes: crearFotos("corazon_amarillo", 10)
      },
      {
        nombre: "Estefanía",
        slug: "estefania",
        anio: "2025",
        descripcion: "",
        imagenes: crearFotos("estefania", 5)
      },
      {
        nombre: "Juan José",
        slug: "juan-jose",
        anio: "2024",
        descripcion: "",
        imagenes: crearFotos("juan_jose", 9)
      },
      {
        nombre: "Maria Antonia",
        slug: "maria-antonia",
        anio: "2022",
        descripcion: "",
        imagenes: crearFotos("maria_antonia", 6)
      },
      {
        nombre: "Un barco pirata",
        slug: "un-barco-pirata",
        anio: "",
        subtitulo: "fragmentos",
        descripcion: "",
        imagenes: crearFotos("un_barco_pirata", 8)
      },
      {
        nombre: "Antonella",
        slug: "antonella",
        anio: "2023",
        descripcion: "",
        textoFinal: "Fotografía I, Comunicación Audiovisual UdeM.",
        imagenes: crearFotos("antonella", 8)
      },
      {
        nombre: "María José Mejía",
        slug: "maria-jose-mejia",
        anio: "",
        subtitulo: "Y Manuel Mejía Vallejo",
        descripcion: "",
        imagenes: crearFotos("maria_jose_mejia", 10)
      }
    ]
  },

  // BITÁCORA
  {
    nombre: "Bitácora",
    tipo: "categoria",
    proyectos: [
      {
        nombre: "Materialidad textual",
        slug: "materialidad-textual",
        anio: "",
        descripcion: "",
        imagenes: crearFotos("materialidad_textual", 7)
      },
      {
        nombre: "El origen del color",
        slug: "el-origen-del-color",
        anio: "",
        descripcion: "",
        imagenes: crearFotos("el_origen_del_color", 11)
      },
      {
        nombre: "Animaciones",
        slug: "animaciones",
        anio: "",
        subtitulo: "",
        descripcion: "",
        textoAntes: "Hannah Höch",
        textoFinal: "En compañía de Susana Medina Zuluaga",
        imagenes: [
          {
            tipo: "video",
            ruta: "/imagenes/hannah_hoch/1.mov",
            muted: true
          }
        ]
      },
      {
        nombre: "Recortes",
        slug: "recortes",
        anio: "",
        descripcion: "",
        imagenes: []
      }
    ]
  }
];

export const proyectosIndependientes = [
  {
    nombre: "Historia natural de las cosas particulares",
    slug: "historia-natural-de-las-cosas-particulares",
    anio: "2026",
    descripcion: "",
    imagenes: []
  },
  {
    nombre: "Carro",
    slug: "carro",
    anio: "",
    descripcion: "",
    imagenes: [
      { tipo: "imagen", ruta: "/imagenes/carro/01.jpg" },
      { tipo: "imagen", ruta: "/imagenes/carro/02.jpg" },
      { tipo: "video", ruta: "/imagenes/carro/03.mp4" },
      { tipo: "imagen", ruta: "/imagenes/carro/04.jpg" },
      { tipo: "imagen", ruta: "/imagenes/carro/05.jpg" },
      { tipo: "imagen", ruta: "/imagenes/carro/06.jpg" },
      { tipo: "imagen", ruta: "/imagenes/carro/07.jpg" }
    ]
  },
  {
    nombre: "Casa de Emily Dickinson",
    slug: "casa-de-emily-dickinson",
    anio: "2023",
    descripcion: "",
    enlaceFinal: {
      texto: "https://www.instagram.com/reel/CupCvsxPyhd/",
      url: "https://www.instagram.com/reel/CupCvsxPyhd/"
    },
    imagenes: Array.from({ length: 6 }, (_, indice) => {
      const numero = indice + 1;
      const esVideo = numero === 3 || numero === 5;

      return {
        tipo: esVideo ? "video" : "imagen",
        ruta: `/imagenes/casa_de_emily_dickinson/${numero}.${esVideo ? "mp4" : "jpg"}`,
        textoDespues:
          numero === 1
            ? "A la muerte, a la memoria y al amor."
            : ""
      };
    })
  },
  {
    nombre: "Jeff Wall",
    slug: "jeff-wall",
    anio: "2025",
    descripcion: "",
    textoFinal: "Modelo: Estefanía López B.\nFotografía II",
    imagenes: [1, 2, 3, 4, 6, 7, 8].map((numero) => ({
  tipo: "imagen",
  ruta: `/imagenes/jeff_wall/${numero}.jpg`
}))
  },
  {
    nombre: "Baby not tonight",
    slug: "baby-not-tonight",
    anio: "",
    subtitulo: "próximamente",
    descripcion: "",
    textoFinal:
      "Dirección: Valentina Vasco Restrepo y Pablo Sánchez Mejía\nProducción: Julián Casaca\nDirector de fotografía: David Correa Carvajal\nDirectores de arte: Celeste Ochoa Restrepo y David Montoya Gómez\nAsistentes de arte: Natalia Acevedo Muñoz y Arch Conaote Saldarriaga\n\nEl sofoco cine.",
    imagenes: crearFotos("baby_not_tonight", 6)
  },
  {
    nombre: "El gesto inútil",
    slug: "el-gesto-inutil",
    anio: "2025",
    descripcion: "",
    imagenes: [
      {
        tipo: "video",
        ruta: "/imagenes/el_gesto_inutil/1.mp4"
      }
    ]
  },
  {
    nombre: "Inventario de un vuelo",
    slug: "inventario-de-un-vuelo",
    anio: "2026",
    descripcion: "",
    textoFinal: "Modelo: Jacobo Giraldo Giraldo.",
    imagenes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15].map((numero) => ({
  tipo: "imagen",
  ruta: `/imagenes/inventario_de_un_vuelo/${numero}.jpg`
}))
  },
  {
    nombre: "Nadadora",
    slug: "nadadora",
    anio: "2025",
    descripcion: "",
    textoFinal: "Herramientas digitales.",
    imagenes: crearFotos("nadadora", 2)
  }
];
