////// 0 respuesta por el estudiante
////// 1 respuesta opcion simple

var Arraypreguntas = [
    // pagina 10 hecha
    {
        tipo: "multiple",
        pregunta: '<b>Selecciona</b> al tipo de migración a la que se refiere.<br> El migrante estará en el lugar de destino solo por un tiempo determinado',
        opciones: ['Migración temporal', 'Migración Voluntaria', 'Migración Forzada'],
        correcta: 'Migración temporal',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: 'Falta de tazas de empleo.',
        opciones: ['Causa natural ', 'Causa economía ', 'Causa sociopolítico'],
        correcta: 'Causa sociopolítico',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: 'Aumenta la población de destino y reduce en el país de origen.',
        opciones: ['Consecuencia cultural ', 'Consecuencia social ', 'Consecuencia demográfica'],
        correcta: 'Consecuencia demográfica',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración?',
        opciones: ['Movimiento de animales ', 'Desplazamiento de personas', 'Cambio climático '],
        correcta: 'Desplazamiento de personas',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuáles son las principales razones para migrar?',
        opciones: ['Exploración ', 'Búsqueda de empleo, seguridad o mejores oportunidades  ', 'preferencias alimenticias '],
        correcta: 'Búsqueda de empleo, seguridad o mejores oportunidades  ',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración interna?',
        opciones: ['Movimiento dentro del mismo pais', 'Cambio de continente ', 'viaje interplanetario'],
        correcta: 'Movimiento dentro del mismo pais',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuál es la diferencia entre inmigración y migración?',
        opciones: ['Ambas se refieren al mismo proceso ', 'Inmigración es llegar a un nuevo lugar, emigración es salir', 'Inmigración es salir, emigración es llegar'],
        correcta: 'Inmigración es llegar a un nuevo lugar, emigración es salir',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es un refugiado?',
        opciones: ['Persona que busca trabajo en otro país', 'Persona que huye de conflictos o persecuciones', 'Turista temporal '],
        correcta: 'Persona que huye de conflictos o persecuciones',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo afecta la migración a las comunidades de origen?',
        opciones: ['No tiene impacto', 'Puede generar remesas y cambios culturales', 'Incrementa la conflictividad'],
        correcta: 'Puede generar remesas y cambios culturales',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración forzada?',
        opciones: ['Decisiones voluntarias de traslado', 'Movimiento obligado debido a conflictos o desastres', 'Desplazamiento por turismo'],
        correcta: 'Movimiento obligado debido a conflictos o desastres',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuál es el papel de la migración en el desarrollo económico?',
        opciones: ['No afecta el desarrollo económico', 'Puede contribuir mediante la mano de obra y diversidad', 'Obstaculiza el desarrollo'],
        correcta: 'Puede contribuir mediante la mano de obra y diversidad',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué son las políticas migratorias?',
        opciones: ['Reglas para la migración de aves', 'Normativas gubernamentales sobre el movimiento de personas', 'Estrategias para el cambio climático'],
        correcta: 'Normativas gubernamentales sobre el movimiento de personas',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuál es la diferencia entre migración interna e internacional?',
        opciones: ['Ambas se refieren al mismo proceso', 'Migración interna es dentro del país, internacional es entre países', 'Migración internacional es dentro del país, migración interna es entre países'],
        correcta: 'Migración interna es dentro del país, internacional es entre países',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la xenofobia?',
        opciones: ['Amor por otras culturas', 'Rechazo o miedo hacia los extranjeros', 'Integración cultural'],
        correcta: 'Rechazo o miedo hacia los extranjeros',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo pueden contribuir los inmigrantes a la diversidad cultural?',
        opciones: ['Restringiendo sus prácticas culturales', 'Aportando nuevas tradiciones y perspectivas', 'Ignorando las costumbres locales'],
        correcta: 'Aportando nuevas tradiciones y perspectivas',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es el asilo político?',
        opciones: ['Refugio para animales', 'Protección otorgada a personas perseguidas por motivos políticos', 'Estación de tren internacional'],
        correcta: 'Protección otorgada a personas perseguidas por motivos políticos',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración circular?',
        opciones: ['Desplazamiento en línea recta', 'Movimiento de ida y vuelta entre dos lugares', 'Rotación de la Tierra'],
        correcta: 'Movimiento de ida y vuelta entre dos lugares',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo puede afectar la migración a la demografía de un lugar?',
        opciones: ['No tiene impacto en la demografía', 'Puede cambiar la composición y tamaño de la población', 'Solo afecta a la población adulta'],
        correcta: 'Puede cambiar la composición y tamaño de la población',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la remesa?',
        opciones: ['Tipo de migración', 'Envío de dinero de los migrantes a sus países de origen', 'Documento migratorio'],
        correcta: 'Envío de dinero de los migrantes a sus países de origen',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuál es el papel de las organizaciones internacionales en la migración?',
        opciones: ['No tienen ningún papel', 'Ayudan a gestionar crisis migratorias y establecer políticas', 'Promueven la migración indiscriminada'],
        correcta: 'Ayudan a gestionar crisis migratorias y establecer políticas',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo puede la migración afectar el medio ambiente?',
        opciones: ['No tiene impacto en el medio ambiente', 'Puede aumentar la demanda de recursos naturales', 'Mejora la sostenibilidad ambiental'],
        correcta: 'Puede aumentar la demanda de recursos naturales',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración irregular?',
        opciones: ['Desplazamiento planificado', 'Movimiento sin cumplir con las leyes migratorias', 'Migración estacional'],
        correcta: 'Movimiento sin cumplir con las leyes migratorias',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuáles son las consecuencias sociales de la migración?',
        opciones: ['No tiene impacto social', 'Puede generar diversidad cultural y tensiones sociales', 'Solo afecta a los migrantes'],
        correcta: 'Puede generar diversidad cultural y tensiones sociales',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración económica?',
        opciones: ['Desplazamiento motivado por factores políticos', 'Movimiento en busca de oportunidades económicas', 'Cambio de residencia por razones de salud'],
        correcta: 'Movimiento en busca de oportunidades económicas',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es el "brain drain" o fuga de cerebros?',
        opciones: ['Pérdida de conocimiento y talento debido a la migración', 'Promoción de la educación', 'Desarrollo cerebral acelerado'],
        correcta: 'Pérdida de conocimiento y talento debido a la migración',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo pueden las comunidades receptoras beneficiarse de la migración?',
        opciones: ['No hay beneficios para las comunidades receptoras', 'A través de la contribución cultural y económica de los migrantes', 'Generando conflictos culturales'],
        correcta: 'A través de la contribución cultural y económica de los migrantes',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuál es la relación entre migración y derechos humanos?',
        opciones: ['No hay relación', 'La migración puede afectar los derechos humanos y requiere protección', 'Los derechos humanos no se aplican a los migrantes'],
        correcta: 'La migración puede afectar los derechos humanos y requiere protección',
        tiempo: "30 segundos",
        segundos: "30",
    },








    {
        tipo: "multiple",
        pregunta: '¿Cuál es el impacto de la migración en la educación de los migrantes?',
        opciones: ['No tiene impacto', 'Puede afectar el acceso a la educación', 'Mejora la calidad educativa'],
        correcta: 'Puede afectar el acceso a la educación',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración pendular?',
        opciones: ['Desplazamiento constante', 'Movimiento diario entre el hogar y el trabajo', 'Viaje turístico frecuente'],
        correcta: 'Movimiento diario entre el hogar y el trabajo',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo afecta la migración a la salud de los migrantes?',
        opciones: ['No tiene impacto en la salud', 'Puede influir en el acceso a servicios de salud', 'Mejora la salud de manera significativa'],
        correcta: 'Puede influir en el acceso a servicios de salud',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración interna de retorno?',
        opciones: ['Movimiento dentro del mismo país sin regreso', 'Vuelta al lugar de origen dentro del mismo país', 'Cambio de continente temporal'],
        correcta: 'Vuelta al lugar de origen dentro del mismo país',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuál es el papel de la tecnología en la gestión de la migración?',
        opciones: ['No tiene relevancia', 'Facilita el monitoreo y la gestión de flujos migratorios', 'Provoca un aumento en la migración'],
        correcta: 'Facilita el monitoreo y la gestión de flujos migratorios',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración estacional?',
        opciones: ['Desplazamiento planificado', 'Movimiento en busca de climas específicos en diferentes épocas', 'Desplazamiento durante las vacaciones'],
        correcta: 'Movimiento en busca de climas específicos en diferentes épocas',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo pueden los países mitigar los desafíos de la migración?',
        opciones: ['Cerrando fronteras', 'Fomentando la colaboración internacional y la planificación', 'Ignorando la migración'],
        correcta: 'Fomentando la colaboración internacional y la planificación',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración de retorno voluntario?',
        opciones: ['Vuelta al país de origen por elección propia', 'Regreso al lugar de origen por obligación', 'Retorno temporal con intenciones futuras'],
        correcta: 'Vuelta al país de origen por elección propia',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuáles son los efectos económicos de la migración en los países de origen?',
        opciones: ['Puede generar envíos de dinero y reducir la pobreza', 'Provoca recesiones económicas', 'No hay efectos económicos'],
        correcta: 'Puede generar envíos de dinero y reducir la pobreza',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración transnacional?',
        opciones: ['Movimiento entre varios países', 'Desplazamiento dentro de un país', 'Cambio de residencia por razones familiares'],
        correcta: 'Movimiento entre varios países',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo influye la migración en la cultura de los países de destino?',
        opciones: ['No tiene impacto cultural', 'Enriquece la diversidad cultural', 'Provoca homogeneización cultural'],
        correcta: 'Enriquece la diversidad cultural',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración climática?',
        opciones: ['Desplazamiento debido a cambios en el clima', 'Movimiento motivado por eventos meteorológicos extremos', 'Desplazamiento de animales por condiciones climáticas'],
        correcta: 'Movimiento motivado por eventos meteorológicos extremos',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuál es el papel de la migración en la dinámica demográfica global?',
        opciones: ['Contribuye al crecimiento poblacional y al envejecimiento', 'No afecta la dinámica demográfica', 'Genera disminución de la población mundial'],
        correcta: 'Contribuye al crecimiento poblacional y al envejecimiento',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo pueden los gobiernos abordar la integración de los migrantes?',
        opciones: [' Facilitando programas de integración cultural y laboral', 'Ignorando la integración', 'Limitando la presencia de migrantes'],
        correcta: ' Facilitando programas de integración cultural y laboral',
        tiempo: "30 segundos",
        segundos: "30",
    }, {
        tipo: "multiple",
        pregunta: '¿Qué es la migración de retorno forzado?',
        opciones: ['Regreso al lugar de origen por elección', 'Vuelta obligada debido a políticas migratorias', 'Desplazamiento temporal sin retorno'],
        correcta: 'Vuelta obligada debido a políticas migratorias',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuáles son los desafíos éticos relacionados con la migración?',
        opciones: [' Infracción de derechos humanos y discriminación', 'Énfasis en la autonomía individual', 'No hay desafíos éticos'],
        correcta: ' Infracción de derechos humanos y discriminación',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración step migration?',
        opciones: ['Desplazamiento en etapas sucesivas', 'Cambio de residencia por motivos laborales', 'Movimiento de un lugar a otro directamente'],
        correcta: 'Desplazamiento en etapas sucesivas',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo afecta la migración a la distribución de la riqueza en los países receptores?',
        opciones: ['No tiene impacto en la distribución de la ', 'Contribuye a la desigualdad o redistribución de la riqueza', 'Genera estabilidad económica'],
        correcta: 'Contribuye a la desigualdad o redistribución de la riqueza',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración de retorno temporal?',
        opciones: ['Regreso al lugar de origen de manera permanente', 'Vuelta al país de origen por un período limitado', 'Desplazamiento sin intenciones de regreso'],
        correcta: 'Vuelta al país de origen por un período limitado',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo pueden las políticas migratorias impactar la integración de los migrantes?',
        opciones: ['No tienen impacto en la integración', 'Solo afectan a los migrantes económicos', 'Pueden facilitar o dificultar la integración'],
        correcta: 'Pueden facilitar o dificultar la integración',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración endogámica?',
        opciones: ['Desplazamiento hacia el interior del país', 'Movimiento dentro de un grupo étnico o social específico', 'Desplazamiento debido a condiciones climáticas'],
        correcta: 'Movimiento dentro de un grupo étnico o social específico',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo afecta la migración a la fuerza laboral en los países receptores?',
        opciones: ['No hay impacto en la fuerza laboral', 'Provoca el desempleo masivo', 'Contribuye a la diversificación y a la escasez de mano de obra'],
        correcta: 'Contribuye a la diversificación y a la escasez de mano de obra',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración en cadena?',
        opciones: ['Desplazamiento masivo', 'Movimiento secuencial de personas siguiendo a familiares o conocidos', 'Desplazamiento debido a catástrofes naturales'],
        correcta: 'Movimiento secuencial de personas siguiendo a familiares o conocidos',
        tiempo: "30 segundos",
        segundos: "30",
    }, {
        tipo: "multiple",
        pregunta: '¿Cuáles son los efectos sociales de la migración en los países de origen?',
        opciones: ['No tiene efectos sociales', ' Puede generar vínculos transnacionales y cambios en la estructura social', 'Provoca estabilidad social'],
        correcta: ' Puede generar vínculos transnacionales y cambios en la estructura social',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración intergeneracional?',
        opciones: ['Movimiento entre diferentes generaciones', 'Desplazamiento de una región a otra dentro del mismo país', 'Cambio de residencia debido a factores familiares'],
        correcta: 'Desplazamiento de una región a otra dentro del mismo país',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo afecta la migración al mercado laboral en los países de destino?',
        opciones: ['No tiene impacto en el mercado laboral', 'Provoca la escasez de empleo', 'Puede generar competencia y contribuir a la diversidad laboral'],
        correcta: 'Puede generar competencia y contribuir a la diversidad laboral',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Qué es la migración secundaria?',
        opciones: ['Movimiento inicial hacia un nuevo lugar', 'Desplazamiento adicional después de la llegada al lugar de destino', 'Desplazamiento debido a eventos naturales'],
        correcta: 'Desplazamiento adicional después de la llegada al lugar de destino',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cuál es la relación entre la migración y el cambio climático?',
        opciones: ['No hay relación', 'La migración puede ser exacerbada por eventos climáticos extremos', 'La migración contribuye al cambio climático'],
        correcta: 'La migración puede ser exacerbada por eventos climáticos extremos',
        tiempo: "30 segundos",
        segundos: "30",
    },
    {
        tipo: "multiple",
        pregunta: '¿Cómo afecta la migración a la identidad cultural de los migrantes?',
        opciones: ['No tiene impacto en la identidad cultural', 'Puede generar cambios y tensiones en la identidad cultural', 'Preserva la identidad cultural de manera intacta'],
        correcta: 'Puede generar cambios y tensiones en la identidad cultural',
        tiempo: "30 segundos",
        segundos: "30",
    },
];

