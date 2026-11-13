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
  titulo: "Guatemala.",
  lugares: ["Volcán de Fuego."]
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
  imagenes: [
    {
      tipo: "secuencia",
      rutas: [
        "/imagenes/historia_natural_de_las_cosas_particulares/1.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/2.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/3.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/4.jpg"
      ],
      intervalo: 500,
      textoDespues: `Historia natural de las cosas particulares surge de una exploración del Álbum de Chocolatinas Jet en su edición “Historia Natural” y de cómo sus imágenes despertaron fantasías a toda una generación en torno al mundo desconocido que aparecía en sus páginas. Hay cosas particulares que reposan en los gabinetes mentales. Suelen ser objetos que llegaron a nosotros en manos de otras personas y que, con el tiempo, se agruparon en una especie de inventario de cosas a través de las cuales aprendimos a mirar. Con este álbum quiero compartir un fragmento de los objetos dulces y queridos a los que siempre regreso. Llenarlo, dejarlo tal y como está, o completarlo con otras imágenes, es una elección personal. Esta es, ante todo, una invitación a desempolvar esas imágenes que están guardadas en el cajón de las cosas especiales y que nos enseñaron a imaginar mundos desconocidos.`
    },
    {
      tipo: "imagen",
      ruta: "/imagenes/historia_natural_de_las_cosas_particulares/5.jpg",
      textoDespues: "Colecciones: Cosas del espacio, brillos sospechosos, humanos y otros asuntos, domesticación accidentada y vida vegetal."
    },
    {
      tipo: "secuencia",
      rutas: [
        "/imagenes/historia_natural_de_las_cosas_particulares/6.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/7.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/8.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/9.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/10.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/11.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/12.jpg",
        "/imagenes/historia_natural_de_las_cosas_particulares/13.jpg"
      ],
      intervalo: 500
    },
    {
      tipo: "imagen",
      ruta: "/imagenes/historia_natural_de_las_cosas_particulares/14.jpg"
    },
    {
      tipo: "imagen",
      ruta: "/imagenes/historia_natural_de_las_cosas_particulares/15.jpg"
    },
    {
      tipo: "imagen",
      ruta: "/imagenes/historia_natural_de_las_cosas_particulares/16.jpg"
    }
  ],
  textoFinal: `Impreso en Gráficas Milenio

Medellín, 2026.`
},
  
{
  nombre: "Carro",
  slug: "carro",
  anio: "",
  descripcion: "",
  textoFinal: "Carro a escala 1:1 con pedazos de plástico y planchas de cabello.\n\nCon Jacobo Giraldo, Susana Gómez, Carraga, Susana Medina y Sebastián Betancur.\nEscuela de Artes, Universidad Nacional de Colombia, Medellín.",
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
  textoFinal: "Modelo: Estefanía López B.",
  imagenes: [1, 2, 3, 6, 7, 8].map((numero) => ({
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
    "Dirección: Valentina Vasco Restrepo y Pablo Sánchez Mejía.\nProducción: Julián Dasaca.\nDirector de fotografía: David Correa Carvajal.\nDirectores de arte: Celeste Ochoa Restrepo y David Montoya Gómez.\nAsistentes de arte: Natalia Acevedo Muñoz y Arch Conaote Saldarriaga.\n\nEl sofoco cine.",
  imagenes: crearFotos("baby_not_tonight", 6)
},
{
  nombre: "El gesto inútil",
  slug: "el-gesto-inutil",
  anio: "2025, Avenida La Playa.",
  descripcion: "",
  imagenes: [
    {
      tipo: "video",
      ruta: "/imagenes/el_gesto_inutil/1.mp4",
      textoDespues: `¿Qué pasa cuando el aire se escapa y la forma se pierde?

Si solo queda el vacío sin un aire que pueda darle forma a un contenedor ¿Se puede decir que sigue siendo reconocible?

Dándole vueltas en ochos a muchas palabras que aparecen en las conversaciones del almuerzo, decidimos abordar el gesto inútil como eje central de nuestra entrega colectiva de Taller. En un inicio, el propósito del ejercicio dependía de fabricar una figura inflable y explorar la posibilidad de llenarla de aire por completo. Sin embargo, fue durante las primeras pruebas donde se identificó que en realidad no era posible llevar a cabo el trayecto con la figura inflada, esto sin hacer uso de algún tipo de objeto portátil. Mientras transitábamos el camino, el aire se escapaba de la corteza plástica y cada cierto tiempo parábamos para desplegar la figura en el suelo e intentar llenarla nuevamente por medio de un objeto inútil: Un inflador de bombas para fiestas. Entre el cansancio y la desilusión de materializar lo imposible, el inflador explotó y la figura quedó totalmente vacía. En la inutilidad e incapacidad de los actos, subyace el existir obstinado de la práctica humana.`
    },
    {
      tipo: "imagen",
      ruta: "/imagenes/el_gesto_inutil/2.jpg"
    }
  ],
  textoFinal: `Con Susana Medina y Jacobo Giraldo.

Escuela de Artes, Universidad Nacional de Colombia, Medellín.`
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
