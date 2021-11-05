enum MotivacionPaciente {
    Recomendacion = "Recomendación",
    RedesSociales = "Redes Sociales",
    DesicionPersonal = "Desición Personal",
    ArticulosRevistas = "Artículos y revistas"
}

enum ColorPiel {
    MuyBlanco = "Muy blanco",
    Blanco = "Blanco",
    MorenoClaro = "Moreno claro",
    MorenoMedio = "Moreno medio",
    MorenoOscuro = "Moreno oscuro",
    Negro = "Negro"
}

enum GrosorPiel {
    Delgado = "Delgado",
    Medio = "Medio",
    Grueso = "Grueso"
}

enum EnfermedadPiel {
    Acne = "Acné",
    Cicatrices = "Cicatrices",
    Rosacea = "Rosacea",
    Vitiligo = "Vitiligo"
}

export const OpcionesEnfermedadPiel = [
    EnfermedadPiel.Acne,
    EnfermedadPiel.Cicatrices,
    EnfermedadPiel.Rosacea,
    EnfermedadPiel.Vitiligo
]

export const OpcionesGrosorPiel = [
    GrosorPiel.Delgado,
    GrosorPiel.Medio,
    GrosorPiel.Grueso
]

export const OpcionesColorPiel = [
    ColorPiel.MuyBlanco,
    ColorPiel.Blanco,
    ColorPiel.MorenoClaro,
    ColorPiel.MorenoMedio,
    ColorPiel.MorenoOscuro,
    ColorPiel.Negro
]

export const OpcionesMotivacionPaciente = [
    MotivacionPaciente.Recomendacion,
    MotivacionPaciente.RedesSociales,
    MotivacionPaciente.DesicionPersonal,
    MotivacionPaciente.ArticulosRevistas
]