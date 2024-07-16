// DELETE PRODUCT

import { connectApi } from "./connectApi.js";

async function deleteProduct(productId) {
    const userConfirmed = confirm("Tem certeza que quer excluir esse produto?");
    if (!userConfirmed) {
        return; // Se o usuário cancelar, a função retorna sem deletar o produto
    }
    try {
        await connectApi.deleteProduct(productId);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }

    window.location.reload(true);
}

export { deleteProduct };
