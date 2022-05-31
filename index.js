
document.addEventListener("DOMContentLoaded", () => {

    const infoModal = document.getElementsByClassName('info-modal');
    for (let infoM of infoModal) {
        const confBtn = infoM.previousSibling.previousSibling;
        confBtn.addEventListener('click', function onOpen() {
            if (typeof infoM.showModal === "function") {
                infoM.showModal();
            } else {
                alert("The <dialog> API is not supported by this browser");
            }
        });
    }

    if(localStorage.getItem('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme','dark');
    }

    document.getElementById('darkToggle').addEventListener('click',()=> {
        if(document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme','light');
            localStorage.setItem("data-theme", "light")
        } else {
            document.documentElement.setAttribute('data-theme','dark');
            localStorage.setItem("data-theme", "dark")
        }
    });
});
