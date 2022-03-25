
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipo y la revolvió para hacer un libro de especímenes tipo. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas letraset que contenían pasajes de Lorem Ipsum, y más recientemente con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.',
            picture: null, //https
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de autoedición y editores de páginas web ahora usan Lorem Ipsum como su texto de modelo predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y similares).",
            picture: null, //https
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría han sufrido alteraciones de alguna forma, por humor inyectado o palabras aleatorias que no parecen ni siquiera ligeramente creíbles. Si va a usar un pasaje de Lorem Ipsum, debe asegurarse de que no haya nada vergonzoso escondido en medio del texto. Todos los generadores Lorem Ipsum en Internet tienden a repetir trozos predefinidos según sea necesario, lo que lo convierte en el primer generador verdadero en Internet. Utiliza un diccionario de más de 200 palabras latinas, combinado con un puñado de estructuras de oraciones modelo, para generar Lorem Ipsum que parece razonable. Por lo tanto, el Lorem Ipsum generado siempre está libre de repetición, humor inyectado o palabras no características, etc.",
            picture: null, //https
        }
    ],
    
})

