document.addEventListener("DOMContentLoaded", function () {
    // Lista de URLs das imagens
    const imageUrls = ["./src/imagens/Profile.jpg", "./src/imagens/luigi.gif"];

    let currentIndex = 0;

    function updateImage() {
        const image = document.getElementById("image");

        // Adicione a classe para aplicar a animação de rotação horizontal
        image.classList.add("rotate");

        // Aguarde a conclusão da animação (2 segundos) antes de remover a classe
        setTimeout(function () {
            image.classList.remove("rotate");
        }, 2000);

        // Atualize a imagem após a animação completa
        setTimeout(function () {
            image.src = imageUrls[currentIndex];
            currentIndex = (currentIndex + 1) % imageUrls.length;
            updateImage();
        }, 2500);
    }

    // Inicie a transição da imagem
    updateImage();
});

