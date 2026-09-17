/* ══ Spinvra RD — Multilenguaje (ES / EN / PT) ══
   El wrapper guarda la elección en localStorage y avisa por postMessage.
   Aquí se aplica a todos los textos de las 22 diapositivas. */
(function () {
  "use strict";

  var L = {
    es: {
      foot: "Spinvra RD · Propuesta de crecimiento",
      cv_eyebrow: "Propuesta de adquisición y crecimiento",
      cv_country: "República Dominicana",
      cv_sub: "Una nueva capa de adquisición local que complementa las acciones existentes de Spinvra: visibilidad que ya se genera hoy, convertida en registros, primeros depósitos y crecimiento medible.",
      cv_c1: "Adquisición", cv_c2: "Conversión", cv_c3: "Retención", cv_c4: "Referidos", cv_c5: "Escala",
      rs_eyebrow: "Resumen ejecutivo",
      rs_h: "Un activo existente.<br><span class=\"g\">Un sistema para convertirlo en crecimiento.</span>",
      rs_sub: "Spinvra ya opera y ya genera visibilidad con influencers y acciones promocionales. Esta propuesta añade una capa local de adquisición, conversión y comunidad — construida sobre un activo concreto.",
      rs_k1: "Activo", rs_n1: "~10,700", rs_d1: "contactos del sector de casinos y juegos",
      rs_k2: "Método", rs_n2: "Probar · Medir<br>Optimizar · Escalar", rs_d2: "decisiones basadas en datos",
      rs_k3: "Arranque", rs_n3: "300–500", rs_d3: "contactos en el piloto inicial",
      rs_m5: "Cinco motores, un solo sistema",
      rs_mc: ["Adquisición", "Conversión", "Comunidad", "Remarketing", "Referidos"],
      ex_eyebrow: "Experiencia previa en el sector",
      ex_h: "Experiencia que respalda <span class=\"g\">la estrategia</span>",
      ex_sub: "Nuestra propuesta parte de experiencia práctica trabajando con marcas y operaciones del sector de casinos, tanto en entornos físicos como digitales: captación, promociones, activaciones y comunicación con este tipo de audiencia.",
      ex_d1: "Experiencia relacionada con su operación online.",
      ex_d23: "Experiencia en acciones del sector de casino y promoción.",
      ex_line: "Experiencia en entornos físicos y digitales del sector.",
      ex_note: "Marcas con las que hemos trabajado previamente. Experiencia acumulada en el sector; sin alianzas oficiales vigentes.",
      da_eyebrow: "Trayectoria",
      da_h: "De la experiencia<br><span class=\"g\">al activo</span>",
      da_q: "Los aproximadamente 10,700 contactos no aparecen de manera aislada: forman parte de una trayectoria previa trabajando y desarrollando relaciones dentro de este sector.",
      da_note: "Conocimiento del mercado · dinámicas promocionales · comportamiento de la audiencia.",
      da_f1: "Experiencia en el sector",
      da_f2: "Conocimiento del público",
      da_f3: "Audiencia potencial",
      da_f5: "Oportunidad de adquisición para Spinvra",
      da_contactos: "CONTACTOS",
      nm_eyebrow: "Nuestro punto de partida",
      nm_cap: "Contactos potenciales",
      nm_sub: "Una audiencia relacionada previamente con el sector de casinos y juegos — lista para una estrategia de captación progresiva.",
      nm_tag: "Activo inicial — no un límite",
      op_eyebrow: "La oportunidad",
      op_h: "De visibilidad <span class=\"g\">a conversión</span>",
      op_k1: "Lo que Spinvra ya tiene",
      op_1: ["Plataforma y tecnología en operación", "Influencers y acciones promocionales", "Códigos promocionales diarios", "Programa de referidos de 3 niveles"],
      op_k2: "Lo que añade esta propuesta",
      op_2: ["Captación local dirigida y progresiva", "Conversión paso a paso hasta el depósito", "Comunidad y remarketing permitido", "Medición por canal y por campaña"],
      op_line: "Las acciones existentes generan visibilidad. <span class=\"gold\">Esta propuesta añade la estructura que la convierte en crecimiento.</span>",
      ob_q: "¿Cómo convertimos <span class=\"gold\">~10,700 contactos</span> en un canal de adquisición <span class=\"gold\">medible, optimizable y escalable?</span>",
      ob_c: ["Medible", "Optimizable", "Escalable", "Complementario a lo existente"],
      mt_eyebrow: "Metodología",
      mt_h: "Probar · Medir<br><span class=\"g\">Optimizar · Escalar</span>",
      mt_sub: "La base no se contacta de una sola vez. Se trata como un activo estratégico: cada ciclo comienza pequeño, se mide y solo escala lo que demuestra resultados.",
      mt_ch: ["Piloto de 300–500", "Diferentes mensajes", "Diferentes promociones", "Solo escala lo que funciona"],
      mt_c: ["1 · Probar", "2 · Medir", "3 · Optimizar", "4 · Escalar"],
      mt_loop: "Ciclo continuo",
      pl_eyebrow: "Fase 1 · Piloto",
      pl_cap: "Contactos",
      pl_test_label: "Qué probamos",
      pl_test: ["Diferentes mensajes", "Diferentes promociones", "Diferentes mecanismos de entrada"],
      pl_m_label: "Qué medimos",
      pl_m: ["Contactados", "Respuestas", "Clics", "Registros", "Primeros depósitos", "Actividad", "Referidos", "Rendimiento por campaña"],
      pl_imp: "Importante",
      pl_note: "Fases de alcance para pruebas y expansión — <b style=\"color:var(--ink);\">no resultados garantizados.</b>",
      cp_eyebrow: "Segmentación y captación",
      cp_h: "No un mensaje para todos: <span class=\"g\">tres conceptos a comparar</span>",
      cp_seglabel: "Segmentos:",
      cp_seg: ["Jugadores recientes", "Jugadores inactivos", "Sensibles a promociones", "Potencial de referidos"],
      cp_t: ["PROMOCIÓN", "COMUNIDAD", "EXPERIENCIA"],
      cp_d: [
        "Comunicación centrada en un beneficio o promoción disponible.",
        "Invitación a una comunidad con acceso voluntario a promociones, códigos y actividades.",
        "Invitación a descubrir Spinvra mediante una primera dinámica o campaña."
      ],
      cp_line: "Comparamos resultados y <span class=\"gold\">escalamos solo lo que funciona.</span>",
      fn_eyebrow: "Funnel de conversión",
      fn_h: "De audiencia <span class=\"g\">a referido</span>",
      fn_t: ["AUDIENCIA POTENCIAL", "CONTACTO", "REGISTRO", "PRIMER DEPÓSITO", "COMUNIDAD", "REFERIDO"],
      fn_k1: "Principio",
      fn_d1: "Cada etapa se mide.<br>Cada transición se optimiza.",
      fn_k2: "Referido",
      fn_d2: "El funnel no termina en el depósito: el usuario convertido genera nuevos usuarios.",
      fn_d3: "Diagrama conceptual — las proporciones son ilustrativas.",
      cm_eyebrow: "Spinvra Community",
      cm_h: "La adquisición puntual se convierte<br><span class=\"g\">en relación continua</span>",
      cm_w: ["WhatsApp", "Telegram"],
      cm_sub: "Canales iniciales para el mercado dominicano — participación voluntaria.",
      cm_g: ["Promociones", "Códigos", "Dinámicas", "Campañas", "Referidos", "Concursos", "Anuncios", "Ganadores", "Actividades", "Contenido"],
      cm_line: "No es un grupo de enlaces: <span class=\"gold\">es un canal de valor continuo.</span>",
      pr_cap: "Códigos promocionales diarios de Spinvra con premios aleatorios — convertidos en <b style=\"color:var(--ink);\">anticipación, participación y recurrencia.</b>",
      pr_levels_label: "Niveles de campaña",
      pr_lv: [
        "Códigos y actividades recurrentes",
        "Microcampañas y pequeños incentivos",
        "Campañas especiales",
        "<b class=\"gold\">SPINVRA BIG WEEK</b> — acelerador futuro, con condiciones oficiales"
      ],
      pr_dyn_label: "Dinámicas para no solo publicar códigos",
      pr_dt: ["Código Sorpresa", "Hora fija", "Varios al día", "Actividad previa", "Semana de promociones", "Hora Spinvra"],
      pr_dd: ["aparece sin avisar", "liberado a una hora determinada", "múltiples códigos en un mismo día", "una acción sencilla libera el código", "una temática por día", "momento diario de la comunidad"],
      pr_note: "El premio grande no se usa de inmediato: <b style=\"color:var(--ink);\">primero audiencia y comunidad; después, el acelerador.</b>",
      rm_eyebrow: "Remarketing permitido",
      rm_h: "Cuatro estados, <span class=\"g\">cuatro estrategias</span>",
      rm_t: ["Contactado sin respuesta", "Interesado sin registro", "Registrado sin primer depósito", "Usuario convertido"],
      rm_d: [
        "Re-contacto con un ángulo diferente y nueva oferta de entrada",
        "Recordatorio oportuno + incentivo claro para completar el registro",
        "Activación del primer depósito con promoción de bienvenida",
        "Comunidad, recurrencia con códigos y activación de referidos"
      ],
      rm_tag: "Frecuencia controlada",
      rm_note: "Secuencias con límite de contactos — sin saturar al usuario.",
      rf_eyebrow: "Sistema de referidos · 3 niveles",
      rf_h: "El segundo motor <span class=\"g\">de adquisición</span>",
      rf_op: "Operación",
      rf_lv: "Nivel",
      rf_users: ["USUARIO A", "USUARIO B", "USUARIO C"],
      rf_ex: "Ejemplo ilustrativo sobre un primer depósito de US$10, según el programa de referidos de Spinvra.",
      rf_msg: "“Los aproximadamente 10,700 contactos representan el punto de partida,<br>no necesariamente el límite del crecimiento.”",
      eq_eyebrow: "Equipo y capacidad de ejecución",
      eq_h: "Capacidad operativa detrás de cada etapa",
      eq_t: ["DIRECCIÓN Y<br>ESTRATEGIA", "DISEÑO<br>GRÁFICO", "CONTENIDO Y<br>AUDIOVISUAL", "COMMUNITY", "DATA Y<br>PERFORMANCE"],
      eq_d: [
        "Planificación · campañas · coordinación · seguimiento · análisis",
        "Piezas promocionales · material de comunidad · contenido digital",
        "Edición profesional · video vertical · Reels · cobertura de actividades",
        "WhatsApp · Telegram · programación · seguimiento de campañas",
        "Tracking · registros · depósitos · conversión · referidos · canales"
      ],
      eq_line: "Operación local bajo coordinación directa — <span class=\"gold\">lista para ejecutar desde la semana 1.</span>",
      mx_eyebrow: "Medición",
      mx_h: "Todo se mide. <span class=\"g\">Solo se escala lo que funciona.</span>",
      mx_badge: "Vista ilustrativa",
      mx_k: ["Contactos alcanzados", "Respuestas", "Clics", "Registros", "Primeros depósitos", "Registro → depósito", "Miembros comunidad", "Actividad", "Referidos N1", "Referidos N2", "Referidos N3", "Coste de adquisición"],
      mx_tag: "Sin resultados inventados",
      mx_note: "El dashboard se completa con datos reales desde el primer piloto; el rendimiento por campaña define dónde invertir.",
      pn_eyebrow: "Plan de 30 días",
      pn_h: "De la preparación <span class=\"g\">a la primera escala</span>",
      pn_t: ["Preparación", "Piloto", "Optimización", "Primera escala"],
      pn_d: [
        "Tracking y comprensión del sistema · organización de la audiencia · segmentación · comunidad · diseño · mensajes · promociones",
        "300–500 contactos · diferentes mensajes · primeras promociones · primeros registros y depósitos · medición",
        "Comparar campañas A/B/C · mejor comunicación y promoción · remarketing · referidos · segunda prueba",
        "Ampliar con la estrategia de mejor rendimiento · analizar conversión · optimizar comunidad · preparar el siguiente ciclo"
      ],
      pn_3090: "30–90 días",
      pn_strip: "Ampliar segmentos · fortalecer comunidad · más referidos · nuevas campañas · contenido local · mejor remarketing · <b style=\"color:var(--ink);\">invertir más solo donde hay resultados.</b>",
      es_eyebrow: "Modelo de escalamiento",
      es_h: "Cada etapa se abre <span class=\"g\">cuando la anterior demuestra conversión</span>",
      es_k: ["Etapa 1", "Etapa 2", "Etapa 3", "Etapa 4"],
      es_sub: ["piloto", "mejor combinación validada", "expansión controlada", "audiencia restante + nuevas fuentes"],
      es_t4: "Nuevos segmentos",
      es_tag: "Decisión con datos",
      es_note: "Las cifras son fases de alcance para pruebas y expansión — el ritmo real lo marca la conversión.",
      ac_eyebrow: "Segunda etapa · Expansión futura",
      ac_h: "Activaciones y <span class=\"g\">promociones cruzadas</span>",
      ac_k: ["El negocio", "Spinvra", "Operación local"],
      ac_d: ["Aporta ubicación y audiencia", "Aporta plataforma, promoción y beneficios", "Aporta concepto, diseño, contenido y ejecución"],
      ac_s: [
        "restaurantes · lounges · discotecas · eventos · entretenimiento adulto autorizado",
        "códigos · premios · experiencia de registro",
        "estrategia · personal promocional · stands · QR"
      ],
      ac_chain: ["Personas alcanzadas", "Interacciones", "Escaneos QR", "Registros", "Primeros depósitos"],
      ac_line: "Cada activación se mide con su propio QR, código o enlace cuando sea técnicamente posible.",
      pc_eyebrow: "Ventaja operativa adicional",
      pc_h: "Punta Cana: una ventaja adicional,<br><span class=\"g\">no el centro de la estrategia</span>",
      pc_k1: "Público que concentra",
      pc_c: ["Dominicanos", "Residentes extranjeros", "Latinos", "Estadounidenses", "Turistas internacionales"],
      pc_k2: "Alianzas a evaluar",
      pc_d2: "Experiencia previa en promociones cruzadas con establecimientos. Alianzas solo con lugares apropiados y autorizados, siempre medibles.",
      pc_line: "Primero validamos el modelo digital. <span class=\"gold\">Después exploramos la capa física.</span>",
      cl_eyebrow: "Spinvra RD",
      cl_h: "10,700 es el punto de partida.",
      cl_sub: "El objetivo es construir un sistema de crecimiento que pueda superar esa audiencia inicial: probado, medido, optimizado y escalado.",
      cl_words: ["PROBAR.", "MEDIR.", "OPTIMIZAR.", "ESCALAR."],
      cl_foot: "Spinvra aporta la plataforma, la tecnología y las promociones. Nosotros aportamos el mercado, la audiencia inicial y la ejecución local."
    },

    en: {
      foot: "Spinvra RD · Growth proposal",
      cv_eyebrow: "Acquisition & growth proposal",
      cv_country: "Dominican Republic",
      cv_sub: "A new local acquisition layer that complements Spinvra’s existing efforts: the visibility already being generated today, turned into sign-ups, first deposits and measurable growth.",
      cv_c1: "Acquisition", cv_c2: "Conversion", cv_c3: "Retention", cv_c4: "Referrals", cv_c5: "Scale",
      rs_eyebrow: "Executive summary",
      rs_h: "An existing asset.<br><span class=\"g\">A system to turn it into growth.</span>",
      rs_sub: "Spinvra already operates and already generates visibility through influencers and promotional actions. This proposal adds a local layer of acquisition, conversion and community — built on a concrete asset.",
      rs_k1: "Asset", rs_n1: "~10,700", rs_d1: "contacts from the casino and gaming sector",
      rs_k2: "Method", rs_n2: "Test · Measure<br>Optimize · Scale", rs_d2: "data-driven decisions",
      rs_k3: "Kickoff", rs_n3: "300–500", rs_d3: "contacts in the initial pilot",
      rs_m5: "Five engines, one system",
      rs_mc: ["Acquisition", "Conversion", "Community", "Remarketing", "Referrals"],
      ex_eyebrow: "Prior experience in the sector",
      ex_h: "Experience that supports <span class=\"g\">the strategy</span>",
      ex_sub: "Our proposal is grounded in hands-on experience working with brands and operations in the casino sector, across both physical and digital environments: player acquisition, promotions, activations and communication with this type of audience.",
      ex_d1: "Experience related to its online operation.",
      ex_d23: "Experience in casino-sector actions and promotion.",
      ex_line: "Experience in both physical and digital environments of the sector.",
      ex_note: "Brands we have previously worked with. Accumulated experience in the sector; no current official partnerships.",
      da_eyebrow: "Track record",
      da_h: "From experience<br><span class=\"g\">to asset</span>",
      da_q: "The ~10,700 contacts do not appear in isolation: they are part of a prior track record of working and building relationships within this sector.",
      da_note: "Market knowledge · promotional dynamics · audience behavior.",
      da_f1: "Experience in the sector",
      da_f2: "Knowledge of the audience",
      da_f3: "Potential audience",
      da_f5: "Acquisition opportunity for Spinvra",
      da_contactos: "CONTACTS",
      nm_eyebrow: "Our starting point",
      nm_cap: "Potential contacts",
      nm_sub: "An audience previously related to the casino and gaming sector — ready for a progressive acquisition strategy.",
      nm_tag: "Initial asset — not a limit",
      op_eyebrow: "The opportunity",
      op_h: "From visibility <span class=\"g\">to conversion</span>",
      op_k1: "What Spinvra already has",
      op_1: ["Platform and technology in operation", "Influencers and promotional actions", "Daily promotional codes", "3-level referral program"],
      op_k2: "What this proposal adds",
      op_2: ["Targeted, progressive local acquisition", "Step-by-step conversion up to the deposit", "Community and permitted remarketing", "Measurement per channel and per campaign"],
      op_line: "Existing actions generate visibility. <span class=\"gold\">This proposal adds the structure that turns it into growth.</span>",
      ob_q: "How do we turn <span class=\"gold\">~10,700 contacts</span> into an acquisition channel that is <span class=\"gold\">measurable, optimizable and scalable?</span>",
      ob_c: ["Measurable", "Optimizable", "Scalable", "Complementary to what exists"],
      mt_eyebrow: "Methodology",
      mt_h: "Test · Measure<br><span class=\"g\">Optimize · Scale</span>",
      mt_sub: "The base is not contacted all at once. It is treated as a strategic asset: every cycle starts small, is measured, and only what proves results gets scaled.",
      mt_ch: ["300–500 pilot", "Different messages", "Different promotions", "Only scale what works"],
      mt_c: ["1 · Test", "2 · Measure", "3 · Optimize", "4 · Scale"],
      mt_loop: "Continuous cycle",
      pl_eyebrow: "Phase 1 · Pilot",
      pl_cap: "Contacts",
      pl_test_label: "What we test",
      pl_test: ["Different messages", "Different promotions", "Different entry mechanisms"],
      pl_m_label: "What we measure",
      pl_m: ["Contacted", "Responses", "Clicks", "Sign-ups", "First deposits", "Activity", "Referrals", "Performance per campaign"],
      pl_imp: "Important",
      pl_note: "Reach phases for testing and expansion — <b style=\"color:var(--ink);\">not guaranteed results.</b>",
      cp_eyebrow: "Segmentation & acquisition",
      cp_h: "Not one message for everyone: <span class=\"g\">three concepts to compare</span>",
      cp_seglabel: "Segments:",
      cp_seg: ["Recent players", "Inactive players", "Promotion-sensitive", "Referral potential"],
      cp_t: ["PROMOTION", "COMMUNITY", "EXPERIENCE"],
      cp_d: [
        "Communication focused on an available benefit or promotion.",
        "An invitation to a community with voluntary access to promotions, codes and activities.",
        "An invitation to discover Spinvra through a first dynamic or campaign."
      ],
      cp_line: "We compare results and <span class=\"gold\">scale only what works.</span>",
      fn_eyebrow: "Conversion funnel",
      fn_h: "From audience <span class=\"g\">to referral</span>",
      fn_t: ["POTENTIAL AUDIENCE", "CONTACT", "SIGN-UP", "FIRST DEPOSIT", "COMMUNITY", "REFERRAL"],
      fn_k1: "Principle",
      fn_d1: "Every stage is measured.<br>Every transition is optimized.",
      fn_k2: "Referral",
      fn_d2: "The funnel does not end at the deposit: converted users generate new users.",
      fn_d3: "Conceptual diagram — proportions are illustrative.",
      cm_eyebrow: "Spinvra Community",
      cm_h: "One-time acquisition becomes<br><span class=\"g\">an ongoing relationship</span>",
      cm_w: ["WhatsApp", "Telegram"],
      cm_sub: "Initial channels for the Dominican market — voluntary participation.",
      cm_g: ["Promotions", "Codes", "Dynamics", "Campaigns", "Referrals", "Contests", "Announcements", "Winners", "Activities", "Content"],
      cm_line: "Not a link-dumping group: <span class=\"gold\">a channel of ongoing value.</span>",
      pr_cap: "Spinvra’s daily promotional codes with random prizes — turned into <b style=\"color:var(--ink);\">anticipation, participation and recurrence.</b>",
      pr_levels_label: "Campaign levels",
      pr_lv: [
        "Recurring codes and activities",
        "Micro-campaigns and small incentives",
        "Special campaigns",
        "<b class=\"gold\">SPINVRA BIG WEEK</b> — future accelerator, under official terms"
      ],
      pr_dyn_label: "Dynamics so it’s not just about posting codes",
      pr_dt: ["Surprise code", "Fixed hour", "Several per day", "Pre-activity", "Promo week", "Spinvra Hour"],
      pr_dd: ["appears unannounced", "released at a set time", "multiple codes on the same day", "a simple action unlocks the code", "one theme per day", "the community’s daily moment"],
      pr_note: "The big prize is not used right away: <b style=\"color:var(--ink);\">first audience and community; then, the accelerator.</b>",
      rm_eyebrow: "Permitted remarketing",
      rm_h: "Four states, <span class=\"g\">four strategies</span>",
      rm_t: ["Contacted, no response", "Interested, not signed up", "Signed up, no first deposit", "Converted user"],
      rm_d: [
        "Re-contact with a different angle and a new entry offer",
        "Timely reminder + a clear incentive to complete sign-up",
        "First-deposit activation with a welcome promotion",
        "Community, recurrence with codes and referral activation"
      ],
      rm_tag: "Controlled frequency",
      rm_note: "Sequences with a contact cap — never saturating the user.",
      rf_eyebrow: "Referral system · 3 levels",
      rf_h: "The second acquisition <span class=\"g\">engine</span>",
      rf_op: "Operation",
      rf_lv: "Level",
      rf_users: ["USER A", "USER B", "USER C"],
      rf_ex: "Illustrative example based on a US$10 first deposit, per Spinvra’s referral program.",
      rf_msg: "“The ~10,700 contacts are the starting point,<br>not necessarily the limit of growth.”",
      eq_eyebrow: "Team & execution capability",
      eq_h: "Operating capability behind every stage",
      eq_t: ["DIRECTION &<br>STRATEGY", "GRAPHIC<br>DESIGN", "CONTENT &<br>AUDIOVISUAL", "COMMUNITY", "DATA &<br>PERFORMANCE"],
      eq_d: [
        "Planning · campaigns · coordination · follow-up · analysis",
        "Promotional pieces · community material · digital content",
        "Professional editing · vertical video · Reels · event coverage",
        "WhatsApp · Telegram · scheduling · campaign follow-up",
        "Tracking · sign-ups · deposits · conversion · referrals · channels"
      ],
      eq_line: "Local operation under direct coordination — <span class=\"gold\">ready to execute from week 1.</span>",
      mx_eyebrow: "Measurement",
      mx_h: "Everything is measured. <span class=\"g\">Only what works gets scaled.</span>",
      mx_badge: "Illustrative view",
      mx_k: ["Contacts reached", "Responses", "Clicks", "Sign-ups", "First deposits", "Sign-up → deposit", "Community members", "Activity", "Referrals L1", "Referrals L2", "Referrals L3", "Acquisition cost"],
      mx_tag: "No invented results",
      mx_note: "The dashboard is filled with real data from the first pilot; per-campaign performance defines where to invest.",
      pn_eyebrow: "30-day plan",
      pn_h: "From preparation <span class=\"g\">to first scale</span>",
      pn_t: ["Preparation", "Pilot", "Optimization", "First scale"],
      pn_d: [
        "Tracking and system understanding · audience organization · segmentation · community · design · messages · promotions",
        "300–500 contacts · different messages · first promotions · first sign-ups and deposits · measurement",
        "Compare A/B/C campaigns · best message and promotion · remarketing · referrals · second test",
        "Expand with the best-performing strategy · analyze conversion · optimize community · prepare the next cycle"
      ],
      pn_3090: "30–90 days",
      pn_strip: "Expand segments · strengthen community · more referrals · new campaigns · local content · better remarketing · <b style=\"color:var(--ink);\">invest more only where there are results.</b>",
      es_eyebrow: "Scaling model",
      es_h: "Each stage opens <span class=\"g\">when the previous one proves conversion</span>",
      es_k: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"],
      es_sub: ["pilot", "best validated combination", "controlled expansion", "remaining audience + new sources"],
      es_t4: "New segments",
      es_tag: "Data-driven decisions",
      es_note: "Figures are reach phases for testing and expansion — real pace is set by conversion.",
      ac_eyebrow: "Second stage · Future expansion",
      ac_h: "Activations & <span class=\"g\">cross-promotions</span>",
      ac_k: ["The business", "Spinvra", "Local operation"],
      ac_d: ["Provides location and audience", "Provides platform, promotion and benefits", "Provides concept, design, content and execution"],
      ac_s: [
        "restaurants · lounges · nightclubs · events · authorized adult entertainment",
        "codes · prizes · sign-up experience",
        "strategy · promotional staff · stands · QR"
      ],
      ac_chain: ["People reached", "Interactions", "QR scans", "Sign-ups", "First deposits"],
      ac_line: "Each activation is measured with its own QR, code or link wherever technically possible.",
      pc_eyebrow: "Additional operating advantage",
      pc_h: "Punta Cana: an additional advantage,<br><span class=\"g\">not the center of the strategy</span>",
      pc_k1: "Audience it concentrates",
      pc_c: ["Dominicans", "Foreign residents", "Latino", "American", "International tourists"],
      pc_k2: "Partnerships to evaluate",
      pc_d2: "Prior experience in cross-promotions with establishments. Partnerships only with appropriate, authorized venues — always measurable.",
      pc_line: "First we validate the digital model. <span class=\"gold\">Then we explore the physical layer.</span>",
      cl_eyebrow: "Spinvra RD",
      cl_h: "10,700 is the starting point.",
      cl_sub: "The goal is to build a growth system that can go beyond that initial audience: tested, measured, optimized and scaled.",
      cl_words: ["TEST.", "MEASURE.", "OPTIMIZE.", "SCALE."],
      cl_foot: "Spinvra brings the platform, technology and promotions. We bring the market, the initial audience and local execution."
    },

    pt: {
      foot: "Spinvra RD · Proposta de crescimento",
      cv_eyebrow: "Proposta de aquisição e crescimento",
      cv_country: "República Dominicana",
      cv_sub: "Uma nova camada local de aquisição que complementa as ações existentes da Spinvra: a visibilidade já gerada hoje, convertida em registros, primeiros depósitos e crescimento mensurável.",
      cv_c1: "Aquisição", cv_c2: "Conversão", cv_c3: "Retenção", cv_c4: "Indicações", cv_c5: "Escala",
      rs_eyebrow: "Resumo executivo",
      rs_h: "Um ativo existente.<br><span class=\"g\">Um sistema para transformá-lo em crescimento.</span>",
      rs_sub: "A Spinvra já opera e já gera visibilidade com influenciadores e ações promocionais. Esta proposta adiciona uma camada local de aquisição, conversão e comunidade — construída sobre um ativo concreto.",
      rs_k1: "Ativo", rs_n1: "~10,700", rs_d1: "contatos do setor de cassinos e jogos",
      rs_k2: "Método", rs_n2: "Testar · Medir<br>Otimizar · Escalar", rs_d2: "decisões baseadas em dados",
      rs_k3: "Início", rs_n3: "300–500", rs_d3: "contatos no piloto inicial",
      rs_m5: "Cinco motores, um só sistema",
      rs_mc: ["Aquisição", "Conversão", "Comunidade", "Remarketing", "Indicações"],
      ex_eyebrow: "Experiência prévia no setor",
      ex_h: "Experiência que respalda <span class=\"g\">a estratégia</span>",
      ex_sub: "Nossa proposta parte de experiência prática trabalhando com marcas e operações do setor de cassinos, tanto em ambientes físicos quanto digitais: captação, promoções, ativações e comunicação com esse tipo de público.",
      ex_d1: "Experiência relacionada à sua operação online.",
      ex_d23: "Experiência em ações do setor de cassino e promoção.",
      ex_line: "Experiência em ambientes físicos e digitais do setor.",
      ex_note: "Marcas com as quais trabalhamos anteriormente. Experiência acumulada no setor; sem alianças oficiais vigentes.",
      da_eyebrow: "Trajetória",
      da_h: "Da experiência<br><span class=\"g\">ao ativo</span>",
      da_q: "Os ~10,700 contatos não aparecem de forma isolada: fazem parte de uma trajetória prévia de trabalho e de relações construídas dentro deste setor.",
      da_note: "Conhecimento do mercado · dinâmicas promocionais · comportamento do público.",
      da_f1: "Experiência no setor",
      da_f2: "Conhecimento do público",
      da_f3: "Público potencial",
      da_f5: "Oportunidade de aquisição para a Spinvra",
      da_contactos: "CONTATOS",
      nm_eyebrow: "Nosso ponto de partida",
      nm_cap: "Contatos potenciais",
      nm_sub: "Um público previamente relacionado ao setor de cassinos e jogos — pronto para uma estratégia de captação progressiva.",
      nm_tag: "Ativo inicial — não um limite",
      op_eyebrow: "A oportunidade",
      op_h: "De visibilidade <span class=\"g\">a conversão</span>",
      op_k1: "O que a Spinvra já tem",
      op_1: ["Plataforma e tecnologia em operação", "Influenciadores e ações promocionais", "Códigos promocionais diários", "Programa de indicações de 3 níveis"],
      op_k2: "O que esta proposta adiciona",
      op_2: ["Captação local dirigida e progressiva", "Conversão passo a passo até o depósito", "Comunidade e remarketing permitido", "Medição por canal e por campanha"],
      op_line: "As ações existentes geram visibilidade. <span class=\"gold\">Esta proposta adiciona a estrutura que a transforma em crescimento.</span>",
      ob_q: "Como transformamos <span class=\"gold\">~10,700 contatos</span> em um canal de aquisição <span class=\"gold\">mensurável, otimizável e escalável?</span>",
      ob_c: ["Mensurável", "Otimizável", "Escalável", "Complementar ao que já existe"],
      mt_eyebrow: "Metodologia",
      mt_h: "Testar · Medir<br><span class=\"g\">Otimizar · Escalar</span>",
      mt_sub: "A base não é contatada de uma só vez. É tratada como um ativo estratégico: cada ciclo começa pequeno, é medido e só escala o que demonstra resultados.",
      mt_ch: ["Piloto de 300–500", "Diferentes mensagens", "Diferentes promoções", "Só escala o que funciona"],
      mt_c: ["1 · Testar", "2 · Medir", "3 · Otimizar", "4 · Escalar"],
      mt_loop: "Ciclo contínuo",
      pl_eyebrow: "Fase 1 · Piloto",
      pl_cap: "Contatos",
      pl_test_label: "O que testamos",
      pl_test: ["Diferentes mensagens", "Diferentes promoções", "Diferentes mecanismos de entrada"],
      pl_m_label: "O que medimos",
      pl_m: ["Contatados", "Respostas", "Cliques", "Registros", "Primeiros depósitos", "Atividade", "Indicações", "Desempenho por campanha"],
      pl_imp: "Importante",
      pl_note: "Fases de alcance para testes e expansão — <b style=\"color:var(--ink);\">não resultados garantizados.</b>",
      cp_eyebrow: "Segmentação e captação",
      cp_h: "Não uma mensagem para todos: <span class=\"g\">três conceitos a comparar</span>",
      cp_seglabel: "Segmentos:",
      cp_seg: ["Jogadores recentes", "Jogadores inativos", "Sensíveis a promoções", "Potencial de indicações"],
      cp_t: ["PROMOÇÃO", "COMUNIDADE", "EXPERIÊNCIA"],
      cp_d: [
        "Comunicação centrada em um benefício ou promoção disponível.",
        "Convite a uma comunidade com acesso voluntário a promoções, códigos e atividades.",
        "Convite a descobrir a Spinvra por meio de uma primeira dinâmica ou campanha."
      ],
      cp_line: "Comparamos resultados e <span class=\"gold\">escalamos só o que funciona.</span>",
      fn_eyebrow: "Funil de conversão",
      fn_h: "De público <span class=\"g\">a indicação</span>",
      fn_t: ["PÚBLICO POTENCIAL", "CONTATO", "REGISTRO", "PRIMEIRO DEPÓSITO", "COMUNIDADE", "INDICAÇÃO"],
      fn_k1: "Princípio",
      fn_d1: "Cada etapa é medida.<br>Cada transição é otimizada.",
      fn_k2: "Indicação",
      fn_d2: "O funil não termina no depósito: o usuário convertido gera novos usuários.",
      fn_d3: "Diagrama conceitual — as proporções são ilustrativas.",
      cm_eyebrow: "Spinvra Community",
      cm_h: "A aquisição pontual se converte<br><span class=\"g\">em relação contínua</span>",
      cm_w: ["WhatsApp", "Telegram"],
      cm_sub: "Canais iniciais para o mercado dominicano — participação voluntária.",
      cm_g: ["Promoções", "Códigos", "Dinâmicas", "Campanhas", "Indicações", "Sorteios", "Anúncios", "Ganhadores", "Atividades", "Conteúdo"],
      cm_line: "Não é um grupo de links: <span class=\"gold\">é um canal de valor contínuo.</span>",
      pr_cap: "Códigos promocionais diários da Spinvra com prêmios aleatórios — convertidos em <b style=\"color:var(--ink);\">antecipação, participação e recorrência.</b>",
      pr_levels_label: "Níveis de campanha",
      pr_lv: [
        "Códigos e atividades recorrentes",
        "Microcampanhas e pequenos incentivos",
        "Campanhas especiais",
        "<b class=\"gold\">SPINVRA BIG WEEK</b> — acelerador futuro, com condições oficiais"
      ],
      pr_dyn_label: "Dinâmicas para não apenas publicar códigos",
      pr_dt: ["Código Surpresa", "Horário fixo", "Vários ao dia", "Atividade prévia", "Semana de promoções", "Hora Spinvra"],
      pr_dd: ["aparece sem avisar", "liberado a um horário determinado", "vários códigos no mesmo dia", "uma ação simples libera o código", "um tema por dia", "momento diário da comunidade"],
      pr_note: "O prêmio grande não é usado de imediato: <b style=\"color:var(--ink);\">primeiro público e comunidade; depois, o acelerador.</b>",
      rm_eyebrow: "Remarketing permitido",
      rm_h: "Quatro estados, <span class=\"g\">quatro estratégias</span>",
      rm_t: ["Contatado sem resposta", "Interessado sem registro", "Registrado sem primeiro depósito", "Usuário convertido"],
      rm_d: [
        "Recontato com um ângulo diferente e nova oferta de entrada",
        "Lembrete oportuno + incentivo claro para completar o registro",
        "Ativação do primeiro depósito com promoção de boas-vindas",
        "Comunidade, recorrência com códigos e ativação de indicações"
      ],
      rm_tag: "Frequência controlada",
      rm_note: "Sequências com limite de contatos — sem saturar o usuário.",
      rf_eyebrow: "Sistema de indicações · 3 níveis",
      rf_h: "O segundo motor <span class=\"g\">de aquisição</span>",
      rf_op: "Operação",
      rf_lv: "Nível",
      rf_users: ["USUÁRIO A", "USUÁRIO B", "USUÁRIO C"],
      rf_ex: "Exemplo ilustrativo sobre um primeiro depósito de US$10, conforme o programa de indicações da Spinvra.",
      rf_msg: "“Os ~10,700 contatos representam o ponto de partida,<br>não necessariamente o limite do crescimento.”",
      eq_eyebrow: "Equipe e capacidade de execução",
      eq_h: "Capacidade operacional atrás de cada etapa",
      eq_t: ["DIREÇÃO E<br>ESTRATÉGIA", "DESIGN<br>GRÁFICO", "CONTEÚDO E<br>AUDIOVISUAL", "COMMUNITY", "DADOS E<br>PERFORMANCE"],
      eq_d: [
        "Planejamento · campanhas · coordenação · acompanhamento · análise",
        "Peças promocionais · material de comunidade · conteúdo digital",
        "Edição profissional · vídeo vertical · Reels · cobertura de atividades",
        "WhatsApp · Telegram · programação · acompanhamento de campanhas",
        "Tracking · registros · depósitos · conversão · indicações · canais"
      ],
      eq_line: "Operação local sob coordenação direta — <span class=\"gold\">pronta para executar desde a semana 1.</span>",
      mx_eyebrow: "Medição",
      mx_h: "Tudo é medido. <span class=\"g\">Só se escala o que funciona.</span>",
      mx_badge: "Visão ilustrativa",
      mx_k: ["Contatos alcançados", "Respostas", "Cliques", "Registros", "Primeiros depósitos", "Registro → depósito", "Membros da comunidade", "Atividade", "Indicações N1", "Indicações N2", "Indicações N3", "Custo de aquisição"],
      mx_tag: "Sem resultados inventados",
      mx_note: "O dashboard é preenchido com dados reais desde o primeiro piloto; o desempenho por campanha define onde investir.",
      pn_eyebrow: "Plano de 30 dias",
      pn_h: "Da preparação <span class=\"g\">à primeira escala</span>",
      pn_t: ["Preparação", "Piloto", "Otimização", "Primeira escala"],
      pn_d: [
        "Tracking e compreensão do sistema · organização do público · segmentação · comunidade · design · mensagens · promoções",
        "300–500 contatos · diferentes mensagens · primeiras promoções · primeiros registros e depósitos · medição",
        "Comparar campanhas A/B/C · melhor comunicação e promoção · remarketing · indicações · segundo teste",
        "Ampliar com a estratégia de melhor desempenho · analisar conversão · otimizar comunidade · preparar o próximo ciclo"
      ],
      pn_3090: "30–90 dias",
      pn_strip: "Ampliar segmentos · fortalecer comunidade · mais indicações · novas campanhas · conteúdo local · melhor remarketing · <b style=\"color:var(--ink);\">investir mais só onde há resultados.</b>",
      es_eyebrow: "Modelo de escalonamento",
      es_h: "Cada etapa se abre <span class=\"g\">quando a anterior demonstra conversão</span>",
      es_k: ["Etapa 1", "Etapa 2", "Etapa 3", "Etapa 4"],
      es_sub: ["piloto", "melhor combinação validada", "expansão controlada", "público restante + novas fontes"],
      es_t4: "Novos segmentos",
      es_tag: "Decisão com dados",
      es_note: "Os números são fases de alcance para testes e expansão — o ritmo real é definido pela conversão.",
      ac_eyebrow: "Segunda etapa · Expansão futura",
      ac_h: "Ativações e <span class=\"g\">promoções cruzadas</span>",
      ac_k: ["O negócio", "Spinvra", "Operação local"],
      ac_d: ["Oferece local e público", "Oferece plataforma, promoção e benefícios", "Oferece conceito, design, conteúdo e execução"],
      ac_s: [
        "restaurantes · lounges · casas noturnas · eventos · entretenimento adulto autorizado",
        "códigos · prêmios · experiência de registro",
        "estratégia · promotores · stands · QR"
      ],
      ac_chain: ["Pessoas alcançadas", "Interações", "Escaneios QR", "Registros", "Primeiros depósitos"],
      ac_line: "Cada ativação é medida com seu próprio QR, código ou link sempre que tecnicamente possível.",
      pc_eyebrow: "Vantagem operacional adicional",
      pc_h: "Punta Cana: uma vantagem adicional,<br><span class=\"g\">não o centro da estratégia</span>",
      pc_k1: "Público que concentra",
      pc_c: ["Dominicanos", "Residentes estrangeiros", "Latinos", "Americanos", "Turistas internacionais"],
      pc_k2: "Parcerias a avaliar",
      pc_d2: "Experiência prévia em promoções cruzadas com estabelecimentos. Parcerias apenas com locais apropriados e autorizados, sempre mensuráveis.",
      pc_line: "Primeiro validamos o modelo digital. <span class=\"gold\">Depois exploramos a camada física.</span>",
      cl_eyebrow: "Spinvra RD",
      cl_h: "10,700 é o ponto de partida.",
      cl_sub: "O objetivo é construir um sistema de crescimento que possa superar esse público inicial: testado, medido, otimizado e escalado.",
      cl_words: ["TESTAR.", "MEDIR.", "OTIMIZAR.", "ESCALAR."],
      cl_foot: "A Spinvra traz a plataforma, a tecnologia e as promoções. Nós trazemos o mercado, o público inicial e a execução local."
    }
  };

  function set(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  function qsa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  /* Los chips son <span class="chip"><span class="dot"></span>TEXTO</span>:
     hay que tocar el nodo de texto, no el dot. */
  function chipText(chip, text) {
    if (!chip) return;
    var last = null;
    for (var i = 0; i < chip.childNodes.length; i++) {
      if (chip.childNodes[i].nodeType === 3 && chip.childNodes[i].nodeValue.trim() !== "") last = chip.childNodes[i];
    }
    if (last) last.nodeValue = text;
    else chip.appendChild(document.createTextNode(text));
  }
  function chipsText(list, texts) {
    list.forEach(function (chip, i) { chipText(chip, texts[i]); });
  }

  function apply(lang) {
    var t = L[lang] || L.es;

    // Shared footer (all 22 scenes)
    qsa(".foot > span:first-child").forEach(function (s) { s.textContent = t.foot; });

    // 01 Cover
    set("cv-eyebrow", t.cv_eyebrow);
    set("cv-country", t.cv_country);
    set("cv-sub", t.cv_sub);
    chipsText(qsa("#cv-chips .chip"), [t.cv_c1, t.cv_c2, t.cv_c3, t.cv_c4, t.cv_c5]);

    // 02 Resumen
    set("rs-eyebrow", t.rs_eyebrow);
    set("rs-h", t.rs_h);
    set("rs-sub", t.rs_sub);
    ["rs-c1", "rs-c2", "rs-c3"].forEach(function (cid, i) {
      var c = document.getElementById(cid); if (!c) return;
      var k = c.querySelector(".klabel"), n = c.querySelector(".gold, div[style*='font-size:56px'], div[style*='font-size:38px']"), d = c.querySelector(".dim");
      if (k) k.textContent = [t.rs_k1, t.rs_k2, t.rs_k3][i];
      if (n) n.innerHTML = [t.rs_n1, t.rs_n2, t.rs_n3][i];
      if (d) d.textContent = [t.rs_d1, t.rs_d2, t.rs_d3][i];
    });
    set("rs-motors-label", t.rs_m5);
    chipsText(qsa("#rs-motors .chip"), t.rs_mc);

    // 03 Experiencia
    set("ex-eyebrow", t.ex_eyebrow);
    set("ex-h", t.ex_h);
    set("ex-sub", t.ex_sub);
    var exd1 = document.querySelector("#ex-b1 .dim"); if (exd1) exd1.textContent = t.ex_d1;
    ["#ex-b2 .dim", "#ex-b3 .dim"].forEach(function (sel) { var el = document.querySelector(sel); if (el) el.textContent = t.ex_d23; });
    var exline = document.querySelector("#ex-line div:last-child"); if (exline) exline.textContent = t.ex_line;
    set("ex-note", t.ex_note);

    // 04 De la experiencia al activo
    set("da-eyebrow", t.da_eyebrow);
    set("da-h", t.da_h);
    set("da-q", t.da_q);
    set("da-note", t.da_note);
    set("da-f1", t.da_f1);
    set("da-f2", t.da_f2);
    set("da-f3", t.da_f3);
    set("da-f5", t.da_f5);
    var daCon = document.querySelector("#da-f4 span:last-child"); if (daCon) daCon.textContent = t.da_contactos;

    // 05 10,700
    set("nm-eyebrow", t.nm_eyebrow);
    set("nm-cap", t.nm_cap);
    set("nm-sub", t.nm_sub);
    set("nm-note", "<span class='tag'>" + t.nm_tag + "</span>");

    // 06 La oportunidad
    set("op-eyebrow", t.op_eyebrow);
    set("op-h", t.op_h);
    var opk1 = document.querySelector("#op-col1 .klabel"); if (opk1) opk1.textContent = t.op_k1;
    var opk2 = document.querySelector("#op-col2 .klabel"); if (opk2) opk2.textContent = t.op_k2;
    chipsText(qsa("#op-col1 > div:last-child > div"), t.op_1);
    chipsText(qsa("#op-col2 > div:last-child > div"), t.op_2);
    set("op-line", t.op_line);

    // 07 Objetivo
    set("ob-q", t.ob_q);
    chipsText(qsa("#ob-chips .chip"), t.ob_c);

    // 08 Metodología
    set("mt-eyebrow", t.mt_eyebrow);
    set("mt-h", t.mt_h);
    set("mt-sub", t.mt_sub);
    chipsText(qsa("#mt-chips .chip"), t.mt_ch);
    for (var c = 1; c <= 4; c++) set("mt-c" + c, "<span class='dot'></span>" + t.mt_c[c - 1]);
    var mtLoop = document.querySelector("#mt-ring .klabel"); if (mtLoop) mtLoop.textContent = t.mt_loop;

    // 09 Piloto
    set("pl-eyebrow", t.pl_eyebrow);
    set("pl-cap", t.pl_cap);
    set("pl-test-label", t.pl_test_label);
    chipsText(qsa("#pl-test .chip"), t.pl_test);
    set("pl-m-label", t.pl_m_label);
    for (var m = 1; m <= 8; m++) set("pl-m" + m, t.pl_m[m - 1]);
    var plTag = document.querySelector("#pl-note .tag"); if (plTag) plTag.textContent = t.pl_imp;
    var plNote = document.querySelector("#pl-note span:last-child"); if (plNote) plNote.innerHTML = t.pl_note;

    // 10 Segmentación y captación
    set("cp-eyebrow", t.cp_eyebrow);
    set("cp-h", t.cp_h);
    var cpSeg = document.querySelector("#cp-seg .klabel"); if (cpSeg) cpSeg.textContent = t.cp_seglabel;
    chipsText(qsa("#cp-seg .chip"), t.cp_seg);
    var cpCards = ["#cp-a", "#cp-b", "#cp-c"];
    cpCards.forEach(function (sel, i) {
      var card = document.querySelector(sel); if (!card) return;
      var title = card.querySelector("span:last-child"); if (title) title.textContent = t.cp_t[i];
      var desc = card.querySelector("p"); if (desc) desc.textContent = t.cp_d[i];
    });
    set("cp-line", t.cp_line);

    // 11 Funnel
    set("fn-eyebrow", t.fn_eyebrow);
    set("fn-h", t.fn_h);
    for (var ft = 1; ft <= 6; ft++) {
      var tier = document.getElementById("fn-t" + ft); if (!tier) continue;
      var lbl = tier.querySelector("span"); if (lbl) lbl.textContent = t.fn_t[ft - 1];
    }
    var fnk1 = document.querySelector("#fn-side1 .klabel"); if (fnk1) fnk1.textContent = t.fn_k1;
    var fnd1 = document.querySelector("#fn-side1 div:last-child"); if (fnd1) fnd1.innerHTML = t.fn_d1;
    var fnk2 = document.querySelector("#fn-side2 .klabel"); if (fnk2) fnk2.textContent = t.fn_k2;
    var fnd2 = document.querySelector("#fn-side2 div:last-child"); if (fnd2) fnd2.innerHTML = t.fn_d2;
    set("fn-side3", t.fn_d3);

    // 12 Comunidad
    set("cm-eyebrow", t.cm_eyebrow);
    set("cm-h", t.cm_h);
    ["cm-w1", "cm-w2"].forEach(function (id, i) { chipText(document.getElementById(id), t.cm_w[i]); });
    set("cm-w3", t.cm_sub);
    qsa("#cm-grid .card").forEach(function (card, i) { if (t.cm_g[i]) card.textContent = t.cm_g[i]; });
    var cmLine = document.querySelector("#cm-line div:last-child"); if (cmLine) cmLine.innerHTML = t.cm_line;

    // 13 Promociones
    set("pr-cap", t.pr_cap);
    set("pr-levels-label", t.pr_levels_label);
    qsa("#pr-levels .card span:last-child").forEach(function (s, i) { if (t.pr_lv[i]) s.innerHTML = t.pr_lv[i]; });
    set("pr-dyn-label", t.pr_dyn_label);
    qsa("#pr-dyn .card").forEach(function (card, i) {
      var ti = card.querySelector("div"); var de = card.querySelector(".dim");
      if (ti && t.pr_dt[i]) ti.textContent = t.pr_dt[i];
      if (de && t.pr_dd[i]) de.textContent = t.pr_dd[i];
    });
    var prNote = document.querySelector("#pr-note span"); if (prNote) prNote.innerHTML = t.pr_note;

    // 14 Remarketing
    set("rm-eyebrow", t.rm_eyebrow);
    set("rm-h", t.rm_h);
    for (var r = 1; r <= 4; r++) {
      var row = document.getElementById("rm-" + r); if (!row) continue;
      var cells = row.querySelectorAll("span");
      var title = cells[1], desc = cells[2];
      if (title) title.textContent = t.rm_t[r - 1];
      if (desc) desc.textContent = t.rm_d[r - 1];
    }
    var rmTag = document.querySelector("#rm-note .tag"); if (rmTag) rmTag.textContent = t.rm_tag;
    var rmNote = document.querySelector("#rm-note span.dim"); if (rmNote) rmNote.textContent = t.rm_note;

    // 15 Referidos
    set("rf-eyebrow", t.rf_eyebrow);
    set("rf-h", t.rf_h);
    var rfOp = document.querySelector("#rf-chain .card .klabel"); if (rfOp) rfOp.textContent = t.rf_op;
    var rfLvs = qsa("#rf-chain .card .klabel");
    [1, 2, 3].forEach(function (n, i) { if (rfLvs[n]) rfLvs[n].textContent = t.rf_lv + " " + n; });
    var rfUsers = qsa("#rf-chain .card div:nth-child(2)");
    [1, 2, 3].forEach(function (n, i) { if (rfUsers[n]) rfUsers[n].textContent = t.rf_users[i]; });
    set("rf-ex", t.rf_ex);
    set("rf-msg", "<div style='font-size:64px; font-weight:800;' class='gold'>→</div><div style='font-size:34px; font-weight:700; line-height:1.35;'>" + t.rf_msg + "</div>");

    // 16 Equipo
    set("eq-eyebrow", t.eq_eyebrow);
    set("eq-h", t.eq_h);
    for (var e = 1; e <= 5; e++) {
      var eqCard = document.getElementById("eq-" + e); if (!eqCard) continue;
      var et = eqCard.querySelector("div"); var ed = eqCard.querySelector(".dim");
      if (et) et.innerHTML = t.eq_t[e - 1];
      if (ed) ed.textContent = t.eq_d[e - 1];
    }
    var eqLine = document.querySelector("#eq-line div:last-child"); if (eqLine) eqLine.innerHTML = t.eq_line;

    // 17 Métricas
    set("mx-eyebrow", t.mx_eyebrow);
    set("mx-h", t.mx_h);
    set("mx-badge", "<span class='tag'>" + t.mx_badge + "</span>");
    for (var x = 1; x <= 12; x++) {
      var mxCard = document.getElementById("mx-" + x); if (!mxCard) continue;
      var mk = mxCard.querySelector(".klabel"); if (mk) mk.textContent = t.mx_k[x - 1];
    }
    var mxTag = document.querySelector("#mx-note .tag"); if (mxTag) mxTag.textContent = t.mx_tag;
    var mxNote = document.querySelector("#mx-note span.dim"); if (mxNote) mxNote.textContent = t.mx_note;

    // 18 Plan 30 días
    set("pn-eyebrow", t.pn_eyebrow);
    set("pn-h", t.pn_h);
    for (var p = 1; p <= 4; p++) {
      var pnCard = document.getElementById("pn-" + p); if (!pnCard) continue;
      var ttl = pnCard.querySelectorAll("span")[1]; var desc = pnCard.querySelector(".dim");
      if (ttl && t.pn_t[p - 1]) ttl.textContent = t.pn_t[p - 1];
      if (desc) desc.textContent = t.pn_d[p - 1];
    }
    var pnTag = document.querySelector("#pn-strip .tag"); if (pnTag) pnTag.textContent = t.pn_3090;
    var pnStrip = document.querySelector("#pn-strip span.dim"); if (pnStrip) pnStrip.innerHTML = t.pn_strip;

    // 19 Escalamiento
    set("es-eyebrow", t.es_eyebrow);
    set("es-h", t.es_h);
    for (var s2 = 1; s2 <= 4; s2++) {
      var esCard = document.getElementById("es-" + s2); if (!esCard) continue;
      var ek = esCard.querySelector(".klabel"); var edivs = esCard.querySelectorAll("div");
      if (ek) ek.textContent = t.es_k[s2 - 1];
      var numDiv = edivs[1], subDiv = esCard.querySelector(".dim");
      if (s2 === 4 && numDiv) numDiv.textContent = t.es_t4;
      if (subDiv) subDiv.textContent = t.es_sub[s2 - 1];
    }
    var esTag = document.querySelector("#es-note .tag"); if (esTag) esTag.textContent = t.es_tag;
    var esNote = document.querySelector("#es-note span.dim"); if (esNote) esNote.textContent = t.es_note;

    // 20 Activaciones
    set("ac-eyebrow", t.ac_eyebrow);
    set("ac-h", t.ac_h);
    for (var a = 1; a <= 3; a++) {
      var acCard = document.getElementById("ac-" + a); if (!acCard) continue;
      var ak = acCard.querySelector(".klabel"); var amain = acCard.querySelectorAll("div")[1]; var asub = acCard.querySelector(".dim");
      if (ak) ak.textContent = t.ac_k[a - 1];
      if (amain) amain.textContent = t.ac_d[a - 1];
      if (asub) asub.textContent = t.ac_s[a - 1];
    }
    chipsText(qsa("#ac-chain .chip"), t.ac_chain);
    set("ac-line", t.ac_line);

    // 21 Punta Cana
    set("pc-eyebrow", t.pc_eyebrow);
    set("pc-h", t.pc_h);
    var pck1 = document.querySelector("#pc-1 .klabel"); if (pck1) pck1.textContent = t.pc_k1;
    chipsText(qsa("#pc-1 .chip"), t.pc_c);
    var pck2 = document.querySelector("#pc-2 .klabel"); if (pck2) pck2.textContent = t.pc_k2;
    var pcd2 = document.querySelector("#pc-2 .dim"); if (pcd2) pcd2.textContent = t.pc_d2;
    var pcLine = document.querySelector("#pc-line div:last-child"); if (pcLine) pcLine.innerHTML = t.pc_line;

    // 22 Cierre
    set("cl-eyebrow", t.cl_eyebrow);
    set("cl-h", t.cl_h);
    set("cl-sub", t.cl_sub);
    qsa("#cl-words span").forEach(function (s, i) { if (t.cl_words[i]) s.textContent = t.cl_words[i]; });
    set("cl-foot", t.cl_foot);

    document.documentElement.setAttribute("lang", lang);
  }

  function current() {
    try { return localStorage.getItem("hf-lang") || "es"; } catch (e) { return "es"; }
  }

  apply(current());

  window.addEventListener("message", function (e) {
    var d = e.data;
    if (d && d.type === "hf-lang" && d.lang && L[d.lang]) {
      apply(d.lang);
      if (window.__hfSetTime) window.__hfSetTime(0);
    }
  });
  window.addEventListener("storage", function (e) {
    if (e.key === "hf-lang" && e.newValue && L[e.newValue]) {
      apply(e.newValue);
      if (window.__hfSetTime) window.__hfSetTime(0);
    }
  });
})();
