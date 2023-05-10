/**
 * This function will return a promise that will resolve to an array of objects, each object
 * representing a video.
 * @returns An array of objects.
 */
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida =  await conexao.json();
    
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}