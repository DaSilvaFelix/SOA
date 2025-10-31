export function evaluarSuelo(tipoSuelo: string, ph: number): "Bueno" | "Regular" | "Malo" {
    let rangoBueno: [number, number];

    switch (tipoSuelo) {
        case "arcilloso":
            rangoBueno = [6, 7];
            break;
        case "arenoso":
            rangoBueno = [5.5, 6.5];
            break;
        case "franco":
            rangoBueno = [6, 7.5];
            break;
        default:
            return "Malo"; // tipo de suelo desconocido
    }

    if (ph >= rangoBueno[0] && ph <= rangoBueno[1]) {
        return "Bueno";
    } else if (ph >= rangoBueno[0] - 0.5 && ph <= rangoBueno[1] + 0.5) {
        return "Regular";
    } else {
        return "Malo";
    }
}