var Arrayretos = [
    {
        tipo: 'reto',
        titulo: '¿Cuáles son algunos de los principales factores que impulsan la migración a nivel global?',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: '¿Qué diferencias puedes encontrar entre la migración voluntaria y la migración forzada?',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: '¿Cómo afecta la migración a los países de origen y destino en términos sociales y culturales?',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: '¿Cuáles son algunas de las consecuencias positivas y negativas de la migración para los individuos y las comunidades afectadas?',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: '¿Cuáles son algunas de las diferencias y similitudes entre la migración interna y la internacional?',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: '¿Cómo puede la migración estar relacionada con los problemas medioambientales?',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: '¿Cuál es la diferencia entre un refugiado y un inmigrante económico?',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: '¿Puede la migración influir en la identidad cultural de un país?',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Menciona dos consecuencias de la migración.',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Menciona que es la corriente migratoria.',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Menciona un país receptor de las corrientes migratorias.',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Menciona que es la migración.',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Menciona porque las personas migran.',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Menciona que tipos de regiones hay en el momento de migrar.',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Mencione las causas de la migración.',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Menciona que dificultades habría en el momento de migrar.',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Mencione las causas naturales de la migración.',
        segundos: '60',
        tiempo: '1 minuto'
    },
    {
        tipo: 'reto',
        titulo: 'Mencione las consecuencias sociales en las migraciones.',
        segundos: '60',
        tiempo: '1 minuto'
    }
]