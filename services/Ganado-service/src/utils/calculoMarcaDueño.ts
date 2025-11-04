export const createIdGenerator = (() => {
    let counter = 12358; // contador inicial
    return () => {
        counter += 1;
        const numeroStr = counter.toString(); // convertir a string
        return "ARG-" + numeroStr.padStart(3, "0"); // concatenar con prefijo
    };
})